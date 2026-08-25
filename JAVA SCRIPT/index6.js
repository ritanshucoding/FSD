//  ARRAYS (DATA STRUCTURES)
//  Linear collection of things.

//  let student1 = "aman";
//  let student2 = "shradha";
//  let student3 = "rajat";

let students = ["aman", "shradha", "rajat"];
console.log(students);
let num = [1,2,3,4,5];
console.log(num)
//  For operate individual numbers .
console.log(num[2])


//  Creat a mixed arrays.
let info = ["Ritanshu" , 23 ,89.9];
console.log(info)

// ARRAY ARE MUTABLE.
let fruit = ["apple", "mango", "banana"];
fruit[0] = "kiwi";
console.log(fruit)

// ARRAY METHODS


//  push:add to end
// pop:remove from end
// shift:remove from start
// unshift:add to start
// slice:copy portion of an array.
// splice:remove/replace
// concat:combine arrays
// includes:look for value
// indexOf:just like string indexOf 
// join:combine elements
// reverse:reverse order
// sort:sort elements
// toString:convert to string
// isArray:check if array
// fill:fill all elements
// filter:filter elements
// map:transform elements

let car = ["audi" , "bmw" , "xuv" , "maruti"];
// unshift:add to start
car.unshift("Lambo");
console.log(car)

car.push("Lambo");
console.log(car)

car.shift("lambo");
console.log(car)

car.pop("Lambo");
console.log(car)

// indexOf:just like string indexOf
let cars = ["audi" , "bmw" , "xuv" , "maruti"];
console.log(car.indexOf("lambo"))
//  includes:look for value(boolean type--True or False)
console.log(car.includes("bmw"))
console.log(car.includes("toyato"))


//  Practice Ques-- For the given start state of an array , change it to final orm using methods.
let month = ['janurary' ,'july','march' ,'augest'];
// ANSWER-- ['july' , 'june' , 'march' , 'augest']
month.shift();
month.shift();
month.unshift('june');
month.unshift('july');
console.log(month)

let primary = ['red' , 'blue' , 'green'];
let secondary = ['yellow' , 'purple' , 'orange'];
// concat:combine arrays
primary.concat(secondary);
console.log(primary.concat(secondary))

let fruits = ['apple','banana','mango'];
console.log(fruits.reverse())
// slice:copy portion of an array.
console.log(fruits.slice(1))
console.log(fruits.splice(1,0,"Orange"))

let alpha =  ['boy' ,'car', 'dog','mango','apple'];
// sort:sort elements (ARRANGE IN ASCENDING OR DECENDING ORDER )
console.log(alpha.sort())