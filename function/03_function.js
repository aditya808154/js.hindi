//Type of function

/*//1.Named Function
function syHello(){
    console.log("Hello!...");
}
syHello();*/

/*// 2.Function with Parameters:-take input
function greet(name){
    console.log("Hello! "+name);
}
greet("Aditya")*/

/*// 3.Function with Return Value
function add(a, b) {
    return a + b;
  }
let result = add(3, 4);
console.log(result);  */

/*// 4. Anonymous Function (Naam nahi hota):-Yeh function kisi variable ke andar assign hota hai. Naam nahi hota.
let show=function(){
    console.log("Hello!...");  
};
show()*/

/*// 5.Arrow Function:-ES6 mein introduce hua. Short aur modern tarika function likhne ka.
// first
let greet=(name)=>{
    console.log("hi! "+name);
};
greet("Aditya")
//second
let square = num => num * num;
console.log(square(5)); */

/*//6. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE is running!");
})();  */
  

/*//7. Callback Function:-Ek function jo doosre function ko argument ke roop mein diya jata hai.
function greetUser(name, callback) {
    console.log("Hi " + name);
    callback();
  }
  
  function sayBye() {
    console.log("Bye!");
  }
  
  greetUser("Rohit", sayBye);*/


/*//8. Constructor Function:-Objects banane ke liye use hota hai.
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let p1 = new Person("Ravi", 25);
  console.log(p1.name); */
  


