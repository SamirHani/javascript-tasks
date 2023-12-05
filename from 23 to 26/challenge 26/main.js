let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// find smallet number in all variables and return integer
console.log(Math.trunc(Math.min(a, b, c, d)));
// use avriable a + d One time to get the needed output
console.log(Math.pow(a, Math.trunc(d))); // 10000

// get integer "2" from d variable with 4 methods
console.log(Math.trunc(d));
console.log(+d.toFixed(0));
console.log(parseInt(d));
console.log(Math.floor(d));

// use vaiables b + d to get this values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(3)); // 66.667 => string 
console.log(Math.ceil(+(Math.floor(b) / Math.ceil(d)).toFixed(3))); // 67 => number 
