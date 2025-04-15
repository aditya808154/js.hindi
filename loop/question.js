//1. print the array items using for...of loop.
// const arr=["rea","green","blue"];
// for (const array of arr) {
//     console.log(array); 
// }

//2. printing the string chracters using for..of loop.
// const str="Hello World";
// for (const string of str) {
//     console.log(string);
// }

// printing the key-values for object using for in loop 
const obj={
    name:"Aditya",
    id:102,
    add:"Delhi",
    gender:"M"
}
for (const key in obj) {
    // console.log(obj[key]);
    // console.log(key,":-",obj[key]); 
}

//4. printing the array index using for in loop.
const arr=["rea","green","blue"];
for (const key in arr) {
    // console.log(key,':-',arr[key]);
}

//5.multiply the all array number by 10 using forEach.
// const num=[2,4,8]
// num.forEach((n)=>{
    // console.log(10*n);
// });

//6.printing the String to uppercase using forEach
const str=["hello sir!"]
str.forEach(s=>{
    // console.log(s.toUpperCase());
});

//7. map() – Array ke elements ko double karke new array banao
// const nums=[5,10,15];
// const doubled=nums.map(num=>num*2);
// console.log(doubled);

//8. map() – String array ko sabko lowercase me banao
// const city=["Mumbai","jaipur","DELHI"]
// const lower=city.map(name=>name.toLowerCase());
// console.log(lower);

//9. map() – Array me "Mr." jod ke new array banao
// const boys=["Ravi","Vijay","Ram ji"];
// const add=boys.map(boy=>"Mr. "+boy);
// console.log(add);

//10. forEach() – Index ke sath value print karo
// const boys=["Ravi","Vijay","Ram ji"];
// boys.forEach((key,value) => {
//     console.log(`index ${value}:- ${key}`);
    
// });

//11. for...of – Sum of numbers
// const nums=[10,20,30]
// let sum=0;
// for (const add of nums) {
//     sum+=add;
// }
// console.log("Total:-",sum);

//12. map() – Square of numbers
// const num=[1,2,3,4];
// const add=num.map(nums=>nums*nums);
// console.log(add);

//13. forEach() – Even numbers only
// const nums = [5, 8, 12, 7];
// nums.forEach(num=>{
//     if(num%2==0){
//         console.log("even no"); 
//     }
//     else{
//         console.log("odd");
        
//     }
// })

// 14. map() – Boolean array (true if number > 10)
const nums=[5,12,18,7,20]
// const ishigh=nums.map(num=>num>10);
// console.log(ishigh);


// nums.forEach(num=>{
//     if(num>10){
//         console.log("largest",num);
//     }
//     else{
//         console.log("smallar",num);
        
//     }
// })


// 15. for...in – Nested object print
const student={
    name:"Aditya",
    skills:{
        java:true,
        js:true,
        python:false
    }
};
for(const skill in student.skills){
    console.log(`${skill} : ${student.skills[skill]}`);
    
}