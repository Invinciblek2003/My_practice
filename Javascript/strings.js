//String Declaration
const my= "Abhijit";
console.log(my);

//String Methods

//length 
//syntax:string_name.length
var length=my.length;
console.log(length);

//slice
//syntax: slice(start_position,end_position)
//returns new string

let new1=my.slice(2,5);
console.log(new1)

//replace
//syntax :replaces certain part of string

let new2=my.replace("jit","shek");
console.log(new2);

//string concat 
//syntax:text1.concat(text2)

console.log(my.concat(" " ,new2))

//string trim
//used to remove spaces in string
//syntax:string_name.trim()

let comt="    my string has spaces   ";
console.log(comt.trim())
