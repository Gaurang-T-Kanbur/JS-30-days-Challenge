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