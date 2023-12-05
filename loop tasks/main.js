let startOne = 10;
let endOne = 100;
let exclude = 40;

for (let i = startOne; i <= endOne; i += startOne) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// ________________________________________________________________

// task 2

let startTwo = 10;
let endTwo = 0;
let stop = 3;

for (; startTwo > endTwo; startTwo--) {
  console.log(startTwo);
  if (startTwo === stop) break;
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// ________________________________________________________________

// task 3

let startthree = 1;
let end = 6;
let breaker = 2;

for (; startthree <= end; startthree++) {
  console.log(startthree);
  for (i = breaker; i < end; i += breaker) {
    console.log(`-- ${i}`);
  }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// ________________________________________________________________

// task 4

let index = 10;
let jump = 2;

for (;;) {
  if (index === jump) {
    break;
  }
  console.log(index);
  index -= jump;
}

// Output
// 10
// 8
// 6
// 4

// ___________________________________________________________________

// task 5

let friends = [
  'Ahmed',
  'Sayed',
  'Omnia',
  'Anass',
  'Asmaa',
  'Eman',
  'Mahmoud',
  'Ameer',
  'Osama',
  'Sameh',
];
let letter = 'a';

let newFriends = friends.filter(
  (shit) => shit.startsWith(letter.toUpperCase()) !== true
);
for (let i = letter.length - letter.length; i < newFriends.length; i++) {
  console.log(`${i + letter.length} => ${newFriends[i]}`);
}

let number = letter.length;
for (let i = 0; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`${number} => ${friends[i]}`);
  number++;
}

// ___________________________________________________________________
// task 6

let startsix = 0;
let swappedName = 'elZerO';
let result = '';

for (; startsix < swappedName.length; startsix++) {
  if (swappedName[startsix] === swappedName[startsix].toUpperCase()) {
    result += swappedName[startsix].toLowerCase();
  } else {
    result += swappedName[startsix].toUpperCase();
  }
}
console.log(result);
// Output
// "ELzERo"

// ___________________________________________________________________
//task 7

let start = 0;
let mix = [1, 2, 3, 'A', 'B', 'C', 4];

for (; start < mix.length; start++) {
  if (typeof mix[start] === 'number' && mix[start] > start.toString.length) {
    console.log(mix[start]);
  }
}


// Output
// 2
// 3
// 4
