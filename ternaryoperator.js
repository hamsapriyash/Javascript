//Goal: Create a variable shippingCost.
// If the user is a "Premium" member, the cost is $0. If they are a "Guest," the cost is $15.
const shippingCost=(member)=>(member==="Premium")?0:15;
console.log(shippingCost("Premium"));

//Adult and child
const check=(age)=>(age>18)?console.log("Adult"):console.log("Child");
check(12);

//Goal: Evaluate a variable age.If age is less than 13, return "Child".
//If age is between 13 and 19, return "Teen".Otherwise, return "Adult".

const ageGroup=(age)=>(age<13)?"Child":(age>=13 && age<19)?"Teen":"Adult";
console.log(ageGroup(14));

//Goal: Check if the variable userName has a value.
//Challenge: If userName is truthy, display the name;if it's null or an empty string, display "Anonymous".

let nickname="Tom";
const userName=(name)=>name?name:"Anonymous";
console.log(userName("Tom"));
console.log(userName(null));
console.log(userName(""));
