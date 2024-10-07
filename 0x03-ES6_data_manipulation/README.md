# ES6 Data Manipulation

## Array

Arrays in JavaScript are used to store multiple values in a single variable. They are a special type of objects with numbered indexes.

Example:

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
```

## Typed Array

Typed Arrays provide a mechanism for accessing raw binary data in JavaScript. They allow you to work with binary data directly.

Example:

```javascript
let buffer = new ArrayBuffer(16);
let view = new Uint8Array(buffer);
view[0] = 255;
console.log(view[0]); // Output: 255
```

## Set Data Structure

A Set is a collection of values where each value must be unique. Sets are useful for storing unique elements and checking for the presence of an item.

Example:

```javascript
let uniqueNumbers = new Set([1, 2, 3, 4, 4]);
console.log(uniqueNumbers.has(4)); // Output: true
console.log(uniqueNumbers.size); // Output: 4
```

## Map Data Structure

A Map is a collection of keyed data items, just like an Object. However, the keys can be of any type, and they maintain the order of insertion.

Example:

```javascript
let map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name")); // Output: John
```

## WeakMap

A WeakMap is similar to a Map but only allows objects as keys and does not prevent garbage collection of its keys. This makes WeakMaps useful for storing metadata associated with objects without preventing their garbage collection.

Example:

```javascript
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "some value");
console.log(weakMap.get(obj)); // Output: some value
```

## ArrayBuffer

An ArrayBuffer is a raw binary data buffer that can be used to represent large binary data. It is a fixed-size container that holds a raw binary data buffer.

Example:

```javascript
let buffer = new ArrayBuffer(16);
const dataView = new DataView(buffer);
dataView.setInt8(0, 255);
console.log(new Uint8Array(buffer)[0]); // Output: 255
```

This code creates an ArrayBuffer of size 16 bytes, creates a DataView object to manipulate the buffer, sets the first byte to 255, and then logs the value of the first byte to the console. The ArrayBuffer is a useful data structure for working with large binary data in JavaScript.
