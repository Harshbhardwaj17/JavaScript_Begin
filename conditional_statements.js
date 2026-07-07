//Conditional Statements
console.log("Conditional Statements")

// If Statement
let age = 19;
if (age>18){
    console.log("You can drive")
}

//if else statement
let a = 20;
if (a>18){
    console.log("You can give vote");
}
else{
    console.log("You cannot give vote");
};

// if else if statement
let time = 102;
if (time<12){
    greeting = "Good Morning";
}

else if (time<18){
    greeting = "Good afternoon";
}

else{
    greeting = "Good Evening";
}
console.log(greeting);

// Ternary Operator
let text = (age>18) ? "You can drive" : "You cannot drive";
console.log(text);

// Switch Statement 
let grade = "A";

switch (grade){
    case "A" :
        console.log("Excellent");
        break;

    case "B" :
        console.log("Good");
        break;
    case "C" :
        console.log("Fair");
        break;
        
    case "D" :
        console.log("Poor");
        break;
        default:
            console.log("Invaid Grade");
}

