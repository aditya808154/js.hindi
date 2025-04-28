// Object literal
const user={
    name:"Aditya",
    age:22,
    signedIn:true,
    getUserDetails:function(){
        // console.log("Hello");
        //this ke matalb hai curent value .
        // console.log(this.name);
        console.log(this);
        
        
        
    }
}
// console.log(user);
// console.log(user.name);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor function

function User(name,loginCount,isLoggedIn){
    this.name=name;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    // return this;
}
// const user1=User("Aditya",22,true)
// const user2=User("Aditya",25,false)

const user1=new User("Aditya",22,true)
const user2=new User("Aditya",25,false)
console.log(user1);
console.log(user2);


