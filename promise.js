//Passed or failed exam using promise
const passed=true;
let result=new Promise(function (resolve,reject){
    if (passed){
        resolve("Passed Exam");
    }else{
        reject();
    }
});
result.then(function(){
    console.log(result);
})
.catch( function(){
    console.log("Failed Exam.")
});

//Promise
const mypromise=new Promise(function(resolve,reject){
    const sucess=true;
    if(sucess==true){
        resolve("Operation is successful"); 
    }
    else{
        reject("Operation failed");
    }
});
mypromise.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Operation passed finally");
});

//promise is a call back function
let promise=new Promise(function(resolve,reject){
    const x="Krishna";
    const y="Krishna";
    if(x==y){
        resolve();
    }
    else{
        reject();
    }
});
promise.then(function(){
    console.log("Both names are Krishna");
})
.catch(function(){
    console.log("Both names are not krishna");
});

//Asynchronous pgm of promise
async function f(){
    console.log("Asynchronous Function");
    return Promise.resolve(1);
}
f()
.then(function(result){console.log(result)});
