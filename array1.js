const numbers=[1,2,3,4,5,6,7,8,9];
const [one,two,...rest]=numbers;
console.log(one);

const arrValue=["one","two","three","four"];
const [x,...y]=arrValue;
console.log(x);
console.log(y);

let arr=[10];
let [w=5,z=7]=arr;
console.log(w);
console.log(z);

let p=10;
let q=20;
[p,q]=[q,p];
console.log("value of p is"+p);
console.log("value of q is"+q);