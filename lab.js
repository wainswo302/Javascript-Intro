let firstName = "Freddy";
let age = 35;
let favoriteColor = "green";
let likesCoding = true;

console.log("Name: " + firstName);
console.log("Age: " + age);
console.log("Favorite Color: " + favoriteColor);
console.log("Likes Coding: " + likesCoding);

//A variable is a container which stores data values. 
// Let is used to declare a variable which can change, while const is used to declare a variable which cannot change.
//The console.log() method is a built-in JavaScript function used to output messages, variables, and data to the web browser's developer console.

let temperature = 25;
if (temperature < 60) {
    console.log("It is warm")
} else if (temperature >= 60) {
    console.log("It is cold.")
}

const password = "password"

if (password === "javascript123") {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

let hour = 10;
if (hour < 12) {
    console.log("Good morning!")}
else if (hour < 18 && hour >= 12) {
    console.log("Good afternoon!")}
else {
    console.log("Good evening!")}

// The if statement is a conditional statement that executes a block of code if a specified condition is true.
// You'd use the else if statement to specify a new condition to test if the first condition is false.
// === compares both value and type for equality, while == compares only value. It is generally recommended to use === to avoid unexpected type coercion.

function sayHello() {
    console.log("Hello, world! Hope all is well!");
}

function favoriteFood(favfood) {
    console.log("My favorite food is " + favfood);
}
function multiply(num1, num2) {
    return num1 * num2;
}
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
//Functions help to organize code, improve readability, and reduce repetition.
//A parameter is a variable that is passed used in a function definition to represent a value that will be passed to the function when it is called. An argument is the actual value that is passed to the function when it is called.
//Console.log() is used to output the result of a function to the console, while return is used to send a value back from a function to the caller. The return statement also exits the function, so any code after it will not be executed.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even.");
    } else {
        console.log(i + " is odd.");
    }
}
let num=5;
while (num>1) {
    console.log(num);
    num--;
}

for (let i = 1; i <= 5; i++) {
  console.log("Practice makes progress");
}
// A loop is used to repeat a block of code multiple times. 
// The for loop is typically used when the number of iterations is known, while the while loop is used when the number of iterations is not known and the loop needs to continue until a certain condition is met.
//If a loop never becomes false, it will result in an infinite loop, which can cause the program to crash or become unresponsive. 

function numberChecker(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

function countdown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}
let studentName = "Alice";
let score = 85;
function studentChecker(score) {
    if (score >= 90) {
        return "Excellent work, " + studentName + "!";
     } else if (score >= 75 && score < 89) {
        return "Good job, " + studentName + "!";
     } else if (score < 75){
        return "Keep practicing, " + studentName + "!";
     }
}
const names = ["Will", "William", "Wilfred", "Willard", "Willow"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
