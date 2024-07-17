//Feature Request 1
let num_style = function(num){
    if(num%2==0){
        console.log(`${num} is even`);
        
    }else{
        console.log(`${num} is odd`);   
    }
    }
    num_style(18);

//Feature Request 2
function square(num){
    let ans = num * num;
    return ans;
    }
    console.log(square(9));

//Feature Request 3
const conca = function(a,b){
    return a+b;
}
console.log(conca("abc","bcd"));

//Feature Request 4
const sumTwo = (a,b) => a + b;
console.log(sumTwo(15,12));

//Feature Request 5
function sayHello(func, num){//Higher Order Function
    for (let i = 0; i < num; i++) {
       func(i);
        
    }
}
function Hello(i){
    console.log ("Hello "+ i);
}
sayHello(Hello, 5);//Here reference is passed and it is executed '()' in the higher order function above