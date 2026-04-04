/*The Delayed Greeting: Write a function that takes a name and a delay (in ms). 
It should log "Hello, [Name]" only after that delay. 
If a "Cancel" function is called before the timer ends, the greeting should never appear.*/
let timer;
let greet=(name,delay)=>{
    let timer=setTimeout(()=>{
        console.log(`Hello,${name}`); 
},delay)
};
let cancel =()=>{
    clearTimeout(timer);
    console.log("Over");
  };

greet('Hamsa',2000);
cancel();
