// let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Othman'];
// let myEmployees = [
//   'Amgad',
//   'Samah',
//   'Ameer',
//   'Omar',
//   'Othman',
//   'Amany',
//   'Samia',
// ];

// // print number of admins until the stop
// let stop = myAdmins.indexOf('Stop');
// document.write(
//   `<div style="font-size:30px; font-weight: bold; margin-bottom: 50px;"> WE Have ${stop} Admins</div>`
// );

// document.write(`<hr>`);

// //to print the cards
// for (let i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] === 'Stop') break;

//   // print the admins name
//   document.write(
//     `<div style="font-size:30px">The Admin for team ${i + 1} is ${
//       myAdmins[i]
//     }</div>`
//   );

//   document.write(`<h3 style="font-weight: bold;">Team Members:</h3>`);

//   let count = 0;
//   // print the employes names for each admin
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[i][0] === myEmployees[j][0]) {
//       count++;
//       document.write(`<p>- ${count} ${myEmployees[j]}</p>`);
//     }
//   }

//   document.write(`<hr style="margin-bottom: 20px;">`);
// }



// we have two ways to make length of the array of admin end in stop

// myAdmins.length = myAdmins.indexOf("Stop");

// document.write(
//   `<div style="font-size:30px; font-weight: bold; margin-bottom: 50px;"> WE Have ${myAdmins.indexOf("Stop")} Admins</div>`
// );




let friends = ['Ahmed', 'Sayed', 'Ali', 1, 2, 'Mahmoud', 'Amany', "Othman","wiliam", "antonio"];
let index = 0;
let counter = 0;
let zero = counter;

while (index < friends.length) {
  // skip the numbers and letter a words
  if (typeof friends[index] === 'number') {
    index++;
    continue;
  } else if (friends[index][zero] === "a" || friends[index][zero] === "A") {
    index++ // you have to increment the index before the continue or it will couse a infinte loop 
    continue;
  };
  counter++;
  console.log(`"${counter} => ${friends[index]}`);
  index++;
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"
