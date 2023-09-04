'use strict'
const fulfillmentQueries = require('@database/indexing/fulfillment/queries')
const agentQueries = require('@database/indexing/agent/queries')

exports.getFulfillmentAndAgentObjects = async (fulfillmentId, time) => {
	const fulfillmentDoc = await fulfillmentQueries.findById(fulfillmentId, time)
	const fulfillment = fulfillmentDoc ? fulfillmentDoc._source : null //Use Generic Function Here
	const agentDoc = await agentQueries.findById(fulfillment.agentId)
	const agent = agentDoc._source //Use Generic Function Here
	return { fulfillment, agent }
}
