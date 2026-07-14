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
let box = document.getElementById("box");

// Read only inside HTML
console.log(box.innerHTML);

// Read entire element
console.log(box.outerHTML);

// Change inside content
box.innerHTML = "<h1>Welcome</h1>";

// Replace whole element
box.outerHTML = "<section>New Content</section>";
