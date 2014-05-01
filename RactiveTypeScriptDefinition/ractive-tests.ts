/// <reference path="ractive.d.ts" />

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