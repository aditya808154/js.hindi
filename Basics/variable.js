const accountId=144553
let accountEmail="aditya@gmail.com"
var accountPassword="12345"
accountCity="Delhi"

// accountId=2;//not allowed
accountEmail="ap@gmail.com"
accountPassword="565559"
accountCity="mumbai"

/*
we can creat the element name in the memory without using variable.
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])

let a;
// const b;
console.log(a);//undefined
// console.log(b);//Error


