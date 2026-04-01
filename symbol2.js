let person={
    name:'LCC',
    age:10
};
let id=Symbol('id');
person[id]=12;
console.log(person[id]);
person[id]=110;
console.log(person[id]);
let per={
    name:'Hubli'
};
let i=Symbol('id');
per[i]="Hamsa";
console.log(per[i]);

