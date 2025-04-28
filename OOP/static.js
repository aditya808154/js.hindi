class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
    static createId(){
        return '123'
    }
}
const a=new User("Aditya");
a.logMe();
console.log(a.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
    addCourse(){
        console.log(`new course is add by ${this.username} and ${this.email}`);
        
    }
}


