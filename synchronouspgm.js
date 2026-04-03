//Synchronous Program
console.log("Start");
 const divide=(a,b)=>console.log(a/b);
const  operation=(val1,val2,callback)=>callback(val1,val2)
operation(100,5,divide)
console.log("End")

//Asynchronous Pgm
console.log("Start")
const greeting=()=>console.log("Hello from JS");
setTimeout(()=>console.log("This executes after 4 seconds"),4000);
greeting();
console.log("End")

