const user = {
    usrname: "Alok",
    price: 999,

    WelcomeMessage: function () {
        console.log(`${this.usrname}, Welcome to Website`);
        
    }
}
user.WelcomeMessage()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(4, 5));

// const addtwo = (num1, num2) => num1 + num2
// const addtwo = (num1, num2) => (num1 + num2)
const addtwo = (num1, num2) => ({username: "Alok"})

console.log(addtwo(4, 5));
