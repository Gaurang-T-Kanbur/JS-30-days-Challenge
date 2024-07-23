//Task_1:Template literals string
let name = "ABC";
let age = 18;

console.log(`My name is ${name}, I am ${age} years old.`);

//Task_2: Multi Line Strings
let multi = `My name is ${name}, I am ${age} years old.
I am pursuing Bachelor's of Engineering
`
console.log(multi);

//Task_3: Array Destructuring
let arr = [9,18,27,36,45,54,63,72,81,90];
let [first, second] = arr;
console.log(first);
console.log(second);

//Task_4: Object Destructuring
let obj = {
    title:"Pralay:The Great Deluge",
    author:"Vineet Bajpai",
    year:2020
}

let {title, author} = obj;
console.log(title);
console.log(author);

//Task_5:Spread Operator
let arr1 = [9,18,27];
let arr2 = [arr1,45,54,81];
let arr3 = [...arr1,45,54,81];
console.log(arr2);
console.log(arr3);