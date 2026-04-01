if(!Array.prototype.includes){
    Array.prototype.includes=function (searchelement){
        return this.indexOf(searchelement)!==-1;
    }
}
const car=['BMW','Creta','Shift'];
console.log(car.includes('Gwagon'));