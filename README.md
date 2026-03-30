# Javascript-Intro
Here’s a polished **README.md** you can use for a self-guided JavaScript intro lab.

````markdown
# JavaScript Introduction Lab

## Overview
Welcome to your **JavaScript Introduction Lab**. In this lab, you will teach yourself the foundations of JavaScript by reading short explanations, completing guided practice, and building small pieces of code on your own.

This lab is designed to help you build confidence with:
- variables
- conditionals
- functions
- loops

By the end of this lab, you should be able to read and write simple JavaScript programs using these core concepts.

---

## Learning Objectives
By completing this lab, you will be able to:

- Declare and use variables in JavaScript
- Write conditional statements using `if`, `else if`, and `else`
- Create and call functions
- Use loops to repeat actions
- Combine variables, conditionals, functions, and loops to solve simple problems

---

## Recommended Setup

### Option 1: VS Code + Node.js
1. Open VS Code
2. Create a folder called `javascript-intro-lab`
3. Inside the folder, create a file named `lab.js`
4. Open the terminal in VS Code
5. Run your code with:

```bash
node lab.js
````

### Option 2: Browser Console

You may also complete some parts of this lab in the browser console:

* Open Chrome
* Right-click the page
* Select **Inspect**
* Click the **Console** tab

---

## Before You Start

Make sure you understand this important idea:

JavaScript reads your code from **top to bottom**.
That means the order of your code matters.

---

# Part 1: Variables

## What is a Variable?

A variable is a named container that stores information.

You can think of it like a labeled box:

* the label is the variable name
* the value is what is stored inside the box

### Example

```javascript
let name = "Jordan";
let age = 28;
let isStudent = true;
```

In the examples above:

* `name` stores text
* `age` stores a number
* `isStudent` stores a true/false value

---

## Key Notes

* `let` is used when a variable value can change
* `const` is used when a variable value should not change

### Example

```javascript
let city = "Philadelphia";
city = "Wilmington";

const school = "Code Differently";
```

---

## Practice 1: Create Variables

In your `lab.js` file, create variables for the following:

* your name
* your age
* your favorite color
* whether you like coding

Then print them using `console.log()`.

### Example format

```javascript
let firstName = "YourName";
let age = 25;
let favoriteColor = "Blue";
let likesCoding = true;

console.log(firstName);
console.log(age);
console.log(favoriteColor);
console.log(likesCoding);
```

---

## Check for Understanding

Answer these questions in comments in your code:

1. What is a variable?
2. What is the difference between `let` and `const`?
3. What does `console.log()` do?

---

# Part 2: Conditionals

## What is a Conditional?

A conditional allows your program to make decisions.

JavaScript uses:

* `if`
* `else if`
* `else`

### Example

```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

This means:

* if the condition is true, run the first block
* otherwise, run the second block

---

## Comparison Operators

You will often use these in conditionals:

* `>` greater than
* `<` less than
* `>=` greater than or equal to
* `<=` less than or equal to
* `===` equal to
* `!==` not equal to

### Example

```javascript
let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("Keep practicing.");
}
```

---

## Practice 2: Write Conditionals

### Task A

Create a variable called `temperature`.

Write a conditional that prints:

* `"It is cold."` if the temperature is below 60
* `"It is warm."` if the temperature is 60 or higher

### Task B

Create a variable called `password`.

Write a conditional that prints:

* `"Access granted"` if the password is `"javascript123"`
* `"Access denied"` otherwise

### Task C

Create a variable called `hour`.

Write a conditional that prints:

* `"Good morning"` if the hour is less than 12
* `"Good afternoon"` if the hour is between 12 and 17
* `"Good evening"` otherwise

---

## Check for Understanding

Answer these questions in comments:

1. What is the purpose of an `if` statement?
2. When would you use `else if`?
3. What does `===` check for?

---

# Part 3: Functions

## What is a Function?

A function is a reusable block of code that performs a task.

Instead of writing the same code over and over, you can place it inside a function and call it when needed.

### Example

```javascript
function greet() {
  console.log("Hello, welcome to JavaScript.");
}

greet();
```

---

## Functions with Parameters

A parameter is a value the function receives.

### Example

```javascript
function greetUser(name) {
  console.log("Hello, " + name);
}

greetUser("Taylor");
greetUser("Chris");
```

