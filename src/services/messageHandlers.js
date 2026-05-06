'use strict'
const crypto = require('crypto')
const { sessionToESTransformer } = require('@helpers/sessionToESTransformer')
const { kafkaProducers } = require('@helpers/kafkaProducers')
const { faker } = require('@faker-js/faker')

const sessionCreation = async (value) => {
	try {
		value.fulfillmentId = crypto.randomUUID()
		//const sessionImage = value.image[0]
		value.image = faker.image.abstract() + '?random=' + faker.random.alphaNumeric(10) //Refactor this away as soon as possible. Band-aid Solution
		const { agent, fulfillment, session, provider } = await sessionToESTransformer(value)

		console.log('Value:::::::', provider)
		Promise.all([
			kafkaProducers.session(value.id.toString(), session),
			kafkaProducers.fulfillment(value.fulfillmentId, fulfillment),
			kafkaProducers.agent(value.mentor.user_id, agent),
			kafkaProducers.provider(value.organization.id, provider),
		])
			.then(() => {
				console.log('Session Objects Passed To Producer Successfully')
			})
			.catch(() => {
				console.error('Something went wrong while passing session objects')
			})
	} catch (err) {
		console.log(err)
	}
}

const messageHandlers = { sessionCreation }

module.exports = messageHandlers
