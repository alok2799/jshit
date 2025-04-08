// function addTwoNumbers(number1, number2) {

//     let result = number1 + number2
//     return result
//     // return number1 + number2 //both works 
// }

// const result = addTwoNumbers(3, 5)

// // console.log("Result:", result);

// function loginuser(username) {
//     if (username === undefined) {
//         // console.log("pllease enter a valid Id password");
        
//     }
//     // return `${username} just logged in`

// }

// // console.log(loginuser("Alok"));
// // console.log(loginuser());


// // function calculateprice(...num1) {
//     // return num1

// }

// // console.log(calculateprice(100, 200, 5000, 300));

const user = {
    product: "Apple Watch",
    price: 2500
}

function handleobject(anyobject) {
    console.log(`Product is Apple Watch ${anyobject.product} and price is ${anyobject.price}`);

}

handleobject(user)