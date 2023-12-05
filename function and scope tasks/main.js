// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     let nameSplit = zName.split(" ");
//     return `${nameSplit[0]} ${nameSplit[1][0].toUpperCase()}.`;
//   }
//   function ageWithMessage(zAge) {
//     return `Your Age Is ${parseInt(zAge)}`;
//   }
//   function countryTwoLetters(zCountry) {
//     return `${zCountry.slice(0,2).toUpperCase()}`
//   }
//   function fullDetails() {
//       return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
//   }
// return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

// function itsMe() {
//   return `Iam A Normal Function`;
// }

// console.log(itsMe()); // Iam A Normal Function

// let arrow = _ => `Iam A Arrow Funciton`;
// console.log(arrow()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// console.log(urlCreate('https', 'elzero', 'org')); // https://www.elzero.org

// let url = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// currying function

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// // currying function
// let checker = zName => statuso => salary => statuso === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")(6500)); // Iam Not Avaialble

// arrow function

// let ignoreNumbers = 'Samir50Hani555Samir';

let ign = ignoreNumbers
  .split('')
  .map((ele) => (isNaN(ele) ? ele : ''))
  .join('');
console.lo  
        