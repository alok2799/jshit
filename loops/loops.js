// // for (let i = 0; i <= 10; i++) {
// //     const element = i;
// //     // console.log(element);
// // }

// // for (let i = 0; i <= 10; i++) {
// //     const element = i;
// //     if (element == 5) {
// //         // console.log("5 is best num");
        
// //     }
// //     // console.log(element);
// // }


// // for (let i = 1; i <= 5 ; i++) {
// //     console.log(`outer loop value: ${i}`);
// //     for (let j = 1; j <= 5; j++) {
// //         // console.log(`inner loop value: ${j} and inner loop ${i}`);
// //         // console.log(i + "*" + j + "=" + i*j);  
// //     }  
// // }

// // let myarray = ["iron", "tonystark", "spiderman", "batman"]
// // for (let index = 0; index < myarray.length; index++) {
// //     const element = myarray[index];
// //     // console.log(element);
    
    
// // }
// ///////////////////////////////////////////////
// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log(`Detected 5`);
// //         break
// //     }  
// //     console.log(`value of i is ${index}`);  
// // }

// ////////////////////////////////////////////////
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }  
//     // console.log(`value of i is ${index}`);  
// }

////////////  map   //////////////

const map = new Map()
map.set('In', "India")
map.set('usa', "united states of america")
map.set('fr', "France")
map.set('In', "India")

// console.log(map);

// for (const location of map) {
//     console.log(location);

    for (const [location, value] of map) {
        console.log(location, ':-', value);

    }
    
    
    
    
// }



