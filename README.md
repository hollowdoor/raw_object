raw-object
====

Install
-----

`npm install --save raw-object`

Usage
---

```javascript
const rawObject = require('raw-object');
//Create an object with no properties.
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

```

About
----

Use this to create an object with a null prototype.

A null prototype makes it easier to check with the `in` operator like `name in object`.
