/// <reference path="ractive.d.ts" />

function test_transition() {
	var plugin: RactiveTransitionPlugin = (t: RactiveTransition, params: Object) => {
		// Some stuffs...
	};

	Ractive.transitions['myTransition'] = plugin;
}

Ractive.defaults = {
	template: '',
	debug: true
}

var options: RactiveNewOptions = {
	template: '',
};

var r: Ractive = new Ractive(options);

r.add('keypath', 1);

var re: RactiveStatic = Ractive.extend(options);
var component: RactiveStatic = re.extend(options);
new component(options);