# Day 17 Challenge: Sort Without Articles

## 2021. Mar. 6th

### 💙 goals of this course

- Sorting Array by alphabet order without Articles

### ✅ What I succeeded

- same with final one but using different method

### 👩🏻‍💻 What I learnt

- Regular expressions

- Conditional (ternary) operator

- String.prototype.trim() : removes whitespace from both ends of a string

- String.prototype.replace() : returns a new string with some or all matches of a **pattern** replaced by a replacement. pattern can be string or RegExp.

String.prototype.split() : divides a **String** into an ordered list of substrings, puts these substrings into an **array**, and returns the **array**.

**Array Method**: sort, map, join

1. Array.prototype.sort(): sorts the elements of an array in place and returns the sorted array.

```javascript
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

2. Array.prototype.map(): The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

3. Array.prototype.join([seperator]): creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

### ⭐️ Reference

- [stack overflow](https://stackoverflow.com/questions/34347008/how-can-i-sort-a-javascript-array-while-ignoring-articles-a-an-the)
