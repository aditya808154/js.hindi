// Type of DataType:-There are two type of DataType.
//# Primitive DataType:-7 Types
//String, Number,Boolean,null,undefined,symbol,BigInt

//JavaScript dynamically typed language hai, iska matlab hai ki variables ka type runtime par decide hota hai, na ki compile time par.
//JavaScript dynamically typed language hai, iska matlab hai ki variables ka type runtime par decide hota hai, na ki compile time par.
//Compile Time ka matlab hai jab code compile ho raha hota hai, par execute nahi ho raha hota.

// const score=100
// const scoreValue=100.3

// const isLoggedIn=false
// const outsideTemp=null
// let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id===anotherId);

const bigNumber=655858565236565n;

//Reference(Non-Primitive):-Array,Objects,Function

const heros=["Ram","Aditya","Vijay"];//array
//objects
let myObj={
    name:"Aditay",
    age:22
}

//function
let hello=function(){
    console.log("hello world!");
    
}

// all Non-Primitive datyType return type is objects

console.log(typeof heros);
console.log(typeof id);


