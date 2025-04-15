//While
// let i=0;
// while(i<=10){
//     i++;
//     console.log(i);
// }

//do while loop
// let i=0
// do{
//     i++;
//     console.log(i+"hello");
    
// }while(i<10)


// for of loop:-Jab tu array ke value par loop chalana chahe, tab for...of use kar.
// let array=[1,2,3,4,5,6,7];
// for (const num of array) {
//     console.log(num);
// }

// maps:-maps is a object amd do not allow copy values.map are not iterate
//Jab array ke har item ko badal ke naya array banana hai, to map() use kar.
const map=new Map();
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);
for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}

//forin:-  Jab object ke key ya array ke index pe loop chahiye, to for...in use kar.
const obj={
    name:"Aditya",
    age:25,
    marks:80
}
for (const key in obj) {
    // console.log(key);
    // console.log(obj[key]);
    // console.log(key,':-',obj[key]);  
}

//forEach loop:-Jab tu array ke sab item pe kuch kaam karna chahe (jaise print, add, etc.), to forEach() best hai.
const arr=[1,2,3,4,5,6]
arr.forEach(function(item){
    // console.log(item);
    
})
arr.forEach((item,index,arr)=> {
    console.log(item,index,arr);
    
})

