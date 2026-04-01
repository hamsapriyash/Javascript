const library={Title:["The Alchemist","SilentPatient"],Author:["Paulo Coelho","Alex"],isRead:[true,false],
check:function(){
     var arr=[];
    for(let i=0;i<this.isRead.length;i++){
        if(this.isRead[i]==true){
            arr.push(this.Title[i]+" is read");
        }
        else{
            arr.push(this.Title[i]+"is not read");
        }
    }
     return arr;
}
};
console.log(library.check().join('\n'));