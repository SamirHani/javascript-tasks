// task 1
let num = 55;

if (num < 10) {
  console.log(`00${num}`);
} else if (10 <= num && num < 100) {
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(num);
} else {
  console.log('else');
}

// task 2

let numm1 = 9;
let str = '9';
let str2 = '20';

if (numm1 == str) {
  console.log('{num1} Is The Same Value As {str}');
}

if (numm1 == str && numm1 !== str) {
  console.log('{num1} Is The Same Value As {str} But Not The Same Type');
}

if (numm1 != str2 && numm1 !== str2) {
  console.log('{num1} Is Not The Same Value Or The Same Type As {str2}');
}

if (str != str2 && typeof str === typeof str2) {
  console.log('{str} Is The Same Type As {str2} But Not The Same Value');
}

// task 3

let numb1 = 10;
let numb2 = 30;
let numb3 = '30';

if (numb3 > numb1 && numb1 !== numb2) {
  console.log(
    '30 Is Larger Than 10 And Type string Not The Same Type As number'
  );
}

if (numb3 > numb1 && numb2 == numb3 && numb2 !== numb3) {
  console.log(
    '30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number'
  );
}

if (
  typeof numb3 !== typeof numb1 &&
  numb3 != numb1 &&
  typeof numb3 !== typeof numb2
) {
  console.log(
    '{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}'
  );
}

// task 4

// Edit What You Want Here

let num1 = 10;
let num2 = 5;
let num3 = 10;
let num4 = 36;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log('True');
} else {
  console.log('False');
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log('True');
} else {
  console.log('False');
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log('True');
} else {
  console.log('False');
}

// Condition 4

if (num1 + num2 < num4) {
  console.log('True');
} else {
  console.log('False');
}

// Condition 5

if (num1 + num3 < num4) {
  console.log('True');
} else {
  console.log('False');
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log('True');
} else {
  console.log('False');
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log('True');
} else {
  console.log('False');
}
