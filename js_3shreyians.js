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
