'use strict'
const axios = require('axios')
const { emptyFieldSanitizer } = require('@utils/emptyFieldSanitizer')

exports.objectTransformer = async (inputObject) => {
	try {
		console.log('Input Object: ', inputObject)
		const response = await axios.post(
			'http://elevate-transformer:3009/transformer/	transform',
			{
				service_name: 'mentoring-script',
				type: 'agentTemplate',
				input_data: inputObject,
			},
			{
				headers: { 'Content-Type': 'application/json' },
			}
		)

		return emptyFieldSanitizer(response.data)
	} catch (error) {
		console.error('Error in objectTransformer:', error)
		throw new Error('Transformation service failed')
	}
}
