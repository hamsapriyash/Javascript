function sayFinished(){
    console.log("I am done with task");
}
function dowork(callback){
    console.log("Working.....");
    callback();
}
dowork(sayFinished);

//Second pgm

function sum(a,b){
    console.log("Sum is",a+b);
}
function operation(val1,val2,callback){
    callback(val1,val2);
}
operation(10,15,sum);

//third pgm

var gm=()=>console.log("Good Morning!!");
var ge=()=>console.log("Good Evening!!");
var gn=()=>console.log("Good Night!!");
function greet(val1,val2,callback){  
    console.log("Result of add is",val1+val2);
    callback();
}
var checktime=()=>{
    const hr= new Date().getHours();
    if(hr>=5 && hr<12){
        return gm();
    }
    else if(hr>=12 && hr<18){
        return ge();
    }
    else{
        return gn();
    }  
}
greet(10,20,checktime);    

//Dynamically attaching to callback
function oper(val1,val2,callback){
    console.log("Solution is",val1+val2);
    callback();
}
oper(10,15,function(){
    console.log("Bye from call back function");
})

