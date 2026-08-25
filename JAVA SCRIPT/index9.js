//  NESTED LOOPS.

for(let i = 1; i<=3;i++){
    for (let j=1; j<=3;j++){
        console.log(j)
    }
}

// WHILE LOOPS.
let i =1;
while(i<=5){
    console.log(i);
    i++;

}
// REVERSED LOOPS
let j =5;
while(j>=1){
    console.log(j);
    j--;
}

//  GUESS YOUR FAVOURITE MOVIES.
const fav = "Avatar";
let guess = prompt("Enter your favourite movie");
while((guess !== fav) && (guess !== "exit")){
    guess = prompt("Enter your favourite movie");
}
console.log("You got it right");

// BREAK KEY WORD.