let a = 1_00,
    b = 2_00.5,
    c = 1e2,
    d = 2.4;
Number

console.log(Math.trunc(Math.max(a,b,c,d)));
console.log(Math.pow(a,Math.trunc(d)));
console.log(Math.floor(d))
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(Math.round(d));
console.log(+d.toFixed());
b = 2_00.5,
d = 2.4;
console.log(+(Math.floor(b) / Math.ceil(d)).toFixed(2));
console.log(Math.ceil(Math.floor(b) / Math.ceil(d)));
console.log("hwllo wrold")

