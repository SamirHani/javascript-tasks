let zero = 0;
let counter = 3;
let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];

let six = counter + counter
let one = my.splice(zero, my.indexOf("Gamal")).reverse();
my = one;

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.includes("Elham"), counter)); // ["Elham", "Mazero"]

console.log(`${my[my.indexOf("Elham")].slice(zero, my.indexOf("Mazero"))}${my[my.indexOf("Mazero")].slice(my.indexOf("Mazero"), six)}`); // "Elzero"

console.log(my[my.indexOf("Mazero")][my.length] + my[my.indexOf("Mazero")][counter + my.indexOf("Mazero")].toUpperCase()); // "rO"