'use strict'

const { producer } = require('@configs/kafka')
console.log('KAFKA PRODUCER FILE')

const produce = (topic) => async (key, value) => {
	try {
		console.log('PRODUCER KEY: ', key)
		console.log('PRODUCER TOPIC: ', topic)
		console.log('PRODUCER DATA: ', JSON.stringify(value, null, 4))
		const res = await producer.send({
			topic,
			messages: [
				{
					key: key,
					value: JSON.stringify(value),
				},
			],
		})
		console.log(`${topic.toUpperCase()} Enqueued`)
		return res
	} catch (err) {
		console.error(err)
	}
}

exports.kafkaProducers = {
	session: produce(process.env.KAFKA_SESSION_ELASTIC_TOPIC),
	provider: produce(process.env.KAFKA_PROVIDER_ELASTIC_TOPIC),
	fulfillment: produce(process.env.KAFKA_FULFILLMENT_ELASTIC_TOPIC),
	agent: produce(process.env.KAFKA_AGENT_ELASTIC_TOPIC),
}
