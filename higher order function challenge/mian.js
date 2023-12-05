let myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z';
// let solution = myString
//   .split('_')
//   .map(function (ele,ind,arr) {
//     return ele.split('');
//   })
//   .map(function (ele,ind,arr) {
//     return ele.filter(function (ele) {
//       return isNaN(ele);
//     });
//   })
//   .map(function (ele, ind, arr) {
//     return ele
//     .filter(function (ele, ind, arr) {
//       return ele !== ',' ? arr.shift() : null;
//     })
//     .reduce(function (acc, ele) {
//         return `${acc}${ele}`;
//       });
//   })
//   .join(' ');

let solution = myString
  .split('')
  .map(function (ele) {
    return ele === ',' ? '' : ele;
  })
  .filter(function (ele) {
    return isNaN(ele);
  })
  .slice(true, -isNaN(myString))
  .reduce(function (acc, current) {
    return acc + current;
  })
  .split('_')
  .join(' ');

console.log(solution);

// Elzero Web School

/**
 * you can use
 * ,
 * _
 * space
 * true => 1 => one time only in the code
 */

/**
 * you cannot use
 * numbers
 * letters
 *
 * you must use [filter, map, reduce, your knowldge]
 * order is not important
 * one chain
 */
