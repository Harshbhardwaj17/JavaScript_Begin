let table = document.getElementById("abc");

console.log(table);
console.log(table.rows); /// to access rows of tables   
console.log(table.rows[0]); // to acess first row
console.log(table.rows[1]); // to acess second row
console.log(table.rows.length); // size of an rows
console.log(table.caption); // caption of the data
console.log(table.tHead); // thead of the table
console.log(table.tBodies);// body of the table

let rows = table.rows;
console.log(rows[0])

// loop through all the rows
for(let i =0; i<rows.length; i++){
    console.log(rows[i])
}

// to change the color of the row
table.rows[2].style.backgroundColor = "yellow";
table.rows[2].style.fontSize = "20px";

// to add a new row
let row = table.insertRow();

let cell1 = row.insertCell();
let cell2 = row.insertCell();
let cell3 = row.insertCell();
           
cell1.innerHTML="Aman";
cell2.innerHTML="23";
cell3.innerHTML="BCA";

// searching in dom
// get element by class name
let title1 = document.getElementsByClassName("card-title");
title1[0].style.color = "red";

// get element by id name
let news = document.getElementById("news");
news.style.backgroundColor = "yellow"
news.style.marginTop = "20px"
window.open("index2.html");

// query selector in js
let ctitle = document.querySelectorAll(".card-text")
console.log(ctitle);
ctitle[0].style.backgroundColor = "yellow"
ctitle[1].style.backgroundColor = "cyan"
ctitle[2].style.backgroundColor = "pink"

// query selector one element
document.querySelector(".this").style.backgroundColor = "purple"

document.querySelector(".this1").style.backgroundColor = "pink"

//to find a tag in whole document
console.log(document.getElementsByTagName("a"));

// to find a tag in specific part
console.log(document.querySelector(".new1").getElementsByTagName("a"));

// matches in js'
id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.matches(".class"));
console.log(id1.matches(".box"))

// inner and outer html
let box2 = document.getElementById("box2");
console.log(box2.innerHTML); // ot returns only inner elements

// changiing inner html content
box2.innerHTML = "<h1>Welcome guysss</h1>"
console.log(box2.innerHTML)

// adding multiple elements
box2.innerHTML = `
<h1>JavaScript</h1>
<p>DOM Tutorial</p>
<button>Click Me</button>
`;
console.log(box2.innerHTML)

// reading text 
// let read3 = document.getElementById("box5");
// console.log(read3.innerHTML)

//reading text
let title = document.getElementById("title");
console.log(title.innerHTML);

//outer element
let box = document.getElementById("box2")
console.log(box.outerHTML); // it prints whole including div not only inner html

//chaging outerhtml
let one = document.getElementById("one");
one.outerHTML = '<h3>How are uuu</h3>'

// cmplete example of inner and outer js 
// let box = document.getElementById("box");

// Read only inside HTML
console.log(box.innerHTML);

// Read entire element
console.log(box.outerHTML);

// Change inside content
box.innerHTML = "<h1>Welcome</h1>";

// Replace whole element
box.outerHTML = "<section>New Content</section>";

//html attributes in js
//get attribute
let img = document.getElementById("image");
console.log(img.getAttribute("src"));
console.log(img.getAttribute("alt"));

//set attribute
img.setAttribute("src","data:image/jpeg;base64,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")
img.setAttribute("title", "Cute Dog");

//remove anattribute
img.removeAttribute("alt");
// img.removeAttribute("src");

//hasattribute in js
console.log(img.hasAttribute("src"));
console.log(img.hasAttribute("alt"));
let id4 = document.getElementById("txt")
console.log(id4.hasAttribute("type"));
console.log(id4.hasAttribute("img"));

//get attribute name
console.log(img.getAttributeNames());
console.log(id4.getAttributeNames());

console.log(img.attributes);

//direct property access
console.log(img.src);


//html insertion methods
//inner html
let inter = document.getElementById("inter");
inter.innerHTML = "<h1>Welcomes You</h1>"
//outer html
// inter.outerHTML = "<section>How are uuu  </section>";

//append method
let p = document.createElement("h1");
p.innerHTML = "Paragraph";
inter.append(p);

//prepend
let q = document.createElement("h2");
q.innerHTML = "Paragraph 2";
inter.prepend(p)

//isertadjacentelement
interr.insertAdjacentHTML("beforebegin","<h1>Hello</h1>");

interr.insertAdjacentHTML("afterbegin","<p>First</p>");

interr.insertAdjacentHTML("beforeend", "<p>Last</p>");

interr.insertAdjacentHTML("afterend","<h2>End</h2>");

// html class in js
let h=document.getElementById("heading");

console.log(h.className);

// to change name of the class
h.className = "blue"
console.log(h.className);

// add multiple classes
// h.className = "blue big small"
// console.log(h.className);

// new method to use classlist method
// to add a class
h.classList.add("big", "small");
console.log(h.className);

// to remove class list 
h.classList.remove("small");
console.log(h.className);

// toggle list 
h.classList.toggle("purple")
console.log(h.className);
h.classList.toggle("purple")
console.log(h.className);

// to check if a class contains
console.log(h.classList.contains("red"))
console.log(h.classList.contains("big"))

// to replace a class
h.classList.replace("big","small");
console.log(h.className);
    //number of classes         
console.log(h.classList.length);

//loop through classes
for(let cls of h.classList){
    console.log(cls)
}

// // quixk revision of classlist 
// let element = document.getElementById("heading");

// // Get all classes
// console.log(element.className);

// // Add a class
// element.classList.add("active");

// // Remove a class
// element.classList.remove("active");

// // Toggle a class
// element.classList.toggle("dark");

// // Check if a class exists
// element.classList.contains("active");

// // Replace a class
// element.classList.replace("red", "blue");

// // Number of classes
// console.log(element.classList.length);
