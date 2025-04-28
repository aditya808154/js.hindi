class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
    addCourse(){
        console.log(`new course is add by ${this.username} and ${this.email}`);
        
    }
}

const chai=new Teacher("chai","chai@gmail,com");
chai.addCourse();

