'use strict'
const { Kafka } = require('kafkajs')
const kafka = new Kafka({
	clientId: process.env.KAFKA_CLIENT_ID,
	brokers: process.env.KAFKA_BROKERS.split(','),
	connectionTimeout: 60000,
	retry: {
		initialRetryTime: 1000,
		retries: 8,
	},
})

const initializeConsumer = async () => {
	try {
		const consumer = kafka.consumer({ groupId: process.env.KAFKA_CLIENT_ID })
		consumer.on('consumer.disconnect', () => console.log('Kafka Consumer Disconnected 1'))
		consumer.on('consumer.connect', () => console.log('Kafka Consumer Connected 1'))
		await consumer.connect()
		await consumer.subscribe({ topics: [process.env.KAFKA_SESSION_TOPIC] })
		return consumer
	} catch (err) {
		console.log('Kafka Consumer Initializer Error: ', err)
	}
}

const initializeProducer = async () => {
	try {
		const producer = kafka.producer()
		producer.connect()
		producer.on('producer.connect', () => console.log('Kafka Producer Connected 1'))
		producer.on('producer.disconnect', () => console.log('Kafka Producer Disconnected 1'))
		return producer
	} catch (err) {
		console.log('Kafka Producer Initializer Error: ', err)
	}
}
const consumer = initializeConsumer()
const producer = initializeProducer()

module.exports = { consumer, producer }
