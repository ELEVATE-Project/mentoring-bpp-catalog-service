'use strict'

const { faker } = require('@faker-js/faker')

const states = ['Odisha', 'Gujarat', 'Kerala', 'Sikkim', 'Rajasthan', 'Karnataka', 'Maharashtra', 'Punjab']

const stateCreator = () => {
	return faker.helpers.arrayElement(states)
}

const capacities = [50, 100, 200, 300]

const capacityCreator = () => {
	return faker.helpers.arrayElement(capacities)
}

const facilities = ['ac', 'wifi', 'smartclass', 'catering', 'parking']

const facilitiesCreator = () => {
	return faker.helpers.arrayElements(facilities)
}
exports.agentHandlers = {
	stateCreator,
	capacityCreator,
	facilitiesCreator,
}

exports.agentTemplate = {
	person: {
		id: '{{mentor._id}}',
		name: '{{mentor.name}}',
		image: {
			url: '{{mentor.image}}',
		},
		state: '=> stateCreator()',
		capacity: '=> capacityCreator()',
		facilities: '=> facilitiesCreator()',
	},
}
