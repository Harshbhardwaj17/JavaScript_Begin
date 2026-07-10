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


// to concatenate two strings
let text1 = "Hello"
let text4 = "World"
let text6 = text1.concat(text4)
let text5 = text1+text4
console.log(text6)
console.log(text5)

// text slicing 
let txt = "Apple, kiwi, Banana"
console.log(txt.slice(1,6))
let part = txt.slice(5,10)
console.log(part)

// to convert strings to uppercase and lowercase
let normstr = "Harsh Bhardwaj"
let toup = normstr.toUpperCase();
console.log(toup)
console.log(normstr.toUpperCase())

console.log(normstr.toLowerCase())

// to repeat text
console.log(normstr.repeat(20))

// to replace text 
console.log(normstr.replace("Bhardwaj","Sharma"))

// index of strings
let instr = "HEYYYY HOW AND WHERE ARE YOU"
console.log(instr.indexOf("AND"))
console.log(instr.search("ARE"))
console.log(instr.startsWith("HEYYYY"))
console.log(instr.endsWith("djdknd"))
