const User={
    _email:"ap@gmail.com",
    _password:1234,

    get email(){
        return this._email.toLocaleUpperCase();
    },
    set email(value){
        this._email=value;
    }
}
const name=Object.create(User)

console.log(name.email);

