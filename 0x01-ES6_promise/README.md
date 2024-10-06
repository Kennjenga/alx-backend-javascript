# ES6 Promises

## Introduction

ES6 Promises are a way to handle asynchronous operations in JavaScript. They provide a cleaner, more intuitive way to work with asynchronous code compared to traditional callback functions.

## Creating a Promise

A Promise is created using the `Promise` constructor, which takes a function with two parameters: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  let success = true;

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
```

## Using Promises

Promises have two main methods: `then` and `catch`.

### `then` Method

The `then` method is used to handle the resolved value of a Promise.

```javascript
myPromise.then((message) => {
  console.log(message); // Output: Operation was successful!
});
```

### `catch` Method

The `catch` method is used to handle errors or rejected Promises.

```javascript
myPromise.catch((error) => {
  console.error(error); // Output: Operation failed.
});
```

## Chaining Promises

Promises can be chained to handle multiple asynchronous operations in sequence.

```javascript
const firstPromise = new Promise((resolve, reject) => {
  resolve("First operation successful!");
});

firstPromise
  .then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      resolve("Second operation successful!");
    });
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Promises (How, Why, and What)

Promises are objects representing the eventual completion or failure of an asynchronous operation. They are used to handle asynchronous tasks in a more manageable and readable way compared to callbacks.

### Why Use Promises?

Promises help avoid "callback hell" by providing a cleaner, more structured way to handle asynchronous operations. They make it easier to chain multiple asynchronous tasks and handle errors.

### What is a Promise?

A Promise is an object that represents a value that may not be available yet but will be resolved in the future. It can be in one of three states:

- **Pending**: The initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

## Using `then`, `resolve`, and `catch` Methods

### `then` Method

The `then` method is used to handle the resolved value of a Promise. It takes two arguments: a callback for the resolved case and an optional callback for the rejected case.

```javascript
myPromise.then(
  (message) => {
    console.log(message); // Output: Operation was successful!
  },
  (error) => {
    console.error(error); // Output: Operation failed.
  }
);
```

### `resolve` Method

The `resolve` method is used to resolve a Promise with a given value.

```javascript
const promise = Promise.resolve("Resolved value");
promise.then((value) => {
  console.log(value); // Output: Resolved value
});
```

### `catch` Method

The `catch` method is used to handle errors or rejected Promises.

```javascript
myPromise.catch((error) => {
  console.error(error); // Output: Operation failed.
});
```

## Using Every Method of the Promise Object

### `Promise.all`

The `Promise.all` method takes an array of Promises and returns a single Promise that resolves when all of the input Promises have resolved.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Output: [3, 42, "foo"]
});
```

### `Promise.race`

The `Promise.race` method returns a Promise that resolves or rejects as soon as one of the input Promises resolves or rejects.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // Output: two
});
```

### `Promise.allSettled`

The `Promise.allSettled` method returns a Promise that resolves after all of the given Promises have either resolved or rejected.

```javascript
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Error");

Promise.allSettled([promise1, promise2]).then((results) => {
  results.forEach((result) => console.log(result.status));
  // Output: "fulfilled"
  // Output: "rejected"
});
```

### `Promise.any`

The `Promise.any` method returns a Promise that resolves as soon as any of the input Promises resolves.

```javascript
const promise1 = Promise.reject("Error");
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Success"));

Promise.any([promise1, promise2]).then((value) => {
  console.log(value); // Output: Success
});
```

## Throw / Try

The `throw` statement is used to throw an exception, while the `try` block is used to wrap code that may throw an exception, and the `catch` block is used to handle the exception.

```javascript
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.error(error.message); // Output: Something went wrong
}
```

## The `await` Operator

The `await` operator is used to wait for a Promise to resolve. It can only be used inside an `async` function.

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}
```

## How to Use an `async` Function

An `async` function is a function that returns a Promise. It allows you to use the `await` operator to wait for Promises to resolve.

```javascript
async function example() {
  const value = await Promise.resolve("Hello, world!");
  console.log(value); // Output: Hello, world!
}

example();
```

## Conclusion

ES6 Promises provide a powerful way to handle asynchronous operations in JavaScript, making code more readable and maintainable. By using `then` and `catch` methods, you can easily manage the flow of asynchronous tasks.
