'use strict'

exports.providerTemplate = {
	id: '{{organization.id}}',
	descriptor: {
		name: '{{organization.name}}',
		code: '{{organization.code}}',
		short_desc: '{{organization.description}}',
	},
	rateable: false,
}
