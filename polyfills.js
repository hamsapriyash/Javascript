let number;
if(!Math.trunc){
    //if no such functions implement it
    Math.trunc=function (number){
        return number<0?Math.ceil(number):Math.floor(number);
    }
}
console.log(Math.trunc(10.9));