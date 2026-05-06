'use strict'
const objectTransformers = require('@helpers/objectTransformers')

exports.sessionToESTransformer = async (sessionObject) => {
	const [agent, fulfillment, session, provider] = await Promise.all([
		objectTransformers.objectTransformer(sessionObject, 'mentoring-script', 'agentTemplate'),
		objectTransformers.objectTransformer(sessionObject, 'mentoring-script', 'fulfillmentTemplate'),
		objectTransformers.objectTransformer(sessionObject, 'mentoring-script', 'sessionTemplate'),
		objectTransformers.objectTransformer(sessionObject, 'mentoring-script', 'organizationTemplate'),
	])

	return { agent, fulfillment, session, provider }
}
