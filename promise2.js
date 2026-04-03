//Even or odd number using promise
let promise=new Promise(function (resolve,reject){
    let num=15;
    if (num%2==0){
        resolve("It is Even");
    }else{
        reject(new Error ("It is odd"));
    }
});
promise
.then((result)=>console.log(result))
.catch((err)=>console.log(err.message));

//Time out 3s
const prom=new Promise(function(resolve,reject){
    setTimeout(function(){
        const name="";
        if (name==""){
            resolve("I am late")
        }
    },3000);
});
prom 
.then((data)=>console.log("I am late "));


//Logic: * If username is "admin" and password is "1234", resolve with "Access Granted".
const login=(userInput,passInput)=>{
    return new Promise((resolve,reject)=>{
    if(userInput=="admin" && passInput==1234){
        resolve("Welcome Admin");
    }else{
        reject(new Error("Invalid credentials"));
    }
    });
};
login("admin",1234)
.then((data)=>console.log("Sucess:",data))
.catch((err)=>console.log("Failed:",err.message));
login("hamsa",1234)
.then((data)=>console.log("Sucess:",data))
.catch((err)=>console.log("Failed:",err.message));

//Write a Promise that simulates ordering a pizza.
const orderPizza=new Promise((resolve,reject)=>{
    let pizza=0;
    setTimeout(function(){
    if(pizza>5){
        resolve("Pizza Delivered");
    }
    else {
        reject("Out of Stock");   
    }
},5000);
});
orderPizza
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
.finally(()=>console.log("Thank you for ordering"));
