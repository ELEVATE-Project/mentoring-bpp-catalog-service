'use strict'
const { client } = require('@configs/elasticsearch')

const findById = async (id, time) => {
	const response = await client.get({ index: process.env.ELASTIC_FULFILLMENT_INDEX, id })
	const fulfillmentDocument = response.body._source
	if (!fulfillmentDocument || !fulfillmentDocument.time) return null
	const { start, end } = fulfillmentDocument.time.range
	const checkDate = new Date(time)
	checkDate.setHours(0, 0, 0, 0)
	const startDate = new Date(start)
	startDate.setHours(0, 0, 0, 0)
	const endDate = new Date(end)
	endDate.setHours(0, 0, 0, 0)
	if (checkDate >= startDate && checkDate <= endDate) return fulfillmentDocument
	else return null
}

const fulfillmentQueries = { findById }

module.exports = fulfillmentQueries
