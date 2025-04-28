function SetUserName(username){
    //Complex db calls
    this.username=username;
}
function createuser(username,email,password){
    SetUserName.call(this,username)
    this.email=email;
    this.password=password;
}
const a=new createuser("Aditya","ad@gmail.com",5255);
console.log(a);

