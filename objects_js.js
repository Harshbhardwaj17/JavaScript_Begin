console.log("Concept of objects")
const car = {
    name : "Verna",
    model : "2020",
    color : "white",
    type : "Diesel"
}

//accessing properties of an object
console.log(car.name) // one way
let mod = car.model; // second way
console.log(mod)
let type = car["type"] //third way
console.log(type)


// to access all objects
console.log(car)

console.log("Name , model, color, type are properties /n verna diesel 2020 white are values")

// create an empty object and add later values add
const person ={
   
};
person.firstname = "HARSH",
person.lastname = "Bhardwaj",
person.age = 20,
person.personality = "GOOD"
id = 50;

console.log("the firstname is ", person.firstname, "and his age is ", person.age) // using dot operator
console.log("His name is ",person["firstname"] ,"and his personality is ",person['personality'])

console.log("Previous age is :", person.age)
// to change the property of any object
person.age=22;
console.log("Current age is :", person.age)

//to add some new property
person.religion = "HINDU"
person.language = "HINDI"
console.log("THE RELIGION OF",person.firstname, " is :", person.religion )

// to delete some properties 
delete person.age;
console.log(person.age);

// to check if any property exists or not
console.log("firstname" in person)
console.log("age" in person)

// making a person2 object 
const person2 = {
firstname : "Vinay",
lastname : "Sharma",
age : 21,
personality : "Fair",
id : 29,
fullname : function(){
    return this.firstname + " " + this.lastname;
},

getid : function(){
    return this.id;
}
}

console.log("Details of ", person2.firstname)
// retreiving details using a function
let fname = person2.fullname();
console.log(fname);
let number = person2.getid();
console.log(number)

console.log(person2.getid());
console.log(person2.fullname());

console.log("JS DATES AND TIME")
const d = new Date();
console.log(d)
d.getHours();
d.getMonth();

const e = new Date();
e.getFullYear();

