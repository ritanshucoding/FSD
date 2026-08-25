// h1 = document.querySelector("h1");
// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
//     h1.style.color = "blue";
// }, 2000);
// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);
// setTimeout(() => {
//     h1.style.color = "yellow";
// }, 4000);

h1 = document.querySelector("h1");

// function changecolor(color , delay ,nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange)nextColorChange();
//     }, delay);
// }
// changecolor("red",1000,() => {
//     changecolor("blue",2000,() => {
//         changecolor("green",3000,() => {
//             changecolor("yellow",4000);
//         });
//     });
// });

//  CALLBACK NESTING -> callback hell

function changecolor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}
changecolor("red", 1000)
    .then(() => {
        console.log("color changed to blue");
        return changecolor("blue", 2000);
    })
    .then(() => {
        console.log("color changed to green");
        return changecolor("green", 3000);
    })
    .then(() => {
        console.log("color changed to yellow");
        return changecolor("yellow", 4000);
    })
    .then(() => {
        console.log("color changed to orange");
        return changecolor("orange", 5000);
    })
    .catch(() => {
        console.log("error");
    });