// var user={
//     fName:"John",
//     lName:"Doe",
//     age:30,
//     getFullName: function(){ // Define a method to get the full name
//         return user.fName + " " + user.lName; // Concatenate first name and last name
//     },
//     getAgeYear: function(){ // Define a method to get the age in years
//         return new Date().getFullYear() - user.age; // Calculate the year of birth based on the current year and age
// }
// }


//  Factory function to create user objects
function createUser(firstName, lastName, age){
    return {
        fName: firstName,
        lName: lastName,
        age: age,
        getFullName: function(){
            return this.fName + " " + this.lName;
        },
        getAgeYear: function(){
            return new Date().getFullYear() - this.age;
        }
    }
    return user; // Return the created user object
}
const user1=createUser("John", "Doe", 30)
const user2=createUser("Jane", "Smith", 25)