/**
 *  This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */
/**
 * Ajv is a peer dependency for development builds. It's used to apply run-time validation
 * to message payloads before passing them on to the underlying analytics instance.
 *
 * Note that the production bundle does not depend on Ajv.
 *
 * You can install it with: `npm install --save-dev ajv`.
 */
import * as Ajv from 'ajv'
export const defaultValidationErrorHandler = (message, validationErrors) => {
	const msg = JSON.stringify(
		{
			type: 'Typewriter JSON Schema Validation Error',
			description:
				`You made an analytics call (${
					message.event
				}) using Typewriter that doesn't match the ` +
				'Tracking Plan spec. Your analytics call will continue to fire in production.',
			errors: validationErrors,
		},
		undefined,
		2
	)
	if (process.env.NODE_ENV === 'test') {
		throw new Error(msg)
	}
	console.error(msg)
	return false
}
let onValidationError = defaultValidationErrorHandler
/**
 * Update the run-time configuration of this Typewriter client.
 * Note that this is currently a no-op for production builds.
 */
export function setTypewriterOptions(options) {
	onValidationError = options.onValidationError || onValidationError
}
/**
 * Validates a message against a JSON Schema using Ajv. If the message
 * is invalid, the `onValidationError` handler will be called.
 * Returns true if the message should be sent on to Segment, and false otherwise.
 */
function matchesSchema(message, schema) {
	const ajv = new Ajv({ schemaId: 'auto', allErrors: true, verbose: true })
	ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'))
	ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))
	if (!ajv.validate(schema, message) && ajv.errors) {
		return onValidationError(message, ajv.errors)
	}
	return true
}
/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext(options = {}) {
	return {
		...options,
		context: {
			...(options.context || {}),
			typewriter: {
				language: 'ts',
				version: '7.0.0',
			},
		},
	}
}
/**
 * Don't do this.
 */
