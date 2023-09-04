'use strict'
const { client } = require('@configs/elasticsearch')

const search = async (query) => {
	console.log('QUERY: ', query)
	return await client.search({
		index: process.env.ELASTIC_AGENT_INDEX,
		query,
	})
}

const findById = async (id) => {
	return await client.get({ index: process.env.ELASTIC_AGENT_INDEX, id })
}

const findByName = async (agentName) => {
	try {
		const result = await search({
			match: {
				'person.name': agentName,
			},
		})
		return result
	} catch (err) {
		console.log(err)
	}
}

const findRooms = async (query) => {
	try {
		const result = await search(query)
		return result
	} catch (err) {
		console.log(err)
	}
}
const agentQueries = { findById, findByName, findRooms }

module.exports = agentQueries
