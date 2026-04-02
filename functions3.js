let sum=(a,b)=>a+b;
console.log(sum(9,1))

// Arrow functions With conditions
const great=(a,b)=>{
    if(a>b)
        return "a is greater";
    else
        return "b is greater";

}
console.log(great(5,2));

//Arrow function without parameter
const sayhello=()=>"Hello Universe!!"
console.log(sayhello());

//Arrow function with one parameter
const square=(a)=>a*a;
console.log(square(5));

//Arrow function with ternary operator
let age=55;
let welcome=(age<18)?()=>console.log("child"):()=>console.log("Adult");
welcome();

//Method in form of arrow function
let person={
    name:"Jack",
    age:30,
    sayage:()=>{
        console.log(person.age);
    }
}
person.sayage();