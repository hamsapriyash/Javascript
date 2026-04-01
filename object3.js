let student={ firstname:"John" , secondname:"Sharon",scores:[90,80,40],
getFullname:function(){
    return this.firstname+" "+this.secondname;
},
getAverage:function(){
    let sum=0;
    for(let i=0;i<this.scores.length;i++){
        sum+=this.scores[i];    
    }
    return sum/this.scores.length;
}
};
console.log(student.getFullname());
console.log(student.getAverage());