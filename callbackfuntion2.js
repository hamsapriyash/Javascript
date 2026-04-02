/*Goal: Write a function called processArray that takes an array and a callback function.
Challenge: Call processArray twice:Once passing a callback that filters out numbers less than 40.
Once passing a callback that squares every number.*/

function processArray(arr,callback){
    return callback(arr);
}
let arr=[10,20,30,40,50,60];
const filterarr=(arr)=>{
    a1=[];
    for(let i=0;i<arr.length ;i++){
        if(arr[i]>40){
            a1.push(arr[i]);
        }
    } 
    console.log(a1);
}

const square=function (arr){
    let a2=[];
    for(i=0;i<arr.length;i++){
        let ans=arr[i]*arr[i];
        a2=[...a2,ans];
    }
    console.log(a2);
}

processArray(arr,filterarr)
processArray(arr,square)