---

## Functions that Return Values

A function can also return a value.

### Example

```javascript
function addNumbers(num1, num2) {
  return num1 + num2;
}

let result = addNumbers(5, 3);
console.log(result);
```

---

## Practice 3: Build Functions

### Task A

Create a function called `sayHello` that prints a greeting.

### Task B

Create a function called `favoriteFood` that accepts one parameter and prints:

```javascript
"My favorite food is ____."
```

### Task C

Create a function called `multiply` that accepts two numbers and returns the product.

### Task D

Create a function called `isEven` that accepts one number and returns whether the number is even.

---

## Check for Understanding

Answer these questions in comments:

1. Why are functions useful?
2. What is a parameter?
3. What is the difference between `console.log()` and `return`?

---

# Part 4: Loops

## What is a Loop?

A loop repeats code multiple times.

Two common loops:

* `for` loop
* `while` loop

---

## For Loop

A `for` loop is useful when you know how many times you want to repeat something.

### Example

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

This prints:

```javascript
1
2
3
4
5
```

---

## While Loop

A `while` loop continues as long as a condition is true.

### Example

```javascript
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

---

## Practice 4: Use Loops

### Task A

Write a `for` loop that prints numbers 1 through 10.

### Task B

Write a `for` loop that prints only even numbers from 2 to 20.

### Task C

Write a `while` loop that prints numbers 5 down to 1.

### Task D

Write a loop that prints:

```javascript
"Practice makes progress"
```

five times.

---

## Check for Understanding

Answer these questions in comments:

1. What is a loop used for?
2. When might you use a `for` loop?
3. What could happen if a loop condition never becomes false?

---

# Part 5: Combine Everything

Now it is time to put all four concepts together.

## Mini Challenge 1: Number Checker

Create a function that:

* accepts one number
* uses a conditional to check whether it is positive, negative, or zero
* prints the result

---

## Mini Challenge 2: Countdown Function

Create a function that:

* accepts one number
* uses a loop to count down from that number to 1
* prints each number

---

## Mini Challenge 3: Student Progress Checker

Create:

* a variable called `studentName`
* a variable called `score`

Then create a function that checks the score and prints:

* `"Excellent work"` for 90 and above
* `"Good job"` for 75 to 89
* `"Keep practicing"` below 75

---

## Mini Challenge 4: Class Roster

Create an array of 5 names if you already know arrays.
If you do **not** know arrays yet, just create 5 separate variables.

Then:

* write a loop
* print each student name one at a time

> Bonus: If you have not learned arrays yet, skip this one or ask your instructor for support.

---

# Stretch Challenges

Complete these if you finish early.

### Stretch 1

Write a function called `gradeCalculator` that returns:

* `"A"` for 90–100
* `"B"` for 80–89
* `"C"` for 70–79
* `"D"` for 60–69
* `"F"` below 60

### Stretch 2

Write a loop that prints all numbers from 1 to 30 that are divisible by 3.

### Stretch 3

Write a function that accepts a name and a number, then prints that name the number of times given.

### Stretch 4

Write a program that checks if a number is odd or even and then prints the result 10 times using a loop.

---

# Reflection Questions

Answer these in comments at the bottom of your file:

1. Which topic felt easiest for you?
2. Which topic felt most challenging?
3. How do variables, conditionals, functions, and loops work together in a program?
4. What is one question you still have about JavaScript?

---

# Submission Requirements

To complete this lab, make sure your `lab.js` file includes:

* variable practice
* conditional practice
* function practice
* loop practice
* at least 2 mini challenges
* reflection questions in comments

---

# Example File Structure

```bash
javascript-intro-lab/
│
├── README.md
└── lab.js
```

---

# Success Criteria

You are successful in this lab if you can:

* create and use variables
* make decisions with conditionals
* write and call functions
* repeat logic with loops
* explain what your code is doing

---

# Tips

* Read each section slowly
* Run your code often
* Fix one error at a time
* Use `console.log()` to check your thinking
* Do not rush — focus on understanding

---

# Final Reminder

This lab is about practice, not perfection.

Every developer starts with the basics.
Take your time, test your code, and keep going.

Good luck.

```

If you want, I can also turn this into a more polished **GitHub classroom-style README** with sections like **Deliverables, Rubric, Hints, and Submission Instructions**.
```
