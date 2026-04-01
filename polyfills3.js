Array.prototype.at=undefined;
Array.prototype.at=function(number){
    number=Math.trunc(number);
    if (number<0){
        number+=this.length;
        return this[number]; 
    }
    else {
        return this[number]; 
    };
};
const myArr = [10, 20, 30];
console.log("Result:", myArr.at(-2));

const fruit=['apple' ,'mango' , 'kiwi'];
console.log("Result:",fruit.at(2));