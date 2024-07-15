//Task_1: Positive or Negative Number
let check_num = 18;
if(check_num > 0){
    console.log("Positive Number:",check_num);
} else if(check_num == 0){
    console.log("Number is 0");
}else{
    console.log("Negative Number:",check_num);
}

//Task_2: Right to vote
let age = 27;
if(age > 0 && age < 18){
    console.log(`You are ${age}. Not eligible to vote`)
}if( age>=18){
    console.log(`You are ${age}.Eligible to vote`)
}

//Task_3: Largest of the numbers
let a = 99;
let b = -99;
let c = 108;

if(a>b && a>c){
    console.log(`Largest Number: ${a}`)
}
 else if(b>a&&b>c){ //else if is necessary
    console.log(`Largest Number: ${b}`)
}
else{
    console.log(`Largest Number: ${c}`)
}

//or
if (a > b) {
    if (a > c) {
        console.log(`Largest Number: ${a}`);
    } else {
        console.log(`Largest Number: ${c}`);
    }
} else {
    if (b > c) {
        console.log(`Largest Number: ${b}`);
    } else {
        console.log(`Largest Number: ${c}`);
    }
}
//Task_4: Days using switch case;
let daynum = 5;
let day

switch(daynum){
    case 1:
        day = "Sunday";
        break;
     case 2:
            day = "Monday";
            break;  
            
    case 3:
            day = "Tuesday";
            break;        

    case 4:
            day = "Wednesday";
            break;        

    case 5:
            day = "Thursday";
            break;

    case 6:
            day = "Friday";
            break; 

    case 7:
            day = "Saturday";
            break;        
default:
    day = "No Day"
}
console.log(`Today is ${day}`)

//Task_5: Grades using switch case;

let marks = 90;
let grade;

switch (true) { //to check range use boolean
    case marks >= 90 :
        grade = 'A & O';
        
        break;

        case marks >= 75 :
            grade = 'B';
            
            break;
        case marks >= 50 :
            grade = 'C';
            
            break;
    case marks >= 35 :
            grade = 'D';
            
            break;
        case marks < 35 :
            grade = 'Unstable';
            
            break;

    default:
        grade = 'O'
        break;
}
console.log(`Your grade is ${grade}`)

//Task_6: Ternary for even or odd

let num = 99;

let result = (num%2==0)?`${num} is even`:`${num} is odd`;
console.log(result)

//Task_7: Ternary for even or odd