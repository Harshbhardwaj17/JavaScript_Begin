console.log("Strings in Javascript")
//Strings in JS
let pers1 = "Harsh Bhardwaj"
let pers2= "Vinay Sharma"
let pers3 = "Goldi Sharma"
console.log(pers1)
console.log(pers2)
console.log(pers3)

// strings with quotes
let ans = "It's raining today"
console.log(ans)

//length of string
let len = pers1.length;
console.log(len)

//escape chracter sequence
let text = "Where are \"you\" going ?" //double quotes
console.log(text)

let text2 = 'Where are\' you Mr. Mehta ?' //single  quotes
console.log(text2)

let text3 = "This example \\ is for backslash"
console.log(text3)


// template strings allows single and double quotes using backtics
let tmpstr = `This is 'example of template "string`
console.log(tmpstr)

//using symbol in string
let symstr = 'This is an ex$$ample of }using symbol{'
console.log(symstr)

//Various Strings Methods
let strmethod = "This is an example"
console.log(strmethod.charAt(5)) //char at position
console.log(strmethod.charCodeAt(2))
console.log(strmethod.codePointAt(1))
