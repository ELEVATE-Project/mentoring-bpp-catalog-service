const axios = require('axios')

// API URL
const API_URL = 'http://localhost:3009/transformer/templates'

/**
 * Inserts a template into the transformer service.
 * @param {Object} requestBody - The request payload.
 */
async function insertTemplate(requestBody) {
	try {
		const response = await axios.post(API_URL, requestBody, {
			headers: { 'Content-Type': 'application/json' },
		})
		console.log('Response:', response.status)
	} catch (error) {
		console.error('Error inserting template:', error.response ? error.response.data : error.message)
	}
}

// Example request body
const templateData = {
	service_name: 'mentoring-script',
	type: 'sessionTemplate',
	description: 'Mapping for fulfillment response',
	mapping_schema: `
    {
      "id": id,
      "categories": categories.({
        "id": value,
        "descriptor": {
          "name": label,
          "code": value
        }
      }),
      "category_ids": $map(categories, function($v) {
        $replace($v.value, " ", "-")
      }),
      "providerId": organization.id,
      "agentId": mentor.user_id,
      "descriptor": {
        "name": title,
        "code": title,
        "short_desc": description,
        "long_desc": description,
        "images": [{ "url": image }]
      },
      "fulfillment_ids": [fulfillmentId],
      "price": { "value": "0" },
      "quantity": {
        "allocated": { "count": 10 },
        "available": { "count": 5 }
      },
      "tags": [
        {
          "display": true,
          "descriptor": {
            "code": "recommended_for",
            "name": "recommended_for"
          },
          "list": categories.({
            "descriptor": {
              "code": value,
              "name": label
            }
          })
        },
        {
          "display": true,
          "descriptor": {
            "code": "about_mentor",
            "name": "About Mentor"
          },
          "list": [
            {
              "descriptor": {
                "code": "about_mentor",
                "name": "With over 20 years of experience..."
              }
            }
          ]
        },
        {
          "display": true,
          "descriptor": {
            "code": "professional_experience",
            "name": "Professional Experience"
          },
          "list": [
            {
              "descriptor": {
                "code": "professional_experience",
                "name": "Lead Developer | Co-Founder - CodeWave Solutions"
              }
            }
          ]
        },
        {
          "display": true,
          "descriptor": {
            "code": "qualification",
            "name": "Qualification"
          },
          "list": [
            {
              "descriptor": {
                "code": "qualification",
                "name": "B.Tech from IIT Delhi"
              }
            }
          ]
        },
        {
          "display": true,
          "descriptor": {
            "code": "experience",
            "name": "Experience"
          },
          "list": [
            {
              "descriptor": {
                "code": "experience",
                "name": "10 Years"
              }
            }
          ]
        },
        {
          "display": true,
          "descriptor": {
            "code": "total_meetings",
            "name": "Total Meetings"
          },
          "list": [
            {
              "descriptor": {
                "code": "total_meetings",
                "name": "100+"
              }
            }
          ]
        },
        {
          "display": true,
          "descriptor": {
            "code": "specialist_in",
            "name": "Specialist In"
          },
          "list": [
            {
              "descriptor": {
                "code": "specialist_in",
                "name": "Backend Development"
              }
            }
          ]
        }
      ]
    }
    `,
	function_definitions: {},
}

const templateData1 = {
	service_name: 'mentoring-script',
	type: 'agentTemplate',
	description: 'Mapping for agent response',
	mapping_schema: `
    {
      "person": {
        "id": mentor.user_id,
        "name": mentor.name,
        "image": {
          "url": mentor.image
        },
        "gender": mentor.gender
      },
      "rating": mentor.rating.average
    }
    `,
	function_definitions: {},
}
const templateData2 = {
	service_name: 'mentoring-script',
	type: 'fulfillmentTemplate',
	description: 'Mapping for agent response',
	mapping_schema: `
    {
    "id": fulfillmentId,
    "type": "ONLINE",
    "language": medium.label,
    "agentId": mentor.user_id,
    "agentName": mentor.name,
    "tags": [
        {
        "display": false,
        "descriptor": { "code": "status", "name": "status" },
        "list": [
            {
            "descriptor": { "code": "live", "name": "Live" }
            }
        ]
        },
        {
        "display": false,
        "descriptor": { "code": "timeZone", "name": "timeZone" },
        "list": [
            {
            "descriptor": { "code": "timeZone", "name": "timeZone" }
            }
        ]
        }
    ],
    "time": {
        "label": "Session Timing",
        "range": { "start": startDateUtc, "end": endDateUtc }
    }
    }
    `,
	function_definitions: {},
}
const templateData3 = {
	service_name: 'mentoring-script',
	type: 'organizationTemplate',
	description: 'Mapping for organization details',
	mapping_schema: `
    {
      "id": organization.id,
      "descriptor": {
        "name": organization.name,
        "code": organization.code,
        "short_desc": organization.description
      },
      "rateable": false
    }
    `,
	function_definitions: {},
}

// Call the function with the example data
insertTemplate(templateData)
insertTemplate(templateData1)
insertTemplate(templateData2)
insertTemplate(templateData3)

// Export the function for reuse in other files
module.exports = insertTemplate
