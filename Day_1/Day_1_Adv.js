// Activity 1: Variable Declaration
// Task 1
var num = 42;
console.log("var num:", num);

// Task 2
let str = "Hello, world!";
console.log("let str:", str);

// Activity 2: Constant Declaration
// Task 3
const isJavaScriptFun = true;
console.log("const isJavaScriptFun:", isJavaScriptFun);

// Activity 3: Data Types
// Task 4
let aNumber = 100;
let aString = "JavaScript";
let aBoolean = false;
let anObject = {name: "John", age: 30};
let anArray = [1, 2, 3];

console.log("aNumber:", aNumber, "Type:", typeof aNumber);
console.log("aString:", aString, "Type:", typeof aString);
console.log("aBoolean:", aBoolean, "Type:", typeof aBoolean);
console.log("anObject:", anObject, "Type:", typeof anObject);
console.log("anArray:", anArray, "Type:", typeof anArray);

// Activity 4: Reassigning Variables
// Task 5
let changingVar = "Initial Value";
console.log("Initial Value:", changingVar);
changingVar = "New Value";
console.log("New Value:", changingVar);

// Activity 5: Understanding const
// Task 6
const immutableVar = "I cannot be changed";
console.log("immutableVar:", immutableVar);
// Uncommenting the next line will cause an error
// immutableVar = "Attempt to change"; // TypeError: Assignment to constant variable.

// Feature Request: Variable Types Console Log
let variables = {
  aNumber: 123,
  aString: "Test",
  aBoolean: true,
  anObject: { key: "value" },
  anArray: [10, 20, 30]
};

for (let key in variables) {
  console.log(`${key}:`, variables[key], "Type:", typeof variables[key]);
}

// Feature Request: Reassignment Demo
let letVariable = "let can be reassigned";
console.log("Initial letVariable:", letVariable);
letVariable = "let reassigned";
console.log("Reassigned letVariable:", letVariable);

const constVariable = "const cannot be reassigned";
console.log("Initial constVariable:", constVariable);
// Uncommenting the next line will cause an error
// constVariable = "const reassigned"; // TypeError: Assignment to constant variable.
