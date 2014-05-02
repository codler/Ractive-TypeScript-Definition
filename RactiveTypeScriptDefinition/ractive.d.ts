// Type definitions for Ractive 0.4.0
// Project: http://ractivejs.org
// Definitions by: Han Lin Yap <http://yap.nu>
// Definitions: https://github.com/codler/Ractive-TypeScript-Definition
// Version: 0.4.0-3+2014-05-02

// It's functionally identical to the ES6 promise (as currently spec'd) except that Promise.race and Promise.cast are not currently implemented.
interface RactivePromise extends Object {
	// TODO: Implement interface or wait until typescript include native Promise definition.
}

interface RactiveComponentPlugin extends RactiveStatic {
	// TODO: 
}

interface RactiveDecoratorPlugin extends Function {
	// TODO: 
}

interface RactiveEventPlugin extends Function {
	// TODO: 
}

interface RactiveTransitionPlugin {
	(t: RactiveTransition, params: Object);
}

interface RactiveEvent {
	context: any;
	// TODO: unclear in documantation
	index: Object;
	keypath: string;
	node: Node;
	original: Event;
}

// Return value in ractive.observe and ractive.on
interface RactiveObserve {
	cancel(): void;
}

// Comes as first parameter in RactiveTransitionPlugin
interface RactiveTransition {
	isIntro: boolean;
	name: string;
	node: Node;

	animateStyle(prop: string, value: any, options: RactiveTransitionAnimateOptions, complete: Function): void;
	animateStyle(props: Object, options: RactiveTransitionAnimateOptions, complete: Function): void;
	// Default false
	complete(noReset?: boolean): void;
	getStyle(prop: string): string;
	getStyle(props: string[]): Object;
	processParams(params: any, defaults?: Object): Object;
	resetStyle(): void;
	setStyle(prop: string, value: any): RactiveTransition;
	setStyle(props: Object): RactiveTransition;
}

interface RactiveTransitionAnimateOptions {
	// TODO: Do it have default value?
	duration: number;
	// Any valid CSS timing function
	// Default 'linear'
	easing?: string;
	// TODO: Do it have default value?
	delay: number;
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

// Used in Initialisation options
interface RactiveSanitizeOptions {
	elements: string[];
	// TODO: Undocumented what default value is, but probably false
	eventAttributes?: boolean;
}

interface RactiveNewOptions {
	// TODO: adaptors or adapt? Confused in documentation
	//adapt?: any[];

	complete?: Function;
	components?: { [key: string]: RactiveComponentPlugin; };
	computed?: Object;
	/**
	 * TODO: Question - When is data Array?
	 *
	 * @type Object or Array
	 */
	data?: any;

	// TODO: undocumented in Initialisation options page
	decorators?: { [key: string]: RactiveDecoratorPlugin; };
	
	/**
	 * @type [open, close]
	 */
	delimiters?: string[];
	/**
	 * @type HTMLElement or String or jQuery-like collection
	 */
	el?: any;
	// TODO: undocumented in Initialisation options page
	events?: { [key: string]: RactiveEventPlugin; };
	/**
	 * any is same type as template
	 */
	partials?: { [key: string]: any; };
	/**
	 * Default false
	 * @type Boolean or RactiveSanitizeOptions
	 */
	sanitize?: any;
	/**
	 * @type String or (if preparsing "Ractive.parse") Array or Object
	 */
	template?: any;
	transitions?: { [key: string]: RactiveTransitionPlugin; };
	/**
	 * @type [open, close]
	 */
	tripleDelimiters?: string[];

	// TODO: In dev documentation append have anchor??
	// Default false
	append?: boolean;
	// Default false
	debug?: boolean;
	// Default false
	lazy?: boolean;
	// Default false
	magic?: boolean;
	// Default true
	modifyArrays?: boolean;
	// Default false
	noIntro?: boolean;
	// Default false
	preserveWhitespace?: boolean;
	// Default true
	twoway?: boolean;

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

	parse(template: string, options?: { preserveWhitespace: boolean, sanitize: any }): any;

	// TODO: undocumented
	adaptors: { [key: string]: any; };

	// TODO: undocumented
	defaults: RactiveDefaultsOptions;

	// TODO: undocumented
	decorators: { [key: string]: RactiveDecoratorPlugin; };

	// TODO: undocumented
	events: { [key: string]: RactiveEventPlugin; };

	// TODO: missing static properties documentation
	partials: { [key: string]: any; };

	// Undocumented method
	Promise: RactivePromise;

	// TODO: missing static properties documentation
	transitions: { [key: string]: RactiveTransitionPlugin; };
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

	/**
	 * Update out of sync two-way bindings
	 * @param keypath A string
	 * @param cascade A boolean with default false
	 */
	updateModel(keypath?: string, cascade?: boolean): void;
	// TODO: In next release
	// updateModel(keypath?: string, cascade?: boolean): RactivePromise;

	// Properties

	nodes: Object;
	partials: Object;
	transitions: Object;
}

declare module "ractive" {
	export = Ractive;
}
declare var Ractive: RactiveStatic;
