// const tinderUser=new Object();
const tinderUser={}
tinderUser.id="1235ada";
tinderUser.name="Aditya";
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"Aditya@gmail.com",
    fullName:{
        userFullname:{
            firstName:"Aditya",
            lastName:"Prajapati"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullname.firstName);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}


// console.log(obj3);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//De-structure
const course={
    coursename:"Java full stack",
    price:"20000",
    courseInstruction:"Aman"
}

// const {courseInstruction}=course
// console.log(courseInstruction);
// const {courseInstruction:Instruction}=course
// console.log(Instruction);



