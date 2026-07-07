// HOW TO DECLARE VARIABLES
let a = 10;
let b = 20;
console.log(a)
console.log(b)

//another way ti declare variables
let x;
x =  200;
console.log(x);

//javascript expressions
console.log(x*10)

//javascript is case sensitive

let lastName = "Harsh"
let lastname = "Kumar"
console.log(lastname)
console.log(lastName)

//javascript statements

let m,n,o; //statement 1
m = 10; //statement 2
n= 20; //statement 3
o = m+n; //statement 4
console.log("FIRST NUMBER IS :", m)
console.log("SECOND NUMBER IS :", n)
console.log("SUM OF TWO NUMBERS IS :" , o)

// one more way

let a1 = 10, b1= 20, c1 = 30;
console.log(a1)
console.log(b1)
console.log(c1)

// declration of different variables
// let 
let x1 = 5;
let x2 = 10;
let z = x1 + x2;
console.log(z)

// const
const x3 = 15;
const x4 = 25;
console.log(x3 + x4)

//using var 
var x5 = 30;
var x6 = 50;
console.log(x5 + x6)

// one statement can have multiple variables
let person = "Harsh", age = 20, city = "Rohtak";
console.log("Name is :" , person)
console.log("Age is :" , age)
console.log("City is :" , city)

// use let when you want to change the value of variable
let age1 = 25;
console.log(age1);

age1 = 36;
console.log("Age is :" , age1);

// use const when you don't want to change the value of variable
const pi = 3.14;
console.log("Value of pi is :" , pi);
// pi = 3.14159; // This will throw an error because pi is a constant


// use var when you want to declare a variable that can be re-declared and updated
var name = "Harsh";
console.log("Name is :" , name);
var name = "Kumar";
console.log("Updated Name is :" , name);

// Javascript datatypes
//String
let color = "Red";
let fname = "Bhola"

//Number
let num1 = 29;
let num2 = 191;

//BigInt
let bigIntNum = 1234567890123456789012345678901234567890n;

//Boolean
let istrue =true;
let isfalse = false;

//Null
let nullValue = null;

//Undefined
let undefvalue = undefined;

//Symbol
let sym1 = Symbol();
let sym2 = Symbol();

//Object 
let person4 = {
    name : "Vinay", age : 20, class : "BCA"
};

//Array 
const cars =[
    "Toyota", "Volkswagen", "Honda", "Ford"
];
 
console.log('Various data types in javascript are :')

console.log("String data types")
console.log("Color is :" , color) 
console.log("First Name is :" , fname)

console.log("Number data types")
console.log("Number 1 is :" , num1)
console.log("Number 2 is :" , num2)

console.log("BigInt data types")
console.log("BigInt Number is :" , bigIntNum)

console.log("Boolean data types")
console.log("Boolean value is :" , istrue)
console.log("Boolean value is :" , isfalse)

console.log("Null data types")
console.log("Null value is :" , nullValue)

console.log("Undefined data types")
console.log("Undefined value is :" , undefvalue)

console.log("Symbol data types")
console.log("Symbol 1 is :" , sym1)
console.log("Symbol 2 is :" , sym2)
console.log("object data types")
console.log("Person Object is :" , person4)

console.log("Array data types")
console.log("Cars Array is :" , cars)


