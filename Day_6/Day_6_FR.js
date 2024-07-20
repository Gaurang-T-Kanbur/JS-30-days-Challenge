let arr = [1,2,3,4,5];
console.log(arr);

//Feature Request 1
arr.push(12);
console.log(arr);

arr.pop();
console.log(arr);
console.log(arr.pop());

arr.shift();
console.log(arr);

arr.unshift(9,9);
console.log(arr.unshift(9,9));//returns the size of array
console.log(arr);

//Feature Request 2
let arr_map = [1,2,3,4,5,6,7,8,9,10];

let map_arr = arr_map.map((num)=>num*10);
console.log(map_arr);


let filter_arr = map_arr.filter((num)=>num%3==0);
console.log(filter_arr);

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
let reduce_arr = filter_arr.reduce((acc,num)=>(acc + num),0);
console.log(reduce_arr);

//Feature Request 3
let num = "";
for (let i = 0; i < map_arr.length; i++) {
    num += map_arr[i] + " ";
    
}
console.log(num);

for(let num of filter_arr){
    console.log(num);
}
let NewNums = ""
arr_map.forEach((nums)=>nums>=5?NewNums+=nums + " ":"")
console.log(NewNums);

//Feature Request 4
const sumTwo = (a,b) => a + b;
console.log(sumTwo(15,12));

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix);

console.log(matrix[0][2]+matrix[0][0]);
console.log(matrix[1][1]);
console.log(matrix[2][2]);