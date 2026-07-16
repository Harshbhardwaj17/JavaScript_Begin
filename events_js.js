// document.getElementById("btn").style.color ="red"
// document.getElementById("btn").style.backgroundColor ="cyan"

// to add an event listener // means what the changes occurs when button clicked
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){ // it takes function with itself 
    alert("Button CLicked")
});

// we can also use a separate function
let btn1 = document.getElementById("btn");
function greet(){
alert("Welcome Guysss")
}
btn1.addEventListener("click", greet);

//anonymuous function or without any name
btn.addEventListener("click", function () {
    console.log("Clicked");
});

//same example using arrow function
btn.addEventListener("click", () =>{
    console.log("again clicked ")
})

// js allow multiple listerner at the same time to execute
btn.addEventListener("click", function(){
    console.log("First")
})

btn.addEventListener("click", function(){
    console.log("Second")
})

// multiple eventlistener
btn.addEventListener("click", function () {
    console.log("One");
});

btn.addEventListener("click", function () {
    console.log("Two");
});

btn.addEventListener("click", function () {
    console.log("Three");
});

// one function for multiple events
function showmessage(){
    console.log("Event Happened")
}

btn.addEventListener("click", showmessage);
btn.addEventListener("mouseover", showmessage);
btn.addEventListener("mouseout", showmessage);

//Remove Event Listener

btn.addEventListener("click", greet);
btn.removeEventListener("click", greet); // greet function is removed now 

// one pratice example
let p = document.querySelector("h2");
p.style.color = "red";
p.style.backgroundColor = "cyan";

let start = document.getElementById("start");
let stop = document.getElementById("stop");
function msg(){
    console.log("Button Clicked")
}

start.addEventListener("click", msg);

stop.addEventListener("click", function(){
    start.removeEventListener("click", msg)
})

//dblckick event
stop.addEventListener("dblclick", function(){
    alert("Double Clickedd")
})

//mouseover event 
let hover = document.getElementById("hoverr");
hover.addEventListener("mouseover", function(){
    hover.style.backgroundColor = "pink"
})


//mouseout event
let hover1 = document.getElementById("hoverr");
hover1.addEventListener("mouseout", function(){
    hover1.style.backgroundColor = "brown"
})

//mousemove event
// document.addEventListener("mousemove", function(event){
//     console.log(event.clientX, event.clientY)
// })

//keydown event 
document.addEventListener("keydown",function(event){
    console.log(event.key);
    // console.log("Key pressed")
})

//keyup event 
document.addEventListener("keyup", function () {
    console.log("Key Released");
});

//input event
