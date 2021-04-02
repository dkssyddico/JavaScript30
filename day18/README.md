# Day 18 Challenge: Adding Up Times with Reduce

## 2021. Mar. 7th

### 💙 goals of this course

- Calculate total time of video

### 👩🏻‍💻 What I learnt

- parseInt: parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

- parseFloat: parses an argument (converting it to a string first if needed) and returns a floating point number.

- Array.prototype.reduce(): executes a reducer function (that you provide) on each element of the array, resulting in single output value.

- How to calculate times left in JS

```javascript
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, mins, secondsLeft);
```

### ⭐️ Reference

- [parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

- [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
