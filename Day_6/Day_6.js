//Task_1: Create array from 1 to 5;
let arr = [1,2,3,4,5];
console.log(arr);

//Task_2: First and last value of array
console.log(arr[0],arr[arr.length-1]);

//Task_3: Push in array
arr.push(12);
console.log(arr);
//Task_4: Pop from array
arr.pop();
console.log(arr);
console.log(arr.pop());
//Task_5: Shift operation on array
arr.shift();
console.log(arr);

//Task_6: Unshift Operation on array
arr.unshift(9,9);
console.log(arr.unshift(9,9));//returns the size of array
console.log(arr);

//Task_7: Map
let arr_map = [1,2,3,4,5,6,7,8,9,10];

let map_arr = arr_map.map((num)=>num*10);
console.log(map_arr);

//Task_8: Filter
let filter_arr = map_arr.filter((num)=>num%3==0);
console.log(filter_arr);

//Task_9: Reduce
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
let reduce_arr = filter_arr.reduce((acc,num)=>(acc + num),0);
console.log(reduce_arr);

//Task_10: For loop in array

let num = "";
for (let i = 0; i < map_arr.length; i++) {
    num += map_arr[i] + " ";
    
}
console.log(num);

for(let num of filter_arr){
    console.log(num);
}
//Task_11: ForEach
let NewNums = ""
arr_map.forEach((nums)=>nums>=5?NewNums+=nums + " ":"")
console.log(NewNums);

//Task_12: Matrix
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix);
//Task_13: Specific Element
console.log(matrix[0][2]+matrix[0][0]);
console.log(matrix[1][1]);
console.log(matrix[2][2]);