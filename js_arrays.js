console.log("Arrays in JS")
//example of an Array
const cars = ["Toyota", "Ford", "Suzuki", "Hyundai","Tata"]
console.log(cars)

//to access an element of array
console.log("to access an element of array")
let car1 = cars[0];
console.log(car1) // method to print array elements
console.log(cars[0])
// to change the elements of an array
console.log("to change the elements of an array")
cars[1] = "Kia"
cars[2] = "Morris"
console.log(cars)
// to change the array into strings
console.log(cars.toString())
// to find the length of an array
console.log(cars.length)

// to access the last element of the array
let last = cars[cars.length-1];
console.log(last)
console.log(cars[cars.length-1])

// to add or push some elements 
cars.push("Renault", "Maruti")
console.log(cars)

cars.shift();

// to check whether it is an array or not
Array.isArray(cars);



// we can also create an empty 
const person = [];
person[0] = "AMAN"
person[1] = "VINAY"
person[2] = "Goldy"
person[3] = "Harsh"
console.log(person)

// ARRAY CONCATENATION 
console.log(" ARRAY CONCATENATION ")

const totalarray = cars.concat(person);
console.log(totalarray)
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
console.log(position)   
fruits.includes("Apple");


//sorting an array
fruits.sort();
console.log(fruits.sort());

// reversing an array
console.log(fruits.reverse());

// for loop in an array 
for(i=0; i<person.length; i++){
    console.log(person[i])
}


// a new array
let vegetables = ["Carrot", "Tomato", "Potato", "Reddish"]
// for of loop in an array
for(let vegetable of vegetables){
    console.log(vegetable);
}

//for in loop
for(let abc in vegetables){
    console.log(vegetables[abc])
    
}

// while loop in array
let a = 0;
while(a<fruits.length){
    console.log(fruits[a])
    a++;
}

// do while loop
let b = 0;
do{
    console.log(cars[b])
    b++;
}
while(b<cars.length);