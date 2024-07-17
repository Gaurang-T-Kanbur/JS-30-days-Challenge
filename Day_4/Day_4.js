//Task_1: Loop to print from 1 to 10

let n = 10;
for(let i=1;i<=n;i++){
    console.log(i);
}

//Task_2: Table of 5
for(let i=0;i<=n;i++){
    console.log(5 * i);
}

//Task_3: While loop, sum of 1 to 10
let i = 1;
let sum = 0;
while(i<=n){
    sum += i;
    i++;
}
console.log("Sum of 1 to 10 is:",sum);

//Task_4: While loop, 10 to 1
while(n>0){
    console.log(n);
    n--;
}

//Task_5: do While loop, 1 to 5
let m = 1;
do{
console.log("do:",m);
m++;
} while(m<=5);

//Task_6: factorial
let nm = 1;
let fac = 1;
do{
fac *= nm;
nm++;
}while(nm <= 5);
console.log("Factorial is:",fac);

//Task_7: pattern

for(let i=1;i<=5;i++){
    let pattern = ''
    for(let j=1;j<=i;j++){
        pattern+='* ';

    }
    console.log(pattern);  //check the number of rows and set outer limit to it and then check number of col per row 
    //then check elements to input
}

//Task_8: continue
let cont = ""
for(let i=1;i<=10;i++){
   
    if(i==5){
        continue;
    }
    cont+=i+" ";
}
console.log(cont);

//Task_9: break

let brr = ""
for(let i=1;i<=10;i++){
   
    if(i==7){
        break;
    }
    brr+=i+" ";
}
console.log(brr);
