/// <reference path="ractive.d.ts" />
Ractive.defaults = {
    template: '',
    debug: true
};

var options = {
    template: ''
};

var r = new Ractive(options);

r.add('keypath', 1);

var re = Ractive.extend(options);
var component = re.extend(options);
new component(options);
//# sourceMappingURL=ractive-tests.js.map
