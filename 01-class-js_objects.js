// Class code examples

const person1 ={
    firstName :"Chee Kean",
    weight : 231,
    height : 1.7
}

const person2 ={
    firstName :"Diego",
    weight : 231,
    height : 1.7
}

const person3 ={
    firstName :"Carlos",
    weight : 231,
    height : 1.7
}

const person4 ={
    firstName :"Carolina",
    weight : 231,
    height : 1.7
}

//Accessing a property with dot notation:

console.log(person1.firstName, person1.weight);

//Accesing the property with bracket notation

console.log(person1["firstName"], person1["weight"]);

const personKeys = ["firstName","weight","height"];
for(key of personKeys){
    console.log(`person 1 ${key}: `,person1[key]);
}

person1.nationality = "Italian";

console.log(person1.nationality);

person1["favFood"] = "pizza";

const newKey = "favourite book";
person1[newKey]= "guide to galaxy";

console.log("person1: ", person1);

for(value in person1) console.log(value)


// Object.keys(person1)
for (key of Object.keys(person1)) console.log(person1[key])

console.log("accessing a number", person1[1087643])

console.log("reading index from keys", Object.keys(person1)[1])
console.log("object lenght", person1.length)

const tween1 = {
    name : "Carlos"
}

const tween2 = {
    name: "Carlos"
}

console.log(tween1 === tween2);