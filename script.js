// // console.log("How are youuu")
// // alert("How are youuu")

// // // with a default value 
// // let city = prompt("Enter your city :", "Panipat");
// // alert("How are you ", city)

// // let isstudent = confirm("Are u a student ?");
// // if(isstudent){
// //     alert("Welcome, Srudent")
// // }
// // else{
// //     alert("Welcome, Guest")
// // }

// // example using all the three alert prompt and confirm
// alert("Welcome");
// let name = prompt("ENter your name :")
// let answer = confirm("Is your name" + name + "?");
// if(answer){
//     alert("how are uu mr " + name)
// }
// else{
//     alert("Please refresh and enter your name again")
// }

// //documnet object model example to change text after clicking on button
// function changeText(){
// document.getElementById("heading").innerHTML = "Welcome To javascript guyssssssss";
// }

// let heading = document.getElementById("heading")
// heading.style.color = "purple";
// heading.innerHTML = "Learining Dom"

//Get Element by ID
let element = document.getElementById("new");
console.log(element)
//changing text 
document.getElementById("new").innerHTML ="Welcome to this page";

// get elements by classname
let data =document.getElementsByClassName("para");
console.log(data)

//get element  by tag name
let p = document.getElementsByTagName("p");
console.log(p);

// to chang html content use inner html
document.getElementById("new1").innerHTML = "wecomeeeee too jss"

// changing css in js
let hiii = document.getElementById("new1");
hiii.style.color = "green";
hiii.style.backgroundColor= "yellow";

// reading text in js
let hey = document.getElementById("new1").innerHTML;
console.log(Text);

// js event handling 
function show(){
    alert("Button CLicked")
}

//bom exampple
function showinfo(){
    alert("Browser :" + navigator.userAgent);
    console.log(location.href);
    console.log(screen.width);
}