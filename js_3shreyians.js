//GLobal Scope
let name = "Sunny"
function showName(){
    console.log(name)
}
showName();
console.log(name)

//Global variables can be modified
let score = 50;
function increase() {
    score = score + 10;
}
increase();
console.log(score);

//Local /Functinal Scope
function test() {
    let age = 20;
    console.log(age);
}
test();
// console.log(age); //gives an error 

//Block Scope
if (true) {
    let x = 100;
    console.log(x);
}
// console.log(x); it gives an erroe

//Basic closure example
function outer(){
    let name = "Harsh"
    function inner(){
        console.log(name)
    };
    return inner;
}
const myFunction = outer();
myFunction();

//another example 
function parent(){
    let age = 20;
    return function(){
        console.log(age)
    };
}
const child = parent();
child();


//js remembers variables not values
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}
const increment = counter();

increment();
increment();
increment();


//thisketword 
const person = {
    name :"Harsh",
    age :20,
    gender : "Male",
    
   greet(){
console.log("Hello" + this.name);
    }
};
person.greet();


//another example
const car = {
    brand: "BMW",
    model: "M5",
    details() {
        console.log(this.brand);
        console.log(this.model);
    }
}
car.details();

//this in a constructor function
function Person1 (name, age){
    this.name = name;
    this.age = age;
}
const p1 = new Person1("Harsh", 32);
console.log(p1.name)

//call method
const Person3 = {
    name:"Vinay"
};
function greet1(city){
    console.log(this.name + " from "+ city);
}
greet1.call(Person3, "Delhi");

//apply method is same as call exceept it accpt values as an array
greet1.apply(Person3, ["Delhi"]);

//Constructor in JS
function Student(name,age,gender){
    this.name = name; 
    this.age = age;
    this.gender = gender;
}

//creating objects in JS
const S1 = new Student("Harsh", 20, "Male");
const S2= new Student("Vinay", 21, "Male")
console.log(S1)
console.log(S2)

//COnstructor With Methods
 function Students (name, marks){
    this.name = name;
    this.marks;

    this.show = function(){
        console.log(this.name + " Scored " + this.marks)
    };
 }
 const s1 = new Students("Goldy",98);
 s1.show();

 // Factory function pattern
 function createProduct(name,price){
    let stock =10;
    return {
        name,
        price,


checkStock(){
            console.log(stock);
        },

buy(qty){
    if(qty<=stock){
        stock-=qty;
        console.log(`${qty} pieces booked -${stock} pieces left`);
    }
    else{
        console.error(`we only have ${stock} piees left`);
    }
},

refill(qty){
    stock+=qty;
    console.log(`refilled the -${stock} pieces now`);
}
    };
 };

 let iphone = createProduct("iphone", 70000 )
iphone.buy(1);
iphone.checkStock();
iphone.buy(4);
iphone.checkStock();

let samsung = createProduct("M31", 25000);
samsung.checkStock();
samsung.buy(2);
iphone.buy(2);
samsung.checkStock();

 



