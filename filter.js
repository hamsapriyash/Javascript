arr =new Array(1,2,3,4,5,6);
var new_arr=arr.filter(function(x){
    return x%2==0;
})
console.log(new_arr);

//Problem: You have an array of products.
//Create a new array that only includes products that are in stock and cost less than $500.
const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Monitor", price: 400, inStock: false },
  { name: "Keyboard", price: 75, inStock: true }
];
var affordable_product=products.filter(function(name){
       return (products.inStock==true &&  products.price<500)
});
console.log(affordable_product);

//Problem: Given a list of users, create a function that returns only 
// the users whose names contain the letter "a" (case-insensitive).
const users = ["Alice", "Bob", "Charlie", "David", "Eve"];
var a_user=users.filter(function(users){
    return users.includes("a");
})
console.log(a_user);

//Problem: You received data from an API, but it's messy.
//  Filter out all "falsy" values so you only have valid numbers left.
const messyData = [0, 15, false, null, 42, "", undefined, 7];
const clean_data=messyData.filter(Boolean);
/*(function(item){
    return item!=null && item!="" && item!=undefined;
})*/
console.log(clean_data);

//Problem: You have a list of guest names, but some people signed up twice.
//  Use .filter() to create a list of unique names only.
const guests = ["Alice", "Bob", "Charlie", "Alice", "David", "Bob"];
const unique_guests=guests.filter(function(name,index){
    return guests.indexOf(name)===index;
})
console.log(unique_guests);