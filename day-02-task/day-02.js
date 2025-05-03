
' use strict';

let person;
person= {
    name:"Bedada Merga", 
    age:30, 
    isStudent:false, 
    favoriteProgrammingLanguage:"javascript"
};

console.log(person.name);
 
console.log(person.isStudent);

// task 2 &3

let people = "Oromo";

console.log( people);

people="Ethiopia";

console.log( people);

const City = "Ginchi";

console.log( City);

City = " Ambo";

console.log( City);

// i didn't understand why the value was not printed on console.
// but, i think the code is correct. 
// no error when the value reassigned forvariable declared by let except by const.

// task 4

let family = {
    father: " Merga ",
    age:55,
    job:" Govermental Officer ",
};

let parents = {
    father:"Tirfessa",
    age:75,
job: "Farmer"
};

let arr = [11,12,13]

family = parents
console.log(family.father);

parents= {
    job:"merchant",
liveIn:"Birmaji"
};
console.log(family.job);
