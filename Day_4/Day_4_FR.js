//Feature Request 1
let n = 10;
for(let i=1;i<=n;i++){
    console.log(i);
}

//Feature Request 2
let mul = "";
for(let i=0;i<=n;i++){
    mul += (5 * i) + " ";
}
console.log(mul);

//Feature Request 3
for(let i=1;i<=5;i++){
    let pattern = ''
    for(let j=1;j<=i;j++){
        pattern+='* ';

    }
    console.log(pattern);  //check the number of rows and set outer limit to it and then check number of col per row 
    //then check elements to input
}
//Feature Request 4
let i = 1;
let sum = 0;
while(i<=n){
    sum += i;
    i++;
}
console.log("Sum of 1 to 10 is:",sum);

//Feature Request 5
let nm = 1;
let fac = 1;
do{
fac *= nm;
nm++;
}while(nm <= 5);
console.log("Factorial is:",fac);

