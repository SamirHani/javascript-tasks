let specialNames = 'Os10O OsO Os100O Osa100O Os1000 Os100m';
let specialRe = /Os\d*O/gim;
console.log(specialNames.match(specialRe));

let ip = '2001:db8:3333:4444:5555:6666:7777:8888';
console.log(ip.match(/\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi));

let phone = '+(995)-123 (4567)';
console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi));

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// http should be exist
// s exist 0 or 1 onl
// \/\/ escape sequnace for the 2 slash to escip them
// (?:[-\w]+\.)? this part might exist or not
// ([-\w]+)
// (?:\.\w+)?
// \. and \w+
// \/? and .*

let date1 = '25/10/1982';
let date2 = '25 - 10 - 1982';
let date3 = '25 10 1982';
let date4 = '25 10 82';

let datare = /\d{1,2}(\/|\s(-\s)?)\d{1,2}(\/|\s(-\s)?)\d{1,}/g; // Write Pattern Here
console.log(date1.match(datare)); // "25/10/1982"
console.log(date2.match(datare)); // "25 - 10 - 1982"
console.log(date3.match(datare)); // "25 10 1982"
console.log(date4.match(datare)); // "25 10 82"
