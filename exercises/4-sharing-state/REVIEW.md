# event-loop 

## /4-sharing-state

> uncaught error: 4/29/2020, 5:49:34 PM 

[../REVIEW.md](../REVIEW.md)

* [/1-pure-functions.js](#1-pure-functionsjs) - uncaught error
* [/2-pure-closures.js](#2-pure-closuresjs) - uncaught error
* [/3-mutating-closures.js](#3-mutating-closuresjs) - uncaught error
* [/exercise-1.js](#exercise-1js) - pass
* [/exercise-2.js](#exercise-2js) - pass
* [/exercise-3.js](#exercise-3js) - pass

---

## /1-pure-functions.js

* uncaught error
* [review source](./1-pure-functions.js)

```txt
ReferenceError: _ is not defined
    at Object.<anonymous> ( [ ... ] /exercises/4-sharing-state/1-pure-functions.js:15:37)
    at Module._compile (internal/modules/cjs/loader.js:1151:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1171:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Module.require (internal/modules/cjs/loader.js:1040:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at evaluate ( [ ... ] /review.js:229:7)
    at Object.<anonymous> ( [ ... ] /review.js:244:1)
    at Module._compile (internal/modules/cjs/loader.js:1151:30)
```

```js
// closeIt creates pure closures
// because the returned functions never modify the closed variable
// calling the closed functions with the same args always returns the same result


const concatPigs = (str) => {
  return str + " pigs";
}
const concatParam = (str, param) => {
  return str + param;
}

const str1 = '-';

console.assert(concatPigs(str1) === _, 'assert 1');
console.assert(concatPigs(str1) === _, 'assert 2');
console.assert(concatParam(str1, " rock!") === _, 'assert 3');
console.assert(concatParam(str1, " rock!") === _, 'assert 4');


const str2 = "hoy";

console.assert(concatPigs(str2) === _, 'assert 5');
console.assert(concatPigs(str2) === _, 'assert 6');
console.assert(concatParam(str2, " cheese!") === _, 'assert 7');
console.assert(concatParam(str2, " cheese!") === _, 'assert 8');



```

[TOP](#event-loop)

---

## /2-pure-closures.js

* uncaught error
* [review source](./2-pure-closures.js)

```txt
ReferenceError: _ is not defined
    at Object.<anonymous> ( [ ... ] /exercises/4-sharing-state/2-pure-closures.js:19:1)
    at Module._compile (internal/modules/cjs/loader.js:1151:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1171:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Module.require (internal/modules/cjs/loader.js:1040:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at evaluate ( [ ... ] /review.js:229:7)
    at Object.<anonymous> ( [ ... ] /review.js:244:1)
    at Module._compile (internal/modules/cjs/loader.js:1151:30)
```

```js
// closeIt creates pure closures
// because the returned functions never modify the closed variable
// calling the closed functions with the same args always returns the same result

const closeNonMutatingFunctions = (str) => {
  return [
    function () {
      return str + " pigs";
    },
    function (param) {
      return str + param;
    }
  ]
}

let closedFunctions1 = closeNonMutatingFunctions("-");
const concatPigs1 = closedFunctions1[0];
const concatParam1 = closedFunctions1[1];
closedFunctions1 = _;

console.assert(concatPigs1() === _, 'assert 1');
console.assert(concatPigs1() === _, 'assert 2');
console.assert(concatParam1(" rock!") === _, 'assert 3');
console.assert(concatParam1(" rock!") === _, 'assert 4');


let closedFunctions2 = closeNonMutatingFunctions("hoy");
const concatPigs2 = closedFunctions2[0];
const concatParam2 = closedFunctions2[1];
closedFunctions2 = _;

console.assert(concatPigs2() === _, 'assert 5');
console.assert(concatPigs2() === _, 'assert 6');
console.assert(concatParam2(" cheese!") === _, 'assert 7');
console.assert(concatParam2(" cheese!") === _, 'assert 8');

```

[TOP](#event-loop)

---

## /3-mutating-closures.js

* uncaught error
* [review source](./3-mutating-closures.js)

```txt
ReferenceError: _ is not defined
    at Object.<anonymous> ( [ ... ] /exercises/4-sharing-state/3-mutating-closures.js:19:1)
    at Module._compile (internal/modules/cjs/loader.js:1151:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1171:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Module.require (internal/modules/cjs/loader.js:1040:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at evaluate ( [ ... ] /review.js:229:7)
    at Object.<anonymous> ( [ ... ] /review.js:244:1)
    at Module._compile (internal/modules/cjs/loader.js:1151:30)
```

```js
// closeIt creates impure closures
// because the returned functions DO modify the closed variable
// calling the closed functions with the same args will not always return the same result

function closeMutatingFunctions(str) {
  return [
    function () {
      return str += " pigs";
    },
    function (param) {
      return str += param;
    }
  ]
}

let closedFunctions1 = closeMutatingFunctions("-");
const concatPigs1 = closedFunctions1[0];
const concatParam1 = closedFunctions1[1];
closedFunctions1 = _;

console.assert(concatPigs1() === _, 'assert 1');
console.assert(concatPigs1() === _, 'assert 2');
console.assert(concatParam1(" rock!") === _, 'assert 3');
console.assert(concatParam1(" rock!") === _, 'assert 4');


let closedFunctions2 = closeMutatingFunctions("hoy");
const concatPigs2 = closedFunctions2[0]
const concatParam2 = closedFunctions2[1];
closedFunctions2 = _;

console.assert(concatPigs2() === _, 'assert 5');
console.assert(concatPigs2() === _, 'assert 6');
console.assert(concatParam2(" cheese!") === _, 'assert 7');
console.assert(concatParam2(" cheese!") === _, 'assert 8');

```

[TOP](#event-loop)

---

## /exercise-1.js

* pass
* [review source](./exercise-1.js)

```txt
+ PASS : assert str4
```

```js
const str0 = "";

function concatPigs(str) {
  return str + " pigs";
}
function concatParam(str, param) {
  return str + " " + param;
}

const str1 = concatPigs(str0);

const str2 = concatParam(str1, " rock!");

const str3 = concatPigs(str2);

const str4 = concatParam(str2, str3);

console.assert(str4 === " pigs  rock!  pigs  rock! pigs", 'assert str4');

```

[TOP](#event-loop)

---

## /exercise-2.js

* pass
* [review source](./exercise-2.js)

```txt
+ PASS : assert str4
```

```js
const closeIt = (str) => {
  return [
    function () {
      return str + " pigs";
    },
    function (param) {
      return str + param;
    }
  ]
}

let closedFunctions = closeIt("-");
const concatPigs = closedFunctions[0], concatParam = closedFunctions[1];
closedFunctions = undefined;

const str1 = concatPigs();

const str2 = concatParam(" rock!");

const str3 = concatPigs();

const str4 = concatParam(str3);

console.assert(str4 === "-- pigs", 'assert str4');

```

[TOP](#event-loop)

---

## /exercise-3.js

* pass
* [review source](./exercise-3.js)

```txt
+ PASS : assert str4
```

```js
const closeIt = (str) => {
  return [
    function () {
      return str += " pigs";
    },
    function (param) {
      return str += param;
    }
  ]
}

let closedFunctions = closeIt("-");
const concatPigs = closedFunctions[0], concatParam = closedFunctions[1];
closedFunctions = undefined;

const str1 = concatPigs();

const str2 = concatParam(" rock!");

const str3 = concatPigs();

const str4 = concatParam(str3);

console.assert(str4 === "- pigs rock! pigs- pigs rock! pigs", 'assert str4');

```

[TOP](#event-loop)

