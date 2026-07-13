console.log("Sets In JavaScript")
// create a set
const letters = new Set();

//add values to set 
letters.add("A")
letters.add("B")
letters.add("C")
letters.add("D")

console.log(letters)
console.log(typeof letters);
// size of an set 
console.log(letters.size)

//has method 
tocheck = letters.has("D")
console.log(tocheck)

//foreach method
let text = "";
letters.forEach(function(value){
text+=value;})
console.log(text)

//operaions on set
const A = new Set (["X","Y","Z","D"]);
const B = new Set (["T","G","Z","D"]);
const uni = A.union(B);
console.log(uni)

const inter = A.intersection(B);
console.log(inter)

const diff = A.difference(B);
console.log(diff);

const symdiff = A.symmetricDifference(B);
console.log(symdiff)

const issubset = A.isSubsetOf(B);
console.log(issubset);

//Maps IN JS
console.log("Maps in JS")
const fruits = new Map();
//Set map Values
fruits.set("Apples",500)
fruits.set("Banana",200)
fruits.set("Mango",300)

console.log(fruits

)
// to pass with an new Array
const vegetables = new Map([
    ["Carrot", 50],
    ["Reddish",20],
    ["Cauliflower",90]

])
// adding valuer to map
vegetables.set("Potato",50);

console.log(vegetables)
// get method in sets
let val =vegetables.get("Potato");
console.log(val)

//size of an map
console.log(fruits.size);

//to delete an object from map
vegetables.delete("Potato");
console.log(vegetables)

// to remove all the elements from map
// vegetables.clear();
// console.log(vegetables)

//to check if a value exists or not
// let tocheck = fruits.has("Apples")
// console.log(tocheck)

// to print all the keys usinfg for of loop
let text1 = "";
for(const x of vegetables.keys()){
    text1+=x;
}
console.log(text1)

// to print values in map using loop
let text2 ="";
for(const x of vegetables.values()){
    text2+=x;

}
console.log(text2)

//also using this
for(let x of vegetables.values()){
    console.log(x)
}


