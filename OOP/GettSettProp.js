function User(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,"email",{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email=value;
        },
    })

}

const name=new User("ap@gmail.com",1255)

console.log(name.email);




