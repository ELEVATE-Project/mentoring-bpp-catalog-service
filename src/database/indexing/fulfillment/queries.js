'use strict'
const { client } = require('@configs/elasticsearch')

const findById = async (id, time) => {
	const response = await client.get({ index: process.env.ELASTIC_FULFILLMENT_INDEX, id })
	const fulfillmentDocument = response.body._source
	if (!fulfillmentDocument || !fulfillmentDocument.time) return null
	const { start, end } = fulfillmentDocument.time.range
	const checkTime = new Date(time)
	const startTime = new Date(start)
	const endTime = new Date(end)
	if (checkTime >= startTime && checkTime <= endTime) return fulfillmentDocument
	else return null
}

const fulfillmentQueries = { findById }

module.exports = fulfillmentQueries
