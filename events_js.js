// // document.getElementById("btn").style.color ="red"
// // document.getElementById("btn").style.backgroundColor ="cyan"

document.getElementById("submit", function(){
    event.preventDefault();
})
// // to add an event listener // means what the changes occurs when button clicked
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function(){ // it takes function with itself 
//     alert("Button CLicked")
// });

// // we can also use a separate function
// let btn1 = document.getElementById("btn");
// function greet(){
// alert("Welcome Guysss")
// }
// btn1.addEventListener("click", greet);

// //anonymuous function or without any name
// btn.addEventListener("click", function () {
//     console.log("Clicked");
// });

// //same example using arrow function
// btn.addEventListener("click", () =>{
//     console.log("again clicked ")
// })

// // js allow multiple listerner at the same time to execute
// btn.addEventListener("click", function(){
//     console.log("First")
// })

// btn.addEventListener("click", function(){
//     console.log("Second")
// })

// // multiple eventlistener
// btn.addEventListener("click", function () {
//     console.log("One");
// });

// btn.addEventListener("click", function () {
//     console.log("Two");
// });

// btn.addEventListener("click", function () {
//     console.log("Three");
// });

// // one function for multiple events
// function showmessage(){
//     console.log("Event Happened")
// }

// btn.addEventListener("click", showmessage);
// btn.addEventListener("mouseover", showmessage);
// btn.addEventListener("mouseout", showmessage);

// //Remove Event Listener

// btn.addEventListener("click", greet);
// btn.removeEventListener("click", greet); // greet function is removed now 

// // one pratice example
// let p = document.querySelector("h2");
// p.style.color = "red";
// p.style.backgroundColor = "cyan";

// let start = document.getElementById("start");
// let stop = document.getElementById("stop");
// function msg(){
//     console.log("Button Clicked")
// }

// start.addEventListener("click", msg);

// stop.addEventListener("click", function(){
//     start.removeEventListener("click", msg)
// })

// //dblckick event
// stop.addEventListener("dblclick", function(){
//     alert("Double Clickedd")
// })

// //mouseover event 
// let hover = document.getElementById("hoverr");
// hover.addEventListener("mouseover", function(){
//     hover.style.backgroundColor = "pink"
// })


// //mouseout event
// let hover1 = document.getElementById("hoverr");
// hover1.addEventListener("mouseout", function(){
//     hover1.style.backgroundColor = "brown"
// })

// //mousemove event
// // document.addEventListener("mousemove", function(event){
// //     console.log(event.clientX, event.clientY)
// // })

// //keydown event 
//  document.addEventListener("keydown",function(event){
//    console.log(event.key);
//      console.log("Key pressed")
// })

// //keyup event 
// document.addEventListener("keyup", function () {
//     console.log("Key Released");
// });

// //input event
// let inp = document.getElementById("name");
// inp.addEventListener("input", function(){
//     console.log(input.value)
// })


// //change event
// let city = document.getElementById("city");

// city.addEventListener("change", function () {
//     console.log(city.value);
// });

// //focus event 



// const city1 = document.getElementById("city")
// city1.addEventListener("focus", function(){
//     city1.style.backgroundColor = "purple"
// })

// //submit event 
// let form1 = document.getElementById("myForm");
// form1.addEventListener("submit", function(){
//     alert("Form Submitted")
// })

// //load event
// window.addEventListener("load", function(){
//     console.log("Webite Loaded")
// })

// //Event Object 
// let event = document.getElementById("events");
// event.addEventListener("click", function(){
//     console.log("Clicked")
// })

// event.addEventListener("click", function(event){
//     console.log("event")
// })

// //event type
// event.addEventListener("click", function (event) {
//     console.log(event.type);
// });

// //event target 
// event.addEventListener("click", function (event) {
//     console.log(event.target);
// });

// //current target 
// event.addEventListener("click", function (event) {
//     console.log(event.currentTarget);
// });


// //actual mouse position in browser window
// document.addEventListener("click", function (event) {
//     console.log(event.clientX , event.clientY);
//     // console.log(event.clientY);
// });

// //key events rsturns the key that was pressed
// document.addEventListener("keydown", function(event){
// console.log(event.key)
// })

// document.addEventListener("keydown", function(){
//     console.log(event.code);
// })

// //button event 
// document.addEventListener("mousedown", function (event) {
//     console.log(event.button);
// }); 

// //no prevention in form
// let form = document.getElementById("myForm");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("Form is submitted without refreshing");
// })

// reading input from an form
// let input22 = document.getElementById("username");
// let btn11 = document.getElementById("btn11");

// btn11.addEventListener("click", function () {
//     console.log(input22.value);
// });

//reading pasword
// let pass = document.getElementById("pass");
// pass.addEventListener("input", function () {
//     console.log(pass.value);
// });
console.log("JS LOADED")
//reading password 
// let pass = document.getElementById("pass");
// let btn = document.getElementById("showBtn");

// btn.addEventListener("click", function () {
//     console.log(pass.value);
// });

// //reading a number 
// let num4 = document.getElementById("age");
// num4.addEventListener("click", function(){
//     console.log(num4.value)
// })

// // reading value form a textarea
// let txtarea = document.getElementById("txtarea");
// console.log(txtarea.value);

// // reading value from a select dropdown
// let dpdw = document.getElementById("city");
// dpdw.addEventListener("click", function(){
//     console.log(dpdw.value)
// })
// console.log(dpdw.value);
// //JS validation in Forms

// let nameInput = document.getElementById("name"); // Ensure your HTML has id="name"

// //Complete Form Validation
// let mope = document.getElementById("mope");
// mope.addEventListener("submit", function(event){
// event.preventDefault();


// let uname = document.getElementById("uname").value.trim();
// let email = document.getElementById("email").value.trim();

// if(uname === ""){
//     alert("Username is Required");
//     return;
// }

//  if(uname.length <3){
//     alert("use more than 3 characters");
//     return;
// }

//    if (!email.includes("@")) {
//         alert("Enter a valid email");
//         return;
//     }
     
//         alert("Form submitted successfully!");
     
// });


// // let mope = document.getElementById("mope");

// // mopw.addEventListener("submit", function (event) {
// //     console.log("Form Submitted");
// //     event.preventDefault();
// // });

// // pattern matching
// let mobile = document.getElementById("mobile");
// console.log(mobile.pattern);

// // .. to check if a pattern is valid
// let uname = document.getElementById("uname");
// let check = document.getElementById("check");
 
// check.addEventListener("click", function(){
//     console.log(uname.checkValidity());
// });

// // let regex = /^[A-Za-z]{3,10}$/;

// // if (regex.test(uname.value)) {

// //     console.log("Valid");

// // }

// //JS timers and intervals
// //settimeout() executes a function once after a specified delay.
// setTimeout(function(){
//     console.log("Hello");
// }, 2000); // it executes hello in 2 seconds ........ 

// //with arrow function
// setTimeout(() =>{
//     console.log("Welcome");
//     // alert("heyyyyyyyy")
// },1000)

// //named function
// function greet(){
//     console.log("Good Morning");
// }

// setTimeout(greet,4000);

// //change text after some time
// let title = document.getElementById("title");
// setTimeout(function(){
//     title.textContent = "Welcome .....!"
// },5000);

// //cleartimeout
// let timer = setTimeout(function () {
//     console.log("Hello");
// }, 5000);

// clearTimeout(timer); // hello never executes


// // one example of both set and clear
// let timer1;
// document.getElementById("start1").addEventListener("click", function(){
//    timer1 =  setTimeout(function(){
//         alert("Time is Up")
//     },5000);
// });

// document.getElementById("cancel").addEventListener("click", function(){
//     clearTimeout(timer1);
// })


// // setInterval() executes a function repeatedly after a fixed interval.

// // setInterval(function(){
// //     console.log("Hello");
// // },1000);

// //example of counter 
// // let count = 1;
// // setInterval(function(){
// //     console.log(count);
// //     count++;
// // },1000)

// //exmple of clock
// let clock = document.getElementById("click");
// setInterval(function(){
//     clock.textContent = new Date().toLocaleDateString();
// },1000);

// //clear interval 
// let count = 1;
// let interval = setInterval(function(){
//     console.log(count);
//     count++;
//     if(count>5){
//         clearInterval(interval);
    
//     }

// },1000);

// //otp expire example
// setTimeout(function(){
//     alert("OTP EXPIRED")
// },7000)

// //countdown

// let time1 = 10;
// let timer01 = setInterval(function(){
//     console.log(time1)
//     time1--;
//     if(time1<0){
//         clearInterval(timer01);
//     }
// },1000)

// let bgchange = document.getElementById("bgchange")
// function bgchangee(){
// bgchange.style.backgroundColor = "red";
// }

// setTimeout(bgchangee, 10000);

//local storage api
//setitem()
localStorage.setItem("name","harsh");
localStorage.setItem("city","delhi")
localStorage.setItem("gender","male")

//getitem()
let name = localStorage.getItem("name");
console.log(name)

let city = localStorage.getItem("city")
console.log(city)

console.log(localStorage.getItem("gender"))

// to remove an item 
localStorage.removeItem("name")
// let name = localStorage.getItem("name");
console.log(name)

//clear clears everything
// localStorage.clear();

// to aceess a key 
console.log(localStorage.key(0));