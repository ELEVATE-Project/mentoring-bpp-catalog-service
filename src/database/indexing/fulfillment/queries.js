'use strict'
const { client } = require('@configs/elasticsearch')

exports.findById = async (id) => {
	return await client.get({ index: process.env.ELASTIC_FULFILLMENT_INDEX, id })
}