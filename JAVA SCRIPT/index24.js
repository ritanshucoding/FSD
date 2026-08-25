//  With the help of reduce function fnd the maximum value in  given array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = -1;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);


//  Practice Qustions-- Check if all numbers in our array are multiples of 10 or not.
let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let check = num.every((el) => {
    return el % 10 === 0;
});
console.log(check);

// Creat a function to find the min number in  an array.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = array.reduce((acc, el) => {
    if(el < acc){
        return el;
    }
    return acc;
});
console.log(min);