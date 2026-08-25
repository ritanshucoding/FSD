//  DESTRUCTURING
// Storning value of arrray into multipe variables.
let names = ["John", "Doe", "Smith", "Jane"];
let [winner, loser, ...rest] = names;
console.log(winner);
console.log(loser);
console.log(rest);