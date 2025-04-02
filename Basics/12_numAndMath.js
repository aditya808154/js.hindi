//1.number
const score=400
// console.log(score);

const balance=new Number(400);
// console.log(balance);

//number->string
// console.log(balance.toString());
// console.log(typeof balance);

//given the lenfth of string.
// console.log(balance.toString().length);

//tofixed given digit after poin 
// console.log(balance.toFixed(3));

// toPrecision are use to given rounof value
// const num=123.6966
// console.log(num.toPrecision(3));

const num=100000000;
//3-3 ke grouping
// console.log(num.toLocaleString());
//3-2-2 de grouping
// console.log(num.toLocaleString('en-IN'));

//++++====Maths=====++++++
// console.log(Math);
//change the negative value to possitive value
// console.log(Math.abs(-4));
//round are use to roundof value provide
// console.log(Math.round(4.2));
//top value provied
// console.log(Math.ceil(5.2));
//bottom value provide
// console.log(Math.floor(5.6));

console.log(Math.random());
console.log((Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)


