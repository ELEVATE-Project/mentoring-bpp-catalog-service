'use strict'
const axios = require('axios')
const { emptyFieldSanitizer } = require('@utils/emptyFieldSanitizer')
const TRANSFORMER_URL = process.env.TRANSFORMER_URL || 'http://elevate-transformer:3009'

exports.objectTransformer = async (inputObject, serviceName, type) => {
	try {
		//console.log('Input Object: ', inputObject)
		const response = await axios.post(
			`${TRANSFORMER_URL}/transformer/transform`,
			{
				service_name: serviceName,
				type: type,
				input_data: inputObject,
			},
			{
				headers: { 'Content-Type': 'application/json' },
			}
		)
		console.log('--------------------------------------------------------------------------------')
		console.log('Response for', type, ':', response.data)
		return emptyFieldSanitizer(response.data)
	} catch (error) {
		console.error('Error in objectTransformer:', error?.response?.data || error.message || error)
		throw new Error(`Transformation service failed: ${error.message}`)
	}
}