export function I42TerribleEventName3(props, options, callback) {
	const schema = `
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"properties": {
		"context": {},
		"properties": {
			"properties": {
				"0000---terrible-property-name~!3": {
					"description": "Really, don't do this."
				},
				"identifierId": {
					"description": "Duplicate key error in Android"
				},
				"identifier_id": {
					"description": "AcronymStyle bug fixed in v5.0.1",
					"key": "identifier_id"
				}
			},
			"type": "object"
		},
		"traits": {}
	},
	"type": "object",
	"title": "42_--terrible==\"event'++name~!3",
	"description": "Don't do this."
}
	`
	const message = {
		event: '42_--terrible=="event\'++name~!3',
		properties: props || {},
		options,
	}
	if (!matchesSchema(message, schema)) {
		return
	}
	if (window.analytics) {
		window.analytics.track(
			'42_--terrible=="event\'++name~!3',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * This is JSON Schema draft-04 event.
 */
export function draft04Event(props, options, callback) {
	const schema = `
{
	"$schema": "http://json-schema.org/draft-04/schema#",
	"properties": {
		"context": {},
		"properties": {
			"type": "object"
		},
		"traits": {}
	},
	"required": [
		"properties"
	],
	"type": "object",
	"title": "Draft-04 Event",
	"description": "This is JSON Schema draft-04 event."
}
	`
	const message = {
		event: 'Draft-04 Event',
		properties: props || {},
		options,
	}
	if (!matchesSchema(message, schema)) {
		return
	}
	if (window.analytics) {
		window.analytics.track(
			'Draft-04 Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * This is JSON Schema draft-06 event.
 */
export function draft06Event(props, options, callback) {
	const schema = `
{
	"$schema": "http://json-schema.org/draft-06/schema#",
	"properties": {
		"context": {},
		"properties": {
			"type": "object"
		},
		"traits": {}
	},
	"required": [
		"properties"
	],
	"type": "object",
	"title": "Draft-06 Event",
	"description": "This is JSON Schema draft-06 event."
}
	`
	const message = {
		event: 'Draft-06 Event',
		properties: props || {},
		options,
	}
	if (!matchesSchema(message, schema)) {
		return
	}
	if (window.analytics) {
		window.analytics.track(
			'Draft-06 Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * This is an empty event.
 */
export function emptyEvent(props, options, callback) {
	const schema = `
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"properties": {
		"context": {},
		"properties": {
			"type": "object"
		},
		"traits": {}
	},
	"required": [
		"properties"
	],
	"type": "object",
	"title": "Empty Event",
	"description": "This is an empty event."
}
	`
	const message = {
		event: 'Empty Event',
		properties: props || {},
		options,
	}
	if (!matchesSchema(message, schema)) {
		return
	}
	if (window.analytics) {
		window.analytics.track(
			'Empty Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * This event contains all supported variations of properties.
 */
export function exampleEvent(props, options, callback) {
	const schema = `
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"properties": {
		"context": {},
		"properties": {
			"properties": {
				"optional any": {
					"description": "Optional any property"
				},
				"optional array": {
					"description": "Optional array property",
					"items": {
						"description": "",
						"properties": {
							"optional sub-property": {
								"description": "Optional sub-property",
								"type": "string"
							},
							"required sub-property": {
								"description": "Required sub-property",
								"type": "string"
							}
						},
						"required": [
							"required sub-property"
						],
						"type": "object"
					},
					"type": "array"
				},
				"optional array (empty)": {
					"description": "Optional array (empty) property",
					"type": "array"
				},
				"optional boolean": {
					"description": "Optional boolean property",
					"type": "boolean"
				},
				"optional int": {
					"description": "Optional integer property",
					"type": "integer"
				},
				"optional nullable string": {
					"description": "",
					"type": [
						"string",
						"null"
					]
				},
				"optional number": {
					"description": "Optional number property",
					"type": "number"
				},
				"optional number or string": {
					"description": "",
					"type": [
						"number",
						"string"
					]
				},
				"optional object": {
					"description": "Optional object property",
					"key": "optional object",
					"properties": {
						"optional sub-property": {
							"description": "Optional sub-property",
							"key": "optional sub-property",
							"type": "string"
						},
						"required sub-property": {
							"description": "Required sub-property",
							"key": "required sub-property",
							"type": "string"
						}
					},
					"required": [
						"required sub-property"
					],
					"type": "object"
				},
				"optional object (empty)": {
					"description": "Optional object (empty) property",
					"key": "optional object (empty)",
					"type": "object"
				},
				"optional string": {
					"description": "Optional string property",
					"type": "string"
				},
				"optional string regex": {
					"description": "Optional string regex property",
					"pattern": "FOO|BAR",
					"type": "string"
				},
				"required any": {
					"description": "Required any property",
					"key": "required any"
				},
				"required array": {
					"description": "Required array property",
					"items": {
						"description": "",
						"properties": {
							"optional sub-property": {
								"description": "Optional sub-property",
								"type": "string"
							},
							"required sub-property": {
								"description": "Required sub-property",
								"type": "string"
							}
						},
						"required": [
							"required sub-property"
						],
						"type": "object"
					},
					"type": "array"
				},
				"required array (empty)": {
					"description": "Required array (empty) property",
					"key": "required array (empty)",
					"type": "array"
				},
				"required boolean": {
					"description": "Required boolean property",
					"key": "required boolean",
					"type": "boolean"
				},
				"required int": {
					"description": "Required integer property",
					"type": "integer"
				},
				"required nullable string": {
					"description": "",
					"type": [
						"string",
						"null"
					]
				},
				"required number": {
					"description": "Required number property",
					"key": "required number",
					"type": "number"
				},
				"required number or string": {
					"description": "",
					"type": [
						"number",
						"string"
					]
				},
				"required object": {
					"description": "Required object property",
					"key": "required object",
					"properties": {
						"optional sub-property": {
							"description": "Optional sub-property",
							"type": "string"
						},
						"required sub-property": {
							"description": "Required sub-property",
							"type": "string"
						}
					},
					"required": [
						"required sub-property"
					],
					"type": "object"
				},
				"required object (empty)": {
					"description": "Required object (empty) property",
					"key": "required object (empty)",
					"type": "object"
				},
				"required string": {
					"description": "Required string property",
					"type": "string"
				},
				"required string regex": {
					"description": "Required string regex property",
					"pattern": "FOO|BAR",
					"type": "string"
				}
			},
			"required": [
				"required int",
				"required string",
				"required any",
				"required string regex",
				"required boolean",
				"required number",
				"required array (empty)",
				"required array",
				"required object (empty)",
				"required object",
				"required number or string",
				"required nullable string"
			],
			"type": "object"
		},
		"traits": {}
	},
	"required": [
		"properties"
	],
	"type": "object",
	"title": "Example Event",
	"description": "This event contains all supported variations of properties."
}
	`
	const message = {
		event: 'Example Event',
		properties: props || {},
		options,
	}
	if (!matchesSchema(message, schema)) {
		return
	}
	if (window.analytics) {
		window.analytics.track(
			'Example Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * checkin != check_in bug
 */
export function checkIn(props, options, callback) {
	const schema = `
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"labels": {},
	"properties": {
		"context": {},
		"properties": {
			"type": "object"
		},
		"traits": {}
	},
	"type": "object",
	"title": "check_in",
	"description": "checkin != check_in bug"
}
	`
	const message = {
		event: 'check_in',
		properties: props || {},
		options,
	}
	if (!matchesSchema(message, schema)) {
		return
	}
	if (window.analytics) {
		window.analytics.track(
			'check_in',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * checkin != check_in bug
 */
export function checkin(props, options, callback) {
	const schema = `
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"labels": {},
	"properties": {
		"context": {},
		"properties": {
			"type": "object"
		},
		"traits": {}
	},
	"type": "object",
	"title": "checkin",
	"description": "checkin != check_in bug"
}
	`
	const message = {
		event: 'checkin',
		properties: props || {},
		options,
	}
	if (!matchesSchema(message, schema)) {
		return
	}
	if (window.analytics) {
		window.analytics.track(
			'checkin',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
