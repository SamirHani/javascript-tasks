//

// let names = function (...name) {
//   return `string [${name.join("], [")}] => Done !`;
// };

let names = (...name) => `string [${name.join('], [')}] => Done !`;

console.log(names('osama', 'mohamed', 'ali', 'ibrahim'));
// string [osama], [mohamed], [ali], [ibrahim] => Done !

//task 2

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + myNumbers[+true] ;

console.log(calc(10, myNumbers[+false],myNumbers[+true])); //80


