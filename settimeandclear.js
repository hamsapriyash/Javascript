/*The Digital Stopwatch: Create a function that logs "Tick" every 1 second.
 After 5 seconds, the ticking should stop automatically.
Concept: setInterval, clearInterval, and a counter variable.*/

let Tick=()=>{
    let date=new Date();
    let dt=date.toLocaleTimeString();
    console.log(dt);
}
let intervalId=setInterval(Tick,1000);
setTimeout(()=>{
        clearInterval(intervalId);
        console.log("Time Over");
},5000);

/*way 2
let count=0;
let intervalId2=setInterval(()=>{
    count++;
    console.log("Tick");
    if(count==5){
        clearInterval(intervalId2);
        console.log("Time Over");
    }
},1000);*/


