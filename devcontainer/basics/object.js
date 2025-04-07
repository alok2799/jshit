
const mySym = Symbol("key1")
const jsUser = {
    name: "Alok",
    age: 25,
    location: "Mumbai",
    email: "alokk@gmail.com",
    isLoggedIn: "False",
    [mySym]: "mykey1"
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(typeof[mySym]);
// console.log( jsUser[mySym]);

jsUser.email = "tonystark@outlook.com"

// console.log(jsUser);

const tinderuser = {}

tinderuser.id = "123456789"
tinderuser.name = "Alok"
tinderuser.isLoggedIn = false;

// console.log(tinderuser);

const regularUser = {
    fullname: {
        userfullname: {
            firstName: "Alok",
            LastName: "Kanojiya"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const course = {
    courseName: "Javascript",
    Price: 999,
    Instructor: "youtube"
}

const {Instructor} = course


console.log(Instructor);




