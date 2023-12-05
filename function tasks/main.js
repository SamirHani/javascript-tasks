document.write(`<h1 style="font-weight: bold;"> task 1</h1>`);

function sayHello(theName, theGender) {
  let gender;
  if (theGender === 'Male') {
    gender = 'Mr';
    document.write(`<div>Hello ${gender} ${theName}</div>`);
  } else if (theGender === 'Female') {
    gender = 'Mrs';
    document.write(`<div>Hello ${gender} ${theName}</div>`);
  } else if (theGender == undefined) {
    document.write(`<div>Hello ${theName}</div>`);
  }
}

// Needed Output
sayHello('Osama', 'Male'); // "Hello Mr Osama"
sayHello('Eman', 'Female'); // "Hello Miss Eman"
sayHello('Sameh'); // "Hello Sameh"

document.write(`<h1 style="font-weight: bold;"> task 2</h1>`);

function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (secondNum === undefined) {
    document.write(`<div>Second Number Not Found</div>`);
  }
  if (
    operation === 'add' ||
    (secondNum !== undefined && operation === undefined)
  ) {
    document.write(`<div>${firstNum + secondNum} add </div>`);
  }
  //  else if (operation === undefined && sec) {
  //   document.write(`<div>${firstNum + secondNum} undefined</div>`); }
  else if (operation === 'subtract') {
    document.write(`<div>${firstNum - secondNum} subtract</div>`);
  } else if (operation === 'multiply') {
    document.write(`<div>${firstNum * secondNum} multiply</div>`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

document.write(`<h1 style="font-weight: bold;"> task 3 in console</h1>`);

function ageInTime(theAge) {
  // Your Code Here
  if (theAge <= 10 || theAge > 100) {
    console.log(`Age Out Of Range`);
    return console.log('thanks for using the app');
  }
  // theAge < 10 || theAge > 100 ? return console.log(`Age Out Of Range`): null;
  console.log(` ${theAge} Years`);
  console.log(` ${theAge * 12} Months`);
  console.log(` ${theAge * 365.25} Days`);
  console.log(` ${theAge * 365.25 * 24} Hours`);
  console.log(` ${theAge * 365.25 * 24 * 60} Minuts`);
  console.log(` ${theAge * 365.25 * 24 * 60 * 60} Seconds`);
}

// Needed Output
ageInTime(10); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

document.write(`<h1 style="font-weight: bold;"> task 4</h1>`);

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value"${i}>${i}</option>"`);
  }
  document.write(`</select>`);
}

createSelectBox(2000, 2021);

document.write(`<h1 style="font-weight: bold;"> task 5</h1>`);

function multiply(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'string') {
      continue;
    }
    result *= Math.floor(numbers[i]);
  }
  return document.write(`<div>${result}</div>`);
}
multiply(10, 20); // 200
multiply('A', 10, 30); // 300
multiply(100.5, 10, 'B'); // 1000
