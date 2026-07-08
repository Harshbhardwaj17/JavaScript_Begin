//Loops in javascript
//For Loop 

for(i=0; i<10; i++){ //simple for loop
    console.log(i)
}

// to print any word many times
for(i=0; i<=10; i++){
    console.log("How are youuuuuuuuuu")
}

//to print even numbers 
for(i=2; i<=20; i+=2){
    console.log(i)
}

//to find the sum 
let sum =0;
for(let i=0; i<100; i++){
    sum+=i
    
}
console.log(sum)

// to use for loop in an array
const cars = ["BMW","AUDI","MERCEDES","POLO"]
let len = cars.length;
let text = "";
for(i=0; i<len; i++){
    console.log(cars[i])
}
