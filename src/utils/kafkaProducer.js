'use strict'
const { Kafka } = require('kafkajs')
const kafka = new Kafka({ clientId: process.env.KAFKA_CLIENT_ID, brokers: process.env.KAFKA_BROKERS.split(' ') })
const producer = kafka.producer()

const produce = (topic) => async (data) => {
	try {
        console.log('HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
        console.log('PRODUCER TOPIC: ', topic)
        console.log('data: ', data)
		//data.topic = topic
		await producer.connect()
		await producer.send({
			topic,
			messages: [
				{
					value: JSON.stringify(data),
				},
			],
		})
        await producer.send({
			topic:'mentoring-sessions-3',
			messages: [
				{
					value: JSON.stringify(data),
				},
			],
		})
		console.log(`${topic.toUpperCase()} Enqueued`)
	} catch (err) {
		console.error(err)
	}
}

exports.kafkaProducers = {
	session: produce(process.env.KAFKA_SESSION_TOPIC_ELASTIC),
}
