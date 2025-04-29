class User{
    constructor (email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        // return this._password.toUpperCase();
        return `${this._password.toUpperCase()}ravi`
    }
    set password(password){
        // this._password=password.toUpperCase();
        this._password=password;
    }

}
const chai=new User("ap@gmail.com","abcd")
console.log(chai.password);

