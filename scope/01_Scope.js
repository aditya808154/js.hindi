/**Scope:="Kahan se kisi variable ko access (use) kar sakte ho?"
 * ek variabe har jagah accessible(available) nahi hota.Uska scope decide hota hai ki 
    wo variable kahaan kaam karega our kahaan nahi karega.
 *There are three type of scope
        ## Global Scope
        ## Function Scope
        ## Block Scope
 */

//Global Scope:-Jo variable bahar declare hota hai, wo har jagah use ho sakta hai.
let name="Aditya";
function greet(){
    let a=2;
    console.log("Hello "+name);
    
}
// greet()
// console.log(a);//a is not defined kui ke a function ke ander hai ia laye is variable ko access nahi kar sakte.

// function scope:-Jo variable function ke andar banta hai, wo sirf usi function ke andar kaam karega.

function greet(){
    let message="Hello!"
    console.log(message);//ok
}
greet();
console.log(message);



