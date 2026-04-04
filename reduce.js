arr =new Array(1,2,3,4,5,6);
function product(a,b){
    return a*b;
}
var product_arr=arr.reduce(product)
console.log(product_arr)

//Problem: You have an array of item prices in a shopping cart.
//  Use .reduce() to calculate the total cost of all items.
const prices = [29.99, 9.99, 4.99, 100.00];
const total=prices.reduce(function(a,b){
    return a+=b;
})
console.log(total);

//Problem: You have an array of words. 
// Use .reduce() to find the single longest string in the array.
const words = ["JavaScript", "HTML", "CSS", "TypeScript", "React"];
const longword=words.reduce(function(a,b){
    if(a.length>b.length){
        return a;
    }
    else{
        return b;
    }
})
console.log(longword);

