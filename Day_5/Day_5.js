//Task_!: Functions to check even or odd
let num_style = function(num){
if(num%2==0){
    console.log(`${num} is even`);
    
}else{
    console.log(`${num} is odd`);   
}
}
num_style(18);

//Task_2: square of a number
function square(num){
let ans = num * num;
return ans;
}
console.log(square(9));

//Task_3: FUnction expression to find max
const find_max = function(a,b){
    let result = a > b?a:b;
    return result;
}
console.log(find_max(99,999));

//Task_4: Concactenate two strings
const conca = function(a,b){
    return a+b;
}
console.log(conca("abc","bcd"));

//Task_5: Arrow function tocalculate sum
const sumTwo = (a,b) => a + b;
console.log(sumTwo(15,12));

//Task_6: String contains character or not

const charString = (str, char)=>{
    if(str.includes(char)){
        return true;
    } else{
        return false;
    }

}
console.log(charString("Hello World", 'o'));

//Task_7: Multiply with a default value
function multiply(a, b=1){
    return a*b;
}
console.log(multiply(9,9));

//Task_8: Greeting Message
function greeting(name, age = 18){
    let message = `Hi, ${name}! Congratulations, You're ${age} years old`;
    return message;

}
console.log(greeting("GTK"));

//Task_9:Higher Order Function, Function that has function as its arguments and is passed as parameter to that function

function sayHello(func, num){//Higher Order Function
    for (let i = 0; i < num; i++) {
       func(i);
        
    }
}
function Hello(i){
    console.log ("Hello "+ i);
}
sayHello(Hello, 5);//Here reference is passed and it is executed '()' in the higher order function above