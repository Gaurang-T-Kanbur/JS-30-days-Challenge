//Task 1: Declare Variable using var to a number

var a = 999;
console.log(a);
console.log(typeof(a));

//Task 2: Declare Variable using let to a string
let str = "AAA";
console.log(str);
console.log(typeof(str));

//Task 3: Declare Variable using const to a boolean
const bool = true;
console.log(bool);

//Task 4: typeof
console.log(typeof(bool));

//Task 5: Reassigning let
let init = 9999;
console.log(init);

init = "abc"

console.log("New init:",init);

let score = 99.99;

//Task 6: Reassigning const
// bool = false;
// console.log(bool);

//Feature Request #1
let arr = [{variable: a, type: typeof(a)},
    {variable: str, type: typeof(str)},
    {variable: bool, type: typeof(bool)},
    {variable: init, type: typeof(init)},
    {variable: score, type: typeof(score)}
]
  console.table(arr);  

  //Feature Request #2
  let age = 18;
  console.log("Initial value:",age);
  age += 3;
  console.log("New Value:",age);

  const gender = "M";
  console.log(gender);

  try {
    gender = 'F';
  } catch (error) {
    console.error("Reassigning constant:",gender);
  }
  arr = [{variable: a, type: typeof(a)},
    {variable: str, type: typeof(str)},
    {variable: bool, type: typeof(bool)},
    {variable: init, type: typeof(init)},
    {variable: score, type: typeof(score)},
    {variable: gender, type: typeof(gender)},
    {variable: age, type: typeof(age)}
]
  console.table(arr);  