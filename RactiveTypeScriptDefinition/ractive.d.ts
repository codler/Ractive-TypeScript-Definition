// Type definitions for Ractive 0.4.0
// Project: http://ractivejs.org
// Definitions by: Han Lin Yap <http://yap.nu>
// Definitions: https://github.com/codler/Ractive-TypeScript-Definition

// Version: 0.4.0-1
// License: MIT License

// It's functionally identical to the ES6 promise (as currently spec'd) except that Promise.race and Promise.cast are not currently implemented.
// TODO: Implement interface or wait until typescript include native Promise definition.
interface RactivePromise {
	();
}

interface RactiveObserve {
	cancel(): void; // TODO void?
}

interface RactiveEvent {
	context: any;
	// TODO: unclear in documantation
	index: Object;
	keypath: string;
	node: Node;
	original: Event;
}

interface RactiveAnimateOptions {
	duration?: number;
	// TODO: String or Function
	easing?: any;
	// TODO: number as type correct?
	step?: (t: number, value: number) => void; // TODO: void?
	// TODO: number as type correct?
	complate?: (t: number, value: number) => void; // TODO: void?
}

interface RactiveObserveOptions {
	// Default Ractive
	context?: any;
	// Default false
	debug?: boolean;
	// Default false
	defer?: boolean;
	// Default true
	init?: boolean;
}

// TODO: document default options
interface RactiveNewOptions {
	// Required options

	// TODO: How to split up to String or (if preparsing) Array or Object type?
	template: any;

	// Optional options

	// TODO: Object or Array
	data?: any;
	// TODO: HTMLElement or String or jQuery-like collection
	el?: any;
	partials?: Object;
	// TODO: Boolean or Object
	sanitize?: any;
	transitions?: Object;
	complete?: () => void; // TODO: void?
	// TODO: adaptors or adapt? Confused in documentation
	//adaptors?: any[];

	append?: boolean;
	computed?: boolean;
	debug?: boolean;
	lazy?: boolean;
	magic?: boolean;
	modifyArrays?: boolean;
	preserveWhitespace?: boolean;
	twoway?: boolean;

	// TODO: undocumented
	decorators?: Object;
}

interface RactiveExtendOptions extends RactiveNewOptions {
	// TODO: undocumented arguments
	beforeInit?: () => void; // TODO: void?
	// TODO: undocumented arguments
	init?: () => void; // TODO: void?
	// Default false, inherit from Ractive.defaults
	isolated?: boolean;
}

// TODO: is this correct? Not documented
interface RactiveDefaultsOptions extends RactiveExtendOptions {
}

/**
 * Static members of Ractive
 */
interface RactiveStatic {
	new (options: RactiveNewOptions): Ractive;

	extend(RactiveExtendOptions): RactiveStatic;

	parse(template: string, options?: { preserveWhitespace: boolean, sanitize: any });

	// TODO: undocumented
	adaptors: Object;

	// TODO: undocumented
	defaults: RactiveDefaultsOptions;

	// TODO: undocumented
	decorators: Object;

	// TODO: undocumented
	events: Object;

	// TODO: missing static properties documentation
	partials: Object;

	// Undocumented method
	Promise: RactivePromise;

	// TODO: missing static properties documentation
	transitions: Object;
}

/**
 * The Ractive instance members
 */
interface Ractive {
	add(keypath: string, number?: number): RactivePromise;

	animate(keypath: string, value: any, options?: RactiveAnimateOptions);

	animate(map: Object, options?: RactiveAnimateOptions);

	detach(): DocumentFragment;

	find(selector: string): Node;

	// live default false
	findAll(selector: string, options?: { live: boolean }): Node[];

	// live default false
	findAllComponents(name: string, options?: { live: boolean }): Ractive[];
	// TODO: maybe exist, in that case it is undocumented
	// findAllComponents(): Ractive[]

	findComponent(name?: string): Ractive;

	fire(eventName: string, ...args: any[]): void; // TODO: void?

	get(keypath: string): any;
	get(): Object; // TODO: undocumented. or do it return function if ractive.data defined as function?

	// TODO: target - Node or String or jQuery (see Valid selectors)
	// TODO: anchor - Node or String or jQuery
	insert(target: any, anchor?: any): void; // TODO: void?

	// TODO: compare - Boolean or String or Function
	merge(keypath: string, value: any[], options?: { compare: any });

	// callback context Ractive
	observe(keypath: string, callback: (newValue: any, oldValue: any, keypath: string) => void, options?: RactiveObserveOptions): RactiveObserve;
	observe(map: Object, options?: RactiveObserveOptions): RactiveObserve;

	// TODO: check handler type
	off(eventName?: string, handler?: () => void): void; // TODO: void?

	// TODO: check handler type
	// handler context Ractive
	on(eventName: string, handler: (event?: RactiveEvent, ...args: any[]) => void): RactiveObserve;

	// TODO: ???
	//render();

	reset(data?: Object): RactivePromise;

	set(keypath: string, value: any): RactivePromise;
	set(map: Object): RactivePromise;

	subtract(keypath: string, number?: number): RactivePromise;

	teardown(): RactivePromise;

	toggle(keypath: string): RactivePromise;

	toHTML(): string;

	update(keypath?: string): RactivePromise;

	// Default cascade false
	updateModel(keypath?: string, cascade?: boolean): void; // TODO: void?

	// Properties

	nodes: Object;
	partials: Object;
	transitions: Object;
}

declare module "ractive" {
	export = Ractive;
}
declare var Ractive: RactiveStatic;
