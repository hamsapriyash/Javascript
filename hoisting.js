//Internally it will be like (var counter;) only variable can be hoisted.let and constant enter temporary dead zone
console.log(counter);
let counter=10;
console.log(counter);

//function hoisting
let x=20;
let y=10;
console.log(add(10,20));
function add(a,b){
    return a+b;
}

//If we hoist the variable as well as function with same name it will give priority to function
console.log(typeof fly); 
var fly = "I am a string";
function fly() {
    console.log("I am a function");
}

//Does not work with arrow function and named expressions
sayHi(); 

var sayHi = () => {
    console.log("Hi!");
};

