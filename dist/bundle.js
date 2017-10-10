'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var objectAssign = _interopDefault(require('object-assign'));

//Supposedly faster for v8 than just Object.create(null)
function Raw(){}
Raw.prototype = (function (){
    //Maybe some old browser has risen from it's grave
    if(typeof Object.create !== 'function'){
        var temp = new Object();
        temp.__proto__ = null;
        return temp;
    }

    return Object.create(null);
})();

function rawObject(){
    var objects = [], len = arguments.length;
    while ( len-- ) objects[ len ] = arguments[ len ];

    var raw = new Raw();
    objectAssign.apply(void 0, [ raw ].concat( objects ));
    return raw;
}

module.exports = rawObject;
//# sourceMappingURL=bundle.js.map
