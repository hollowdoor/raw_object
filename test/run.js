const rawObject = require('../');

let one = rawObject();
//Assign properties to the object
let two = rawObject({
    prop1: 'one'
});
//Extend the created object
let three = rawObject(one, two, {
    prop2: 'two'
});

console.log('two.prop1 ',two.prop1); //one
console.log('three.prop1 ',three.prop1); //one
console.log('three.prop2 ',three.prop2); //two

let temp = new Object();
temp.__proto__ = null;
console.log(temp.prototype)
