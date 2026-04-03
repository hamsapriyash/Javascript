//pgm 1
const promise= new Promise(function(resolve,reject){
    setTimeout(function(){
        const sum=4+5;
        resolve(sum);
    },1000);
});
promise.then(function (result){
    console.log(result);
});

//pgm2
const prom=new Promise(function(resolve,reject){
    setTimeout(function(){
        const sum=4+5+'a';
        if (isNaN(sum)){
            reject("Error while calculating");
        }
        else{
            resolve(sum);
        }
    },5000);
});
    prom.then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log("Error");
    });
