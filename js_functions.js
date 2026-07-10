console.log("Concept of Functions")
// calling a simple function
function myfunc (){
    console.log("This is a simple function")
}
let msg = myfunc();
console.log(msg);
myfunc();

// function to multiply two values / with parameters
function mul (a,b=1){
    console.log(a*b)
}

console.log("The multiplication of these two numbers are :")
mul(10,11);
mul(9);   // return NAN

// function with one parameter
function sayhi (name){
    console.log("Hello" +name)
    //  return "Hello " + name;
     return "Done" // code after return statement never executed
}
sayhi("Harsg");
let greeting = sayhi("Harsh")
console.log(greeting)

// an age function
function checkage (age){
    if(age<18){
        return("Too young")
    }
    else{
        return"Access is granted"
    }
}
console.log(checkage(100))

//function expression
const add = function(x,y){
    return x+y;
}
console.log(add(10,3))

// arrow functions
const add1 = (m,n) => {
    return m+n;
}

console.log(add1(10,100))

// arrow function
const mul1 = (k,l) => {
    return k*l
}
console.log(mul1(9,8))

//arrow function simple 
const helllo = () => "Hello Harshuuu"
helllo();
let a1 = helllo();
console.log(a1)
