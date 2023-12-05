// string challenge 
// all solutions should be in one chain 

let a = "Elzero Web School";

//just use ( slice , charAt ) 
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// print HHHHHHHH 
console.log(a.charAt(a.length - 4).toUpperCase().repeat(8));
// print elzero in an array
console.log(a.split(" ", 1));
//print elzero school
console.log(`${a.substr(0, 6) }${a.substr(a.length - 7)}`);
// Solution must Be Dynamic And String May Change the first and last char should be in lower case and the rest of the string should be in upper case
console.log(`${a.substring(0, 1).toLowerCase()}${ a.substring(1, a.length - 1).toUpperCase()}${a.substring(a.length - 1).toLowerCase()}`);


