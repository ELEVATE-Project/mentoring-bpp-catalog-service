'use strict'
const sessionQueries = require('@database/indexing/session/queries')
const agentQueries = require('@database/indexing/agent/queries')
const { getprotocolObjectsFromSessions, getStatusObjectsFromSession } = require('@helpers/sessionsToProtocolObjects')
const { getFulfillmentAndAgentObjects } = require('@helpers/fulfillmentAndAgentObjects')
const { protocolResponseDTO } = require('@dtos/protocolResponse')
const { fulfillmentObjectDTO } = require('@dtos/fulfillmentObject')
const { getCount, getDocs, getSourceObject, flattenArrayOfArrays } = require('@utils/generic')

const searchByPersonName = async (requestBody) => {
	const personName = requestBody.intent.agent.person.name
	const result = await agentQueries.findByName(personName)
	if (!getCount(result)) return null
	const agentDocs = getDocs(result)
	const sessionsArray = await Promise.all(
		agentDocs.map(async (agentDoc) => {
			const agent = getSourceObject(agentDoc)
			const sessionsResult = await sessionQueries.findByAgentId(agent.person.id)
			if (!getCount(sessionsResult)) return []
			else return getDocs(sessionsResult)
		})
	)
	return await flattenArrayOfArrays(sessionsArray)
}

const roomSearchQueryGenerator = (roomName, instituteName, seatsNeeded, state, facilities) => {
	let capacityRange = {}
	if (seatsNeeded === 50) capacityRange = { gte: 0, lte: 50 }
	else if (seatsNeeded === 100) capacityRange = { gt: 50, lte: 100 }
	else if (seatsNeeded === 200) capacityRange = { gt: 100, lte: 200 }
	else if (seatsNeeded === 300) capacityRange = { gt: 200 }
	const mustConditions = [{ range: { 'person.capacity': capacityRange } }, { match: { 'person.state': state } }]
	if (roomName) mustConditions.push({ match: { 'person.name': roomName } })
	if (instituteName) mustConditions.push({ match: { 'person.institute': instituteName } })
	const facilitiesConditions = facilities.map((facility) => ({ term: { 'person.facilities': facility } }))
	mustConditions.push(...facilitiesConditions)
	const query = {
		query: {
			bool: {
				must: mustConditions,
			},
		},
	}
	return query
}

const searchByRoomFilters = async (requestBody) => {
	const room = requestBody.intent.room
	const roomName = room.fulfillment.agent.person?.name
	const instituteName = room.fulfillment?.agent?.organization?.descriptor?.name
	const seatsNeeded = room.item?.quantity?.maximum?.count
	const state = room.fulfillment?.agent?.person?.state
	const facilities = room.fulfillment.agent.person?.tags[0].list
	console.log('THINGS:', roomName, instituteName, seatsNeeded, state, facilities)
	console.log('Room Name: ', roomName)
	console.log('institute Name: ', instituteName)
	console.log('seatsNeeded: ', seatsNeeded)
	console.log('state', state)
	console.log('facilities ', facilities)
	console.log(
		'QUERY: ',
		JSON.stringify(roomSearchQueryGenerator(roomName, instituteName, seatsNeeded, state, facilities), null, 3)
	)
}

exports.search = async (requestBody) => {
	let sessionDocs
	if (requestBody.intent.item?.descriptor?.name) {
		const sessionName = requestBody.intent.item.descriptor.name
		const result = await sessionQueries.findByName(sessionName)
		if (!getCount(result)) return null
		sessionDocs = getDocs(result)
	} else if (requestBody.intent.agent?.person?.name) {
		sessionDocs = await searchByPersonName(requestBody)
	} else if (requestBody.intent.room) {
		sessionDocs = await searchByRoomFilters(requestBody)
	}
	const protocolObjects = sessionDocs ? await getprotocolObjectsFromSessions(sessionDocs) : null
	//Handle these cases where any of the elasticsearch results can turn up empty.
	return await protocolResponseDTO(protocolObjects)
}

exports.getFulfillment = async (fulfillmentId) => {
	const { fulfillment, agent } = await getFulfillmentAndAgentObjects(fulfillmentId)
	return await fulfillmentObjectDTO(fulfillment, agent)
}

exports.getSession = async (sessionId, getAllProtocolObjects) => {
	const sessionDoc = await sessionQueries.findById(sessionId)
	if (!sessionDoc.found) return null
	if (!getAllProtocolObjects) return getSourceObject(sessionDoc)
	const protocolObjects = await getprotocolObjectsFromSessions([sessionDoc])
	console.log(protocolObjects)
	return await protocolResponseDTO(protocolObjects)
}

exports.getStatusBody = async (sessionId, fulfillmentId) => {
	try {
		const sessionDoc = await sessionQueries.findById(sessionId)
		if (!sessionDoc.found) return null
		const statusObjects = await getStatusObjectsFromSession(sessionDoc, fulfillmentId)
		return await protocolResponseDTO([statusObjects])
	} catch (err) {
		console.log(err)
	}
}
