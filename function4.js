//The Greeting Declaration: Create a function called greetUser using a function declaration. 
// It should take a name as an argument and return a string: "Hello, [name]!". 
// Test it by calling it before the line where you define it.

console.log(greetUser('Hamsa'));

 function greetUser(name){
    return `Hello , ${name}`;
}

/*The Area Expression: Define a function expression and assign it to a variable named calculateRectangleArea. 
It should take width and height and return their product*/

const calculateRectangleArea= function (width,height){
    return width*height;
}
console.log(calculateRectangleArea(10,5));

/*The Concise Cube: Use an arrow function with implicit return (no curly braces) to
 create a function that takes a number n and returns its cube.*/

 const cube=n=>n*n*n;
 console.log(cube(5));

 /*The Multi-Line Arrow: Create an arrow function called checkEvenOdd. It should take a number, 
 check if it's even or odd using an if/else block, and return the string "Even" or "Odd".*/

const checkEvenOdd =(number)=> //(number%2===0)?"Even":"Odd";
   {
    if(number%2===0){
        return "Even";
    }else{
        return "Odd";
    }
};

console.log(checkEvenOdd(15));

/*The Object Method: Create an object calculator with a property value: 10. Add a method add using a regular function expression that adds a number to this.value. 
Then, try adding a method multiply using an arrow function and observe what happens to this.*/

let calculator={
    value:10,
    add:function(){
        console.log(10+this.value);
    } ,
    mult:()=>console.log(2*calculator.value)
}
calculator.add();
calculator.mult();

/*The Filter Logic: Create a function using a declaration that takes an array of strings and 
returns a new array containing only the strings that have more than 5 characters.*/

let arr=["universe","love","thankyou","emotion","bless","sole"];
function filterarray(arr){
    let filterarr=['5letterwords'];
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>5){
            //filterarr.push(arr[i]);
            filterarr=[...filterarr,arr[i]];
        }
    }
    return filterarr;
}
console.log(filterarray(arr));

/*The Rest Parameter: Create an arrow function called sumAll that uses the rest operator (...numbers) 
to take any number of arguments and return their total sum.*/

const sumAll=(...number)=>{
    let sum=0;
    for(let i=0;i<number.length;i++){
        sum+=number[i];
    }
    return sum;
};
console.log(sumAll(10,20,30));

/*The Temperature Converter: Write a function expression that converts Fahrenheit to Celsius. 
 Formula: (F - 32) * 5/9. Assign it to a variable and ensure it handles decimal results.*/

const tempconvt=(F)=>{
    let celsius;
    celsius=(F-32)*5/9;
    return parseFloat(celsius.toFixed(2));
 }
 console.log(tempconvt(127.5));

