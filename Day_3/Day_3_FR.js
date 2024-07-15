//Feature Request 1

let number = 999;

if (number > 0) {
    console.log(`${number} is positive`);
} else if (number < 0) {
    console.log(`${number} is negative`);
} else {
    console.log(`${number} is zero`);
}

//Feature Request 2
let age = 9;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}

//Feature Request 3
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`Today is ${dayName}`);

//Feature Request 4
let marks = 90;
let grade;

switch (true) {
    case marks >= 90:
        grade = 'A';
        break;
    case marks >= 75:
        grade = 'B';
        break;
    case marks >= 50:
        grade = 'C';
        break;
    case marks >= 35:
        grade = 'D';
        break;
    case marks < 35:
        grade = 'Unstable';
        break;
    default:
        grade = 'O';
        break;
}

console.log(`Your grade is ${grade}`);

//Feature Request 5
let year = 1900;
let isLeapYear;

switch (true) {
    case (year % 400 === 0):
        isLeapYear = true;
        break;
    case (year % 100 === 0):
        isLeapYear = false;
        break;
    case (year % 4 === 0):
        isLeapYear = true;
        break;
    default:
        isLeapYear = false;
        break;
}

if (isLeapYear) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}

