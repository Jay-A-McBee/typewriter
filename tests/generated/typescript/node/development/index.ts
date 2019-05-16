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

/**
 * Type definitions for Segment's analytics-node.
 */
export namespace Segment {
	/** A minimal interface for Segment's analytics-node. */
	export interface AnalyticsNode {
		track: (
			message: TrackMessage<Record<string, any>>,
			callback?: Callback
		) => void
	}

	/**
	 * TrackMessage represents a message payload for an analytics `.track()` call.
	 * See: https://segment.com/docs/spec/track/
	 */
	export interface TrackMessage<PropertiesType> extends Record<string, any> {
		/** The ID for this user in your database. */
		userId: string | number
		/** An ID to associated with the user when you don’t know who they are. */
		anonymousId?: string | number
		/** A dictionary of properties for the event. */
		properties?: PropertiesType
		/**
		 * A Javascript date object representing when the track took place.
		 * If the track just happened, leave it out and we’ll use the server’s
		 * time. If you’re importing data from the past make sure you to send
		 * a timestamp.
		 */
		timestamp?: Date
		/**
		 * A dictionary of extra context to attach to the call.
		 * https://segment.com/docs/spec/common/#context
		 */
		context?: Context
		/**
		 * A dictionary of destination names that the message should be sent to.
		 * By default all destinations are enabled. 'All' is a special key that
		 * applies when no key for a specific destination is found.
		 * https://segment.com/docs/spec/common/#integrations
		 */
		integrations?: {
			All?: boolean
			AppsFlyer?: {
				appsFlyerId: string
			}
			[key: string]: boolean | { [key: string]: string } | undefined
		}
	}

	/**
	 * Context is a dictionary of extra information that provides useful context about a datapoint.
	 * @see {@link https://segment.com/docs/spec/common/#context}
	 */
	export interface Context extends Record<string, any> {
		active?: boolean
		app?: {
			name?: string
			version?: string
			build?: string
		}
		campaign?: {
			name?: string
			source?: string
			medium?: string
			term?: string
			content?: string
		}
		device?: {
			id?: string
			manufacturer?: string
			model?: string
			name?: string
			type?: string
			version?: string
		}
		ip?: string
		locale?: string
		location?: {
			city?: string
			country?: string
			latitude?: string
			longitude?: string
			region?: string
			speed?: string
		}
		network?: {
			bluetooth?: string
			carrier?: string
			cellular?: string
			wifi?: string
		}
		os?: {
			name?: string
			version?: string
		}
		page?: {
			hash?: string
			path?: string
			referrer?: string
			search?: string
			title?: string
			url?: string
		}
		referrer?: {
			type?: string
			name?: string
			url?: string
			link?: string
		}
		screen?: {
			density?: string
			height?: string
			width?: string
		}
		timezone?: string
		groupId?: string
		traits?: Record<string, any>
		userAgent?: string
	}

	/** The callback exposed by analytics-node. */
	export type Callback = (err: Error) => void
}

/**
 * Don't do this.
 */
export interface I42TerribleEventName3 {
	/**
	 * Really, don't do this.
	 */
	'0000---terrible-property-name~!3'?: any
	/**
	 * Duplicate key error in Android
	 */
	identifierId?: any
	/**
	 * AcronymStyle bug fixed in v5.0.1
	 */
	identifier_id?: any
}
/**
 * Optional array property
 */
