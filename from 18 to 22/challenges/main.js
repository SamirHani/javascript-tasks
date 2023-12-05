let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
[++a] [+] [+b++] [+] [+c++] [-] [+a++] = 100

[++a]
- Value: 11
- Explain: it contain a pre increment
[+]
- Explain: add operator
[+b++]
- Value: 20
- Explain: first plus is Unary plus and the sec&3rd is post increment, it will be 21 in the next operation
[+]
- Value: add operator
[+c++]
- Value: 80
- Explain: first plus is Unary plus and the sec&3rd is post increment, it will be 81 in the next operation
[-]
- Value: minus
[+a++]
- Value: 11
- Explain: first plus is Unary plus and the sec&3rd is post increment, it will be 12 in the next operation
*/

console.log(++a + -b + +c++ - -a++ + +a);

/*
a = 12
b = 21
c = 81

[++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a] = 100

[++a]
- Value: 13
- Explainz: it contain a pre increment
[+]
- Explain: add operator
[-b]
- Value: -21
- Explain: first plus is Unary negation
[+]
- Value: add operator
[+c++]
- Value: 81
- Explain: first plus is Unary plus and the sec&3rd is post increment, it will be 82 in the next operation
[-]
- Value: minus
[-a++]
- Value: 13 regard less the previous minus
- Explain: first plus is Unary negation and the sec&3rd is post increment, it will be 14 in the next operation
[+] 
  - Explain: add
  [+a] 
  - Value: 14
  - Explain: first plus is Unary plus
  */

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
a = 14
b = 21
c = 82

[--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true] = 100

[--c]
- Value: 81
- Explain: it contain a pre decrement
[+]
- Explain: add operator
[+b]
- Value: 21
- Explain: first plus is Unary negation
[+]
- Value: add operator
[--a]
- Value: 13
- Explain:it contain a pre decrement
[*]
- Value: multiplication
[+b++]
- Value: 21 
- Explain: first plus is Unary plus and the sec&3rd is post increment, it will be 22 in the next operation
[-] 
  - Explain: minus
[+b] 
  - Value: 22
  - Explain: Unary plus
[*] 
  - Explain: Multiplication
[a] 
  - Value: 13
  - Explain: nothing
[+] 
  - Explain: add opreator
[--a] 
  - Value: 12
  - Explain: it contins a pre decrement
[-] 
  - Explain: minus
[+true] 
  - Value: 1
  - Explain: first plus is Unary plus
  */

// challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// only use variables value
// do not use variabale twice

console.log((-d * e++) / g++); //2000
console.log(e * g + ++f + -d); //173

