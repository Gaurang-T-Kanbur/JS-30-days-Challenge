// Task_1: Add two numbers
let a = 18;
let b = 27;
console.log(a + b);

// Task_2: Subtract two numbers
console.log(a - b);

// Task_3: Multiply two numbers
console.log(a * b);

// Task_4: Divide two numbers
console.log(a / b);
console.log(typeof(a / b));

// Task_5: Remainder of two numbers
console.log(a % b);

// Task_6: Use of +=
console.log(a += 108);

// Task_7: Use of -=
console.log(b -= 18);

//Task_8: Use of > <
if(a > b){
    console.log("Largest Number: a =",a);
}else{
    console.log("Largest Number: b =",b);
}


//Task_9: Use of >= <=
if(a>=(b+=108)){
    
    console.log("Smallest Number: b =",b);
   
}


//Task_10: Use of == and ===
let max = 18;
let min = '27';

console.log("Max and Min are same: ",((max+=9) == min));

console.log("Max and Min are Equal:",((max+=9) === min));

//Task_11: Use of &&
console.log(1==1&&8==8);
console.log(1==='1'&&8===8);
console.log(1==true && 0==false);

//Task_12: Use of ||
console.log(1==1||8==='8');
console.log(1==='1'||8==='8');
console.log(1==true||8==false);

//Task_13: Use of !
let vote = false;
let age = 18;

if(age >= 18||age!=17){
    console.log("Can vote:",!vote);
}

//Task_14: Use of Ternary Operator

let num = 36;

let result = (num > 0) ? "Number is Positive" : "Number is Negative";

console.log(result);

//Feature Request 1

let num1 = 99;
let num2 = 999;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//Feature Request 2
var comp1 = 72
var comp2 = 36

console.log(comp1>comp2)
console.log(comp2>comp1)
console.log(comp1>=comp2)
console.log(comp2>=comp1)
console.log(comp1>comp2 && comp2>comp1)
console.log(comp1*9>comp2 || comp2+comp2==comp1)

//Feature Request 3
let ternary = 99;

console.log(ternary>0?ternary+" is Positive":ternary+" is Negative");