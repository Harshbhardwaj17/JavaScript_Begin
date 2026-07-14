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

//example of child , parent , siblings in js dom
let paraa1 = document.getElementById("heading");
console.log(paraa1.parentNode); // it rerurns whole parent nodes 
console.log(paraa1.parentElement); // it returns only one parent node

// to retrieve children in document
let box = document.getElementById("parent");
console.log(box.children);

// to acess an inividual child
console.log(box.children[0]);

//child nodes will return all nodes of childrens including elements comments tags etc
console.log(box.childNodes);

// parent nodes in html 
let prt = document.getElementById("para2");
console.log(prt.parentElement)

// it returns first child of an elements
console.log(parent.firstChild);

let ptr = document.getElementById("parent");
// console.log(parent.firstChild);
// console.log(parent.firstElementChild);
console.log(parent.lastChild);

console.log(parent.childNodes);

//siblings in javascript
let heading = document.getElementById("para1");
console.log(heading.nextSibling);

console.log(heading.nextElementSibling);
function changecolor(){
    document.body.style.backgroundColor = "Cyan";
    document.getElementById("abc").style.color = "red"
}
// to open some other window
window.open("www.google.com");
// to open print window
window.print();
console.log(navigator);
 let b = document.body
 console.log("First child of b is :", b.firstChild)
  console.log("First elementchild of b is :", b.firstElementChild)
  

const changebg = () =>{
    document.body.firstElementChild.style.background = "red"
}

let t1 = document.body.firstElementChild;
console.log(t1)

