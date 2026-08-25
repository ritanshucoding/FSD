let  months = ["janurary" , " july", "march" , "augest"];
console.log(months.splice(0,2 ,"july","june"));


//  NESTED ARRAYS.
let num =[[1,2],[3,4],[5,6]];
console.log(num[1])
console.log(num[0].length)
//  For takkle individual numbers.
console.log(num[2][0])

// Practice Question-- Creat a nested arrays to show the following tic-tac-toe game state.
let games = [['x',null,'0'],[null,'x',null],['0',null,'x']];
console.log(games)
// Apply changes to arrays.
console.log.apply(games[0][1] = '0')