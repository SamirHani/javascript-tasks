'use strict'

// 1
let fileName = 'elzero.php';
console.log(fileName.split('.')[0]);
console.log(fileName.split('.')[1]);

console.log('##################');
// 2
function addEl(str) {
  if (str === '' || str.slice(0, 2) === 'El') {
    return str;
  } else {
    return `El${str}`;
  }
  // Your Code Here
}

console.log(addEl('')); // ""
console.log(addEl('Elzero')); // Elzero
console.log(addEl('zero')); // Elzero

console.log('##################');
// 3
let myString = 'Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*';

console.log(myString.split('@').slice(0, 2).join('@'));

console.log('##################');

// 4
function checkRange(n1, n2, n3, start, end) {
  if (
    n1 >= start &&
    n1 <= end &&
    n2 >= start &&
    n2 <= end &&
    n3 >= start &&
    n3 <= end
  ) {
    return 'Yes All Numbers In Range';
  } else {
    return 'Not All Numbers Is In Range';
  }
}

console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range

console.log('##################');

// 5
function replaceFirstWithLast(word) {
  let nEnd = word.slice(0, 1);
  let nStart = word.slice(-1);
  let body = word.slice(1, -1);
  return `${nStart}${body}${nEnd}`;
}

console.log(replaceFirstWithLast('olzerE')); // Elzero
console.log(replaceFirstWithLast('Hello')); // oellH

console.log('##################');

// let x = 121;
// let n = x.toString().split('');
// let arr = [];
// for (let i = 1; i < n.length + 1; i++) {
//   arr[i - 1] = n[n.length - i];
// }
// console.log(arr.join('') == x);

// Array.prototype.last = function () {
//   let set = new Set(this);
//   if (set.size == 0) {
//     return -1;
//   }
//   return this[this.length - 1];
// };

// let shit = [];
// console.log(shit.last());

var romanToInt = function (s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let ini = 0;
  let ar = s.split('');
  ar.forEach((el, i) => {
    if (map.get(el) < map.get(ar[i + 1])) {
      ini -= map.get(el);
    } else {
      ini += map.get(el);
    }
  });
  return ini;
};

console.log(romanToInt('MCMXCIV')); //1994

// ['IV', 4],
// ['IX', 9],
// ['XL', 40],
// ['XC', 90],
// ['CD', 400],
// ['CM', 900],


var expect = function (val) {
  // if (this.toBe(val))
  return 
};

console.log();
