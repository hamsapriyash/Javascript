let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise Resolved")
    },4000);
});
async function asyncFunc(){
    let result=await promise;
    console.log(result);
    console.log("hello");
} 
asyncFunc();

//Showing await 
async function test(){
    console.log("step 2")
    await console.log("step 3")
    console.log("step 4")
}
console.log("step 1")
test();
console.log("Step 5")