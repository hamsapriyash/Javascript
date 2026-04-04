//using map
function addfive(n){
    return n+5;
}
function addtwo(n){
    return n+2;
}
arr=new Array(1,2,3,4,5,6);
var arr=arr.map(addfive);
console.log(arr);
var n_ar=arr.map(addtwo);
console.log(n_ar);

//roblem: You have an array of prices. Due to inflation, every price has increased by 10%. 
// Create a new array showing the updated prices.
const oldPrices = [100, 200, 300, 400];
const newprice=oldPrices.map(function(item)
{return item+=(item*0.10)});
console.log(newprice);

//Problem: You have a list of names. Transform them into usernames by making them
// lowercase and adding their index number at the end. (e.g., "Alice" becomes "alice0").
const names = ["Alice", "Bob", "Charlie"];
const lowername=names.map((name,index)=>{
   return name.toLowerCase()+index;
})
console.log(lowername);

//Problem: You have an array of user objects. 
// You only need their email addresses to send a newsletter. 
// Create an array of just the email strings.
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@test.com" },
  { id: 3, name: "Charlie", email: "charlie@web.com" }
];
const onlyemail=users.map(user=>user.email);
console.log(onlyemail);

//Problem: Turn an array of tasks into an array of HTML list item strings
//(<li>Task Name</li>) so they can be displayed on a webpage.
const tasks = ["Buy Milk", "Clean Room", "Code JavaScript"];
const htmltasks=tasks.map(task=>`<li>${task}</li>`);
console.log(htmltasks);