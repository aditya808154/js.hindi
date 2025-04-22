// generate a randem color
const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#"
    for (let i = 0; i <6; i++) {
       color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let intervalId;
const StartChang=function(){
    if (!intervalId) {
        intervalId=setInterval(changebg,1000);   
    }

    function changebg(){
        document.body.style.backgroundColor=randomColor();
    }
}
document.querySelector('#start').addEventListener('click',StartChang)

const StopChang=function(){
    clearInterval(intervalId)
    intervalId=null;
}
document.querySelector('#stop').addEventListener('click',StopChang)
