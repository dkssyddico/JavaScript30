# Day 14 Challenge: Object and Arrays - Reference VS Copy

## 2021. Mar. 3rd

### 💙 goals of this course

- Understand Reference VS Copy for Object and Arrays

### 👩🏻‍💻 What I learnt

1. How to make a copy of Array without touching or changing original array.

- There are 4 methods to copy array but not change original array in the lecuture.

```javascript
const original = ['john', 'sarah', 'min', 'dico'];
// same reference
const teamA = original;
// copy array method - 1
const teamB = orignal.slice();
teamB[3] = 'ho';
console.log(teamB); // ['john', 'sarah', 'min', 'ho'];

// copy array method - 2
const teamC = [].concat(original);
teamC[3] = 'hi';
console.log(teamC); // ['john', 'sarah', 'min', 'hi'];

// copy array method - 3
const teamD = [...original];
teamD[3] = 'bye';
console.log(teamD); // ['john', 'sarah', 'min', 'bye'];

//copy array method - 4
const teamE = Array.from(original);
teamE[3] = 'hello';
console.log(teamE); // ['john', 'sarah', 'min', 'hello'];
```

- Array.prototype.concat() returns a new array. It does not change the existing arrays.
- Spread syntax
- Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

2. How to make copy of Object.

- There are 2 methods to copy object without change target object.

```javascript
const OriginalPerson = {
  name: 'dico',
  age: 2,
};

const dico = OriginalPerson;
dico.job = 'developer';
// This will change both object as adding new key and value.
console.log(OriginalPerson, dico);
// {age: 2, job: "developer", name: "dico"}, {age: 2, job: "developer", name: "dico"}

// Copy Object Method - 1
const newPerson = Object.assign({}, OriginalPerson);
newPerson.name = 'min';
console.log(OriginalPerson, newPerson);
// {name: "dico", age: 2} {name: "min", age: 2}

// Copy Object Method - 2 'deep clone'
// but lecturer doesn't recommend this method.
const dkssyddico = {
  name: 'dkssyddico',
  age: 99,
  social: {
    twitter: '@dkssyddico',
    facebook: 'dkssyddico.dev',
  },
};

const dkssyddico2 = JSON.parse(JSON.stringify(dkssyddico));
dkssyddico2.social.twitter = '@dico2';
console.log(dkssyddico2.social, dkssyddico.social);
// {twitter: "@dico2", facebook: "dkssyddico.dev"} {twitter: "@dkssyddico", facebook: "dkssyddico.dev"}
```

- The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

- The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

### ⭐️ Reference

- [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [JSON.parse()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [JSON.stringify](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
