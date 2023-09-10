let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
  }
  // Problem No 1
  //write a program to print the marks of a student in an object using for loop
  for (let i = 0; i < Object.keys(marks).length; i++) {
      console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  }

  // Problem No 2
  //Write the same program using for_in loop
 for (let key in marks) {
    console.log("The marks of " + key + " are " + marks[key])
  }

//Problem 3
/*write a program to print try again untill user enters correct input*/
const prompt = require("prompt-sync")();//used to run prompt method
let cn = 43
let i
while (i != cn) {
  console.log("Try again")
  i = prompt("Enter a number")
}
console.log("You have entered a correct number")

//problem 4
//write a function to print mean of 5 numbers
  var mn;
  const mean=(a,b,c,d,e)=>{
     mn=(a+b+c+d+e)/5;
     return mn;
  }

  i=mean(12,16,17,18,19);
  console.log(i);