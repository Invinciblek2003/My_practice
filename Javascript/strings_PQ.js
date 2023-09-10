//Explore includes,starts with ,ends with functions
//These methods return true/false as output 
let descr="This is string chapter in js";

//.includes() method

word="This";
if(descr.includes(word)){
    console.log(`${word} is present in given text`)
}
else{
    console.log(`${word} is not present in given text`)
}

//.startsWith() method

console.log(descr.startsWith("This"));
console.log(descr.startsWith("This",3));

//.endsWith() method
console.log("Using endsWith method")
console.log(descr.endsWith("This"));
console.log(descr.endsWith("js"));

//Convert given string to lowercase
console.log("Changing cases of string")
console.log(descr.toLowerCase())
console.log(descr.toUpperCase())

//Extract amount out of string
//"Please give Rs 1000"

const str="Please give Rs 1000";
console.log(str.slice(-4))

//Extract number from string and change its datatype to number
console.log("Changing string to number")
let num=Number.parseInt(str.slice(-4));
console.log(num)
console.log(typeof(num))


