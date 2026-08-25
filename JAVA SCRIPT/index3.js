//  Ques- Creat a traffic light system that show what to do based on color.

//  ON IF CONCEPT.

let a = "green";
if(a =="red"){
    console.log("Stop");
}if(
    a=="yellow"
){
    console.log("Slow down")

}if ( a=="green"){
    console.log("Go")
}

//  ON IF_

// let color = "Red";
// if(color == "Red"){
//     console.log("stop")
// }else if(color == "Yellow"){
//     console.log("Slow down")
// } else if(color === "Green"){
//     console.log("Go")
// }else{
//     console.log("Trafic Light is Broken");
// }

//  Ques- Creat a system to calculate popcorn prices on the size customer asked for :

let size = "A";
if(size == "XL"){
    console.log("Price of popcorn is rs.250")
} else if(size == "L"){
    console.log("Price of popcorn is rs.200")
}else if(size == "M"){
    console.log("Price of popcorn is rs.100")
}else if(size == "S"){
    console.log("Price of popcorn is rs.50")
}
else{
    console.log("Size is not Available.")
}

// Ques- A "Good String " is a string that start with the letter 'a' & has a length >3. 
// Write a program to find if a string is good or not.

let str = "apple";
if(str[0]=="a" && str.length > 3){
    console.log("Good String");
}else{
    console.log("not a good String");
}

//  Ques- Predict the output of following code:
let num = 12;
if((num%3 ===0 )&&((num+1 ==15) || (num-1 == 11))){
    console.log("safe");
}else{
    console.log("unsafe");
}


// SWITCH CASE.

let color = "red";
switch(color){
    case "red":
    console.log("Stop");
    break;
    case "Yellow":
    console.log("Slow Down");
    break;
    case "Green":
    console.log("Go");
    break;
    default:
    console.log("Trafic Light is Broken");    
}

//  Use switch statement to print the day of the week using a number a variable "day " with value 1 to 7.

let Day = 3;
switch(Day){
    case 1:
    console.log("Monday");
    break;
    case 2:
        console.log("Tuesday");
        break;
        case 3:
            console.log("Wesnesday");
            break;
            case 4:
                console.log("Thrusday");
                break;
                case 5:
                    console.log("Friday");
                    break;
                    case 6:
                        console.log("Saturday");
                        break;
                        case 7:
                            console.log("Sunday");
                            break;
                            default:
                            console.log("Invalid Day");
}
 let fristName = prompt("entre frist name");
 let secondName = prompt("entre second name");
 console.log(fristName + " " + secondName);