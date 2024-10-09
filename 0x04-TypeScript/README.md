# Summary

`cp .eslintrc.js package.json tsconfig.json webpack.config.js ./task_0    `

## Basic Types in TypeScript

Learn about the fundamental types in TypeScript, including `string`, `number`, `boolean`, `array`, `tuple`, `enum`, `any`, `void`, `null`, and `undefined`. For example:

```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
```

## Interfaces, Classes, and Functions

Understand how to define and use interfaces, create and extend classes, and declare functions with type annotations in TypeScript. For example:

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

class Student implements Person {
  constructor(public firstName: string, public lastName: string) {}
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
```

## Working with the DOM and TypeScript

Explore how to interact with the Document Object Model (DOM) using TypeScript, including type-safe manipulation of HTML elements. For example:

```typescript
let button = document.createElement("button");
button.textContent = "Click me";
button.onclick = () => {
  alert("Button clicked!");
};
document.body.appendChild(button);
```

## Generic Types

Discover the power of generics in TypeScript to create reusable and flexible components and functions. For example:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
```

## Using Namespaces

Learn how to organize your code using namespaces to avoid naming collisions and improve code maintainability. For example:

```typescript
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return /^[A-Za-z]+$/.test(s);
    }
  }
}
```

## Merging Declarations

Understand how to merge multiple declarations for the same entity to extend its shape and functionality. For example:

```typescript
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };
```

## Ambient Namespaces and External Libraries

Find out how to use ambient namespaces to import and use external libraries in your TypeScript projects. For example:

```typescript
declare namespace D3 {
  export interface Selectors {
    select: (selector: string) => Selection;
  }
}

let selectors: D3.Selectors;
selectors.select("body");
```

## Basic Nominal Typing with TypeScript

Get introduced to nominal typing in TypeScript to enforce stricter type checks and improve code reliability. For example:

```typescript
type Brand<K, T> = K & { __brand: T };

type USD = Brand<number, "USD">;
type EUR = Brand<number, "EUR">;

let usdAmount: USD = 10 as USD;
let eurAmount: EUR = 10 as EUR;
```
