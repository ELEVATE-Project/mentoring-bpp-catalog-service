'use strict'
const { Kafka } = require('kafkajs')
const { messageRouter } = require('@helpers/messageRouter')
console.log('KAFKA CONFIG FILE')
const kafka = new Kafka({
	clientId: process.env.KAFKA_CLIENT_ID,
	brokers: process.env.KAFKA_BROKERS.split(','),
	connectionTimeout: 60000,
	retry: {
		initialRetryTime: 1000,
		retries: 8,
	},
})

const consumer = kafka.consumer({ groupId: process.env.KAFKA_CLIENT_ID })
consumer.on('consumer.disconnect', () => console.log('Kafka Consumer Disconnected 1'))
consumer.on('consumer.connect', () => console.log('Kafka Consumer Connected 1'))

const producer = kafka.producer()
producer.on('producer.connect', () => console.log('Kafka Producer Connected 1'))
producer.on('producer.disconnect', () => console.log('Kafka Producer Disconnected 1'))

const initializeConsumer = async () => {
	try {
		await consumer.connect()
		await consumer.subscribe({ topics: [process.env.KAFKA_SESSION_TOPIC] })
		await consumer.run({
			eachMessage: async ({ topic, message }) => {
				console.log('CONSUMER KEY: ', message.key)
				const value = JSON.parse(message.value)
				console.log('CONSUMER VALUE: ', value)
				console.log('CONSUMER TOPIC: ', topic)
				//messageRouter(topic, value)
			},
		})
	} catch (err) {
		console.log('Kafka Consumer Initializer Error: ', err)
	}
}

const initializeProducer = async () => {
	try {
		await producer.connect()
	} catch (err) {
		console.log('Kafka Producer Initializer Error: ', err)
	}
}
initializeProducer()
initializeConsumer()

module.exports = { consumer, producer }
