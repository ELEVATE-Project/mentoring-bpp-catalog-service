'use strict'

exports.sessionHandlers = {}

exports.sessionTemplate = {
	id: '{{_id}}',
	providerId: '{{organization._id}}',
	agentId: '{{mentor._id}}',
	descriptor: {
		name: '{{title}}',
		code: '{{title}}', //This needs modification
		short_desc: '{{description}}',
		long_desc: '{{description}}',
		images: [
			{
				url: '{{image}}',
			},
		],
	},
	fulfillment_ids: ['{{fulfillmentId}}'],
	price: {
		value: '0',
	},
	quantity: {
		allocated: {
			count: 10,
		},
		available: {
			count: 5,
		},
	},
}
