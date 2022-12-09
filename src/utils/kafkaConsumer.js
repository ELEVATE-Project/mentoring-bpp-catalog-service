'use strict'
const { Kafka } = require('kafkajs')
const kafka = new Kafka({ clientId: process.env.KAFKA_CLIENT_ID, brokers: process.env.KAFKA_BROKERS.split(' ') })
const consumer = kafka.consumer({ groupId: process.env.KAFKA_CLIENT_ID })
const { kafkaProducers } = require('@utils/kafkaProducer')

exports.consume = async () => {
	try {
		await consumer.connect()
		await consumer.subscribe({ topics: [process.env.KAFKA_SESSION_TOPIC] })
		await consumer.run({
			eachMessage: async ({ topic, partition, message }) => {
				const value = JSON.parse(message.value)
                console.log('Message: ', value)
                console.log('TOPIC: ', topic)
				if (topic === process.env.KAFKA_SESSION_TOPIC) await kafkaProducers.session(value)
			},
		})
	} catch (err) {
		console.log(err)
	}
}
