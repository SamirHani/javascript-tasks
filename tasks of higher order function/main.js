// task 1
let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o'];

let word = mix
  .map(function (ele) {
    return isNaN(ele) ? ele : '';
  })
  .reduce(function (acc, ele) {
    return acc + ele;
  });
console.log(word);

console.log('#'.repeat(40));

let myString = 'EElllzzzzzzzeroo';

let newString = myString
  .split('')
  .filter(function (ele, index, arr) {
    return arr[index] !== arr[index + 1];
  })
  .join('');

console.log(newString);

console.log('#'.repeat(40));

let myArray = ['E', 'l', 'z', ['e', 'r'], 'o'];

let newArray = myArray
  .reduce((acc, current) => acc.concat(current), [])
  .join('');
// let newArray = [].concat(...myArray); //or this method

console.log(newArray);

console.log('#'.repeat(40));

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNumbers = numsAndStrings.filter((ele) => !isNaN(ele)).map((ele) => -ele)
console.log(newNumbers);

console.log('#'.repeat(40));

let nums = [2, 12, 11, 5, 10, 1, 99];

let newnums = nums.reduce((acc,current) => current % 2 === 0 ? acc * current : acc + current , 1);
console.log(newnums);