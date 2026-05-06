'use strict'

exports.agentTemplate = {
	person: {
		id: '{{mentor.user_id}}',
		name: '{{mentor.name}}',
		image: {
			url: '{{mentor.image}}',
		},
		gender: '{{mentor.gender}}',
	},
	rating: '{{mentor.rating.average}}',
}
