//Loops in javascript
//For Loop 

// for(i=4; i<10; i++){ //simple for loop
//     console.log(i)
// }

// to print any word many times
// for(i=0; i<=10; i++){
//     console.log("How are youuuuuuuuuu")
// }

// //to print even numbers 
// for(i=2; i<=20; i+=2){
//     console.log(i)
// }

// //to find the sum 
// let sum =0;
// for(let i=0; i<100; i++){
//     sum+=i
    
// }
// console.log(sum)

// // to use for loop in an array
// const cars = ["BMW","AUDI","MERCEDES","POLO"]
// let len = cars.length;
// let text = "";
// for(i=0; i<len; i++){
//     console.log(cars[i])
// }

//while loop
//a simple while loop
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

let x =10;
while(x<30){
    console.log(x+=1)
    x++;
}

// to print any word many times
let y =0;
while(y<10){
    console.log("HEYYYYYYYYYYY")
    y++;
}

//to print sum in while loop

let z =1;
let sum = 0;
while(z<=10){
    sum+=z;
    z++;
}
console.log(sum)

// do while loop
let m =2
do{
    console.log(m)
    m++;
}
while(m<10)

//print even nukbers in do while loop
let a = 2;
do{
    console.log(a);
    a+=2;
}
while(a<=10)

// use of break in loops
for(c=0; c<=8;c++){
    if(c===5){
        break;
    }
    console.log(c)
}

//continue in loops
for(h=0;h<=10; h++){
    if(h==6){
        continue;
    }
    console.log(h)
}