export interface OptionalArray {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * Optional object property
 */
export interface OptionalObject {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * Required array property
 */
export interface RequiredArray {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * Required object property
 */
export interface RequiredObject {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * This event contains all supported variations of properties.
 */
export interface ExampleEvent {
	/**
	 * Optional any property
	 */
	'optional any'?: any
	/**
	 * Optional array property
	 */
	'optional array'?: OptionalArray[]
	/**
	 * Optional array (empty) property
	 */
	'optional array (empty)'?: any[]
	/**
	 * Optional boolean property
	 */
	'optional boolean'?: boolean
	/**
	 * Optional integer property
	 */
	'optional int'?: number
	'optional nullable string'?: string | null
	/**
	 * Optional number property
	 */
	'optional number'?: number
	'optional number or string'?: number | string
	/**
	 * Optional object property
	 */
	'optional object'?: OptionalObject
	/**
	 * Optional object (empty) property
	 */
	'optional object (empty)'?: Record<string, any>
	/**
	 * Optional string property
	 */
	'optional string'?: string
	/**
	 * Optional string regex property
	 */
	'optional string regex'?: string
	/**
	 * Required any property
	 */
	'required any': any
	/**
	 * Required array property
	 */
	'required array': RequiredArray[]
	/**
	 * Required array (empty) property
	 */
	'required array (empty)': any[]
	/**
	 * Required boolean property
	 */
	'required boolean': boolean
	/**
	 * Required integer property
	 */
	'required int': number
	'required nullable string': string | null
	/**
	 * Required number property
	 */
	'required number': number
	'required number or string': number | string
	/**
	 * Required object property
	 */
	'required object': RequiredObject
	/**
	 * Required object (empty) property
	 */
	'required object (empty)': Record<string, any>
	/**
	 * Required string property
	 */
	'required string': string
	/**
	 * Required string regex property
	 */
	'required string regex': string
}

/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext<P>(
	message: Segment.TrackMessage<P>
): Segment.TrackMessage<P> {
	return {
		...message,
		context: {
			...(message.context || {}),
			typewriter: {
				language: 'ts',
				version: '7.0.0',
			},
		},
	}
}

/** Helper to insert an event name into a track call. */
function withEventName<P>(
	message: Segment.TrackMessage<P>,
	eventName: string
): Segment.TrackMessage<P> {
	return {
		...message,
		event: eventName,
	}
}

export type ValidationErrorHandler = (
	message: Segment.TrackMessage<Record<string, any>>,
	validationErrors: Ajv.ErrorObject[]
) => boolean

/** Options to customize the runtime behavior of a Typewriter client. */
export interface TypewriterOptions {
	/**
	 * Handler fired when if an event does not match its spec. Returns a boolean
	 * indicating if the message should still be sent to Segment. This handler
	 * does not fire in production mode, because it requires inlining the full
	 * JSON Schema spec.
	 *
	 * By default, it will throw errors if NODE_ENV = "test" so that tests will fail
	 * if a message does not match the spec. Otherwise, errors will be logged to stderr.
	 * Also by default, invalid messages will be dropped.
	 */
	onValidationError?: ValidationErrorHandler
}

export const defaultValidationErrorHandler: ValidationErrorHandler = (
	message,
	validationErrors
) => {
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

/**
 * A strongly-typed wrapper around analytics-node automatically generated based on your Tracking Plan.
 */
export default class Analytics {
	private analytics: Segment.AnalyticsNode

	private onValidationError: ValidationErrorHandler

	/**
	 * Instantiate a wrapper around an analytics-node instance.
	 * @param {Segment.AnalyticsNode} analytics The analytics-node library to wrap
	 * @param {TypewriterOptions} [options] Optional configuration of the Typewriter client
	 * @param {function} [options.onValidationError] Error handler fired when run-time validation errors
	 *     are raised.
	 */
	public constructor(
		analytics: Segment.AnalyticsNode,
		options: TypewriterOptions = {}
	) {
		this.analytics = analytics || { track: () => null }

		this.onValidationError =
			options.onValidationError || defaultValidationErrorHandler
	}

	/**
	 * Validates a message against a JSON Schema using Ajv. If the message
	 * is invalid, the `onValidationError` handler will be called.
	 * Returns true if the message should be sent on to Segment, and false otherwise.
	 */
	private matchesSchema(
		message: Segment.TrackMessage<Record<string, any>>,
		schema: string
	): boolean {
		const ajv = new Ajv({ schemaId: 'auto', allErrors: true, verbose: true })
		ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'))
		ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))

		if (!ajv.validate(schema, message) && ajv.errors) {
			return this.onValidationError(message, ajv.errors)
		}

		return true
	}

	/**
	 * Don't do this.
	 */
	public I42TerribleEventName3(
		message: Segment.TrackMessage<I42TerribleEventName3>,
		callback?: Segment.Callback
	): void {
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
		if (!this.matchesSchema(message, schema)) {
			return
		}

		this.analytics.track(
			withTypewriterContext(
				withEventName(message, '42_--terrible=="event\'++name~!3')
			),
			callback
		)
	}

	/**
	 * This is JSON Schema draft-04 event.
	 */
	public draft04Event(
		message: Segment.TrackMessage<Record<string, any>>,
		callback?: Segment.Callback
	): void {
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
		if (!this.matchesSchema(message, schema)) {
			return
		}

		this.analytics.track(
			withTypewriterContext(withEventName(message, 'Draft-04 Event')),
			callback
		)
	}

	/**
	 * This is JSON Schema draft-06 event.
	 */
	public draft06Event(
		message: Segment.TrackMessage<Record<string, any>>,
		callback?: Segment.Callback
	): void {
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
		if (!this.matchesSchema(message, schema)) {
			return
		}

		this.analytics.track(
			withTypewriterContext(withEventName(message, 'Draft-06 Event')),
			callback
		)
	}

	/**
	 * This is an empty event.
	 */
	public emptyEvent(
		message: Segment.TrackMessage<Record<string, any>>,
		callback?: Segment.Callback
	): void {
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
		if (!this.matchesSchema(message, schema)) {
			return
		}

		this.analytics.track(
			withTypewriterContext(withEventName(message, 'Empty Event')),
			callback
		)
	}

	/**
	 * This event contains all supported variations of properties.
	 */
	public exampleEvent(
		message: Segment.TrackMessage<ExampleEvent>,
		callback?: Segment.Callback
	): void {
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
		if (!this.matchesSchema(message, schema)) {
			return
		}

		this.analytics.track(
			withTypewriterContext(withEventName(message, 'Example Event')),
			callback
		)
	}

	/**
	 * checkin != check_in bug
	 */
	public checkIn(
		message: Segment.TrackMessage<Record<string, any>>,
		callback?: Segment.Callback
	): void {
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
		if (!this.matchesSchema(message, schema)) {
			return
		}

		this.analytics.track(
			withTypewriterContext(withEventName(message, 'check_in')),
			callback
		)
	}

	/**
	 * checkin != check_in bug
	 */
	public checkin(
		message: Segment.TrackMessage<Record<string, any>>,
		callback?: Segment.Callback
	): void {
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
		if (!this.matchesSchema(message, schema)) {
			return
		}

		this.analytics.track(
			withTypewriterContext(withEventName(message, 'checkin')),
			callback
		)
	}
}
