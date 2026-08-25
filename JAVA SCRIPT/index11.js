let todo = [];
let req = prompt("please enter your request");
while(true){
if(req == "quit"){
    console.log("Quit app");
    break;

}
if(req == "list"){
    console.log("------------");
    for(task of todo){
        console.log(task);
    }
    console.log("------------");
}else if (req == "new"){
    let task = prompt("Enter your new todo");
    todo.push(task);
    console.log(" task added");

        }
}