//set interval to show time every 2 second
let showtime=()=>{
    let dateTime=new Date();
    let time=dateTime.toLocaleTimeString();
    console.log(time)
}
let display=setInterval(showtime,2000);

let res=setTimeout(()=>{
    console.log("Congrats")
    console.log("Callback executed");
},300)

let x=false;
if(x==false){
    clearTimeout(res);
    //clearInterval(display);
    console.log("Program Over Callback Terminated");
}