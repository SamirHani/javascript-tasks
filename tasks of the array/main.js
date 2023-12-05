let myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.includes('hello'), num)); // ["Ahmed", "Elham", "Osama"];

// Method 2

console.log(myFriends.splice(myFriends.includes('hello'), num)); // ["Ahmed", "Elham", "Osama"];

// task 2

let friends = ['Ahmed', 'Eman', 'Osama', 'Gamal'];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

// task 3

let arrOne = ['C', 'D', 'X'];
let arrTwo = ['A', 'B', 'Z'];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// task 4

let website = 'Go';
let words = [`${website}ogle`, 'Facebook', ['Elzero', 'Web', 'School']];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// task 5

let needle = 'JS';
let haystack = ['PHP', 'JS', 'Python'];

if (haystack.includes(needle)) {
  console.log('Found');
} else {
  console.log('Not Found');
}

haystack.includes(needle) ? console.log('Found') : console.log('Not Found');

switch (haystack.includes(needle)) {
  case true:
    console.log('Found');
    break;
  default:
    console.log('not found');
}

// task 6

let arr1 = ['A', 'C', 'X'];
let arr2 = ['D', 'E', 'F', 'Y'];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().slice(-arr1.length).join('').toLowerCase();
console.log(allArrs); // fxy
