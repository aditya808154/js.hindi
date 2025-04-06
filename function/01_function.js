function sayName(){
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
    console.log("f");
}
// sayName()

function sum(num1,num2){
    console.log(num1+num2);
}
// sum()
// sum(4,5)

function sum(num1,num2){
    // let Result=num1+num2
    // return Result;
    return num1+num2
    
}
// const add=sum(3,5)
// console.log("Result: "+add);


function mess(username){
    return`${username} just logged in`
}
// console.log(mess("Aditya"));


// rest operater
function calculate(...num1){
    return num1;
}
// console.log(calculate(200,400,500,600));

function calculate(value1,value2,...num1){
    return num1;
}
// console.log(calculate(200,400,500,600));

const user={
    name:"Aditya",
    age:20
}
function handle(anyobject){
    console.log(`name is ${anyobject.name} and age is ${anyobject.age}`);
}
// handle(user)
handle({
    name:"vijay",
    age:18
})

