// Task 1

// Create Your Object Here
// let member = {
//   name: 'Elzero',
//   age: 38,
//   country: 'Egypt',
//   fullDetails: function () {
//     return `My Name Is ${this.name}, My age is ${this.age}, I live in ${this.country}`;
//   },
// };
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// Task 2

// Method One
// Create Your Object Here
// let objMethodOne = new Object({
//   property: 'Method One',
// });

// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here
// let objMethodTwo = Object.create({
//   property: 'method two',
// });

// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
// let objMethodThree = {
//   property: "method three"
// }

// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here
// let objMethodFour = Object.assign({}, {property: "method four"})

// console.log(objMethodFour.property); // "Method Four"

// task 3

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// // Create Your Object Here in One Line
// let finalObject = Object.assign({a},threeNums,twoNums);
// console.log(finalObject);

/*
    a: 1
    b: 2
    c: 3
    d: 4
    e: 5
    f: 6
    */

// task 4

// The Object To Work With
let myFavGames = {
  'Trinity Universe': {
    publisher: 'NIS America',
    price: 40,
  },
  'Titan Quest': {
    publisher: 'THQ',
    bestThree: {
      one: 'Immortal Throne',
      two: 'Ragnarök',
      three: 'Atlantis',
    },
    price: 50,
  },
  YS: {
    publisher: 'Falcom',
    bestThree: {
      one: 'Oath in Felghana',
      two: 'Ark Of Napishtim',
      three: 'origin',
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?

let objectLength = Object.keys(myFavGames).length;
for (let i = 0; i < objectLength; i++) {
console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
console.log(`The Publisher Is${Object.values(myFavGames)[i].publisher}`);
console.log(`The Price Is ${Object.values(myFavGames)[i].price}`);
  // Check If Nested Object Has Property (bestThree)
  if (Object.values(myFavGames)[i].hasOwnProperty('bestThree')) {
    console.log('- Game Has Releases');
    console.log(`First => ???????`);
    console.log(`Second => ???????`);
    console.log(`Third => ???????`);
  }
  console.log('#'.repeat(20));
}

// let objectLength = Object.keys(myFavGames).length;
// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//   console.log(`The Publisher Is ${Object.values(myFavGames)[i]['publisher']}`);
//   console.log(`The Price Is ${Object.values(myFavGames)[i]['price']}`);

//     // Check If Nested Object Has Property (bestThree)
//   if (Object.values(myFavGames)[i].hasOwnProperty('bestThree') === true) {
//     console.log('- Game Has Releases');
//     console.log(`First => ${Object.values(myFavGames)[i]['bestThree'].one}`);
//     console.log(`Second => ${Object.values(myFavGames)[i]['bestThree'].two}`);
//     console.log(`Third => ${Object.values(myFavGames)[i]['bestThree'].three}`);
//   }
//   console.log('#'.repeat(20));
// }

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"
