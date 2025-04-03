//singleton

//object literals
let mySym=Symbol("Hello")
const jsUser={
    name:"Aditya",
    age:21,
    location:"Delhi",
    email:"aditya@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","Saturday"],
    [mySym]:"Hello"
}

// console.log(jsUser.name);
// console.log(jsUser);
// jsUser.name="Vijay"
// console.log(jsUser);

//freeze karne se value change nahi hoti
// Object.freeze(jsUser)
// jsUser.name="Ravi"
// console.log(jsUser);

jsUser.greetUser=function(){
    console.log("hello java user!");
    
}
console.log(jsUser.greetUser);
console.log(jsUser.greetUser());

