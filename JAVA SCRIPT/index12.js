//   JS OBEJCTS LATERALS-- used to store keyed collection & complex entities.
//  Property => (key,value)pairs
//  Object are collection of properties.

let student = {
    name: "Ritanshu",
    age: 21,
    marks: 90,
};

const item = {
    price: 100,
    discount: 50,
    colors: ["red", "blue", "green"], // OBJECT KE ANDAR MULTIPLE VALUE RAKH SKTE HAI. LIKE (ARRAYS)
}

// THREAD/TWITTER POST 
// Creat an object literal for the properties of thread / twittter post which includes-
const post = {
    username: "Ritanshu",
    content: "This is my first post",
    likes: 150,
    repost: 20,
    tags: ["#webdev", "#javascript", "#react"],

}

// TO GET VALUE FROM OBJECT--
// POST["NAME OF KEY"] => VALUE
// POST.NAME OF KEY => VALUE

//  FOR DELETE PROPERTY FROM OBJECT---
// DELETE POST["NAME OF KEY"]
// DELETE POST.NAME OF KEY