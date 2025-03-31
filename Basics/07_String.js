const name="Aditya "
const repoCount=20

// console.log(name + repoCount+" Prajapati");
// console.log(`Hello my name is ${name} and repocount is ${repoCount}`);//BackTick use

// const gameName=new String('Aditya Prajapati')//object
// console.log(gameName);
// console.log(gameName[0]);//A
// console.log(gameName.__proto__);//{}
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));//i
// console.log(gameName.indexOf('t'));//3

// const newString=gameName.substring(0,4)
// console.log(newString);//Adit

const gameName = new String('Aditya Prajapati'); 
// const anotherString = gameName.slice(-8, -4);
// console.log(anotherString);


//trim():-trim are remove white ;
const str="    Hello     "
console.log(str);
console.log(str.trim());

//replace():replace the string to anothe string
const url="https://google.com/google"
console.log(url);
console.log(url.replace(".com",".in"));

//includes():check the condition this string are here in the text.
// console.log(url.includes("Vijay"));

//split():convert to array.
console.log(gameName.split(" "));





