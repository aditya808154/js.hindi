const desc=Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Math.PI);
// console.log(desc);

const chai={
    name:"Aditya",
    age:25,
    marks:87.5+"%"
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false
// })


// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (const [key,value] of Object.entries(chai)) {
    console.log(key+":"+value);
    
}
