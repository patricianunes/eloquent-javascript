console.log("keep doing and get there");

/* 
Exercises
Minimum
The previous chapter introduced the standard function Math.min 
that returns its smallest argument. We can build something like 
that now. Write a function min that takes two arguments and returns 
their minimum.
*/

// Your code here.

const min = (a, b) => {
  const answer = Math.min(a, b);
  return answer;
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/* 
Recursion
We’ve seen that % (the remainder operator) can be used to test whether 
a number is even or odd by using % 2 to see whether it’s divisible by two. 
Here’s another way to define whether a positive whole number is even or odd:

Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

// Your code here.

const isEven = n => {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    let num = n + 2;
    return isEven(num);
  } else {
    let num = n - 2;
    return isEven(num);
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
console.log(isEven(-4));

/* 
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. 
The returned value will be a string containing only one character (for example, "b"). 
The first character has position 0, which causes the last one to be found at position string.
length - 1. 
In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a 
number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

 */
const countBs1 = str => str.split("").filter(x => x === "B").length;

const countChar = (str, char) => {
  return str.split("").filter(x => x === char).length;
};

const countBs2 = str =>
  str.split("").reduce((prev, curr) => {
    if (curr === "B") {
      return prev + 1;
    }
    return prev;
  }, 0);

console.log(countBs1("BBCB"));
console.log(countBs2("BBCB"));
// → 3
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countChar("kakkerlak", "a"));

/* Write a range function that takes two arguments, 
start and end, 
and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.

As a bonus assignment, 
modify your range function to take an optional third argument that indicates the “step” value 
used when building the array. 

If no step is given, the elements go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 

Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

const range = (start, end, step = 1) => {
  const newArray = [];

  if (start < end) {
    for (let i = start; i <= end; i += step) {
      newArray.push(i);
    }
  } else {
    let i = start;
    for (; i >= end; i = i + step) {
      newArray.push(i);
    }
  }
  return newArray;
};

const sum = array => {
  let count = 0;
  for (let num of array) {
    count = count + num;
  }
  return count;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
