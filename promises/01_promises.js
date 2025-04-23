// const promiseOne=new Promise(function(resolve,reject){
//     //Do an aync task
//     //DB calls,cryptagraphy,network
//     setTimeout(function(){
//         console.log('Asyn task is completed..'); 
//         resolve();   
//     },1000)
// })

// // resolve
// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
        
//     },1000)
    
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })



// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             name:"Aditya",
//             age:25
//         })
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user);
    
// })


// const promisefour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//        let error=false;
//        if(!error){
//             resolve({
//                 name:"Aditya",
//                 age:25
//             })
//        }else{
//         reject('Error:something went wrong')
//        }

//     },1000)
// })
// promisefour.then((user)=>{
//     console.log(user);
//     return user.name   
// }).then((name)=>{
//     console.log(name);
    
// }).catch((error)=>{
//     console.log(error);
    
// }).finally(()=>{
//     console.log("Finally success...");
    
// })

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
               let error=true;
            if(!error){
                resolve({
                    name:"Aditya",
                    age:25
                    })
            }else{
            reject('Error:something went wrong')
        }
        
    },1000)
})
async function fiveExample(){
    try {
        const response=await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
fiveExample()









// async function getAllUser() {
//     try {
//         const response=await fetch('https://api.github.com/users/hiteshchoudhary')        
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error:",error);
        
//     }
    
// }
// getAllUser()

fetch('https://api.github.com/users/hiteshchoudhary').then((responce)=>{
    return responce.json();
}).then((data)=>{
        console.log(data);
        
})
.catch((error)=>console.log(error));




