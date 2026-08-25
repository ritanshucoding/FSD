// MAP & FILTERS

//  MAPS
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let double = num.map((el) => {
    return el *el;
});

//  FILTERS
//  let newArr = arr.filter(some function definition or name);
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = nums.filter((el) => {
    return el % 2 === 0;
});

//  EVERY---
//  Return true if every element of array give true for some function. Else return false.
//  arr.every(some function definition or name);


//  REDUCE ---
//  Reduce the array to a single value.
//  arr.reduce(reducer function with 2 varibale for (accumulator , element);
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let finalVal = nums.reduce((acc, el) => acc + el);
console.log(finalVal);


