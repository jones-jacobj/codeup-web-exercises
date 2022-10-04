// /*
// Define a function named `allIndexesOf` that takes in two arguments. The first
//   argument should be the array to search and the second argument should be the
//   value you want to search for. If the item does not exist in the provided
//   array, return an empty array.
//  */
//
// function allIndexesOf(arr, itm){
//     let foundItems = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === itm){
//           foundItems.push(arr[i]);
//         }
//     }
//     return foundItems;
// }
//
// let fruits = ["apple", "banana", "orange", "apple", "pineapple"]
//
//
//
// function evenNumbers(input){
//     let evens = [];
//     for (let i=0; i<input.length; i++){
//         if(input[i]%2==0){
//             evens.push(input[i]);
//         }
//     }
//     return evens;
// }
//
// let nums = [1,2,3,4,5,6,7,8,9,10];
//
// //console.log(evenNumbers(nums));
//
//
// function addContinent(arr, cont){
//     for(let i=0; i<arr.length; i++){
//         arr[i].continent = cont;
//     }
//     return arr
// }

//console.log(addContinent([{city: 'Tokyo', country: 'Japan'}, {city: 'Bangkok', country: 'Thailand'}], 'Asia'));

// re-write the following using a for loop: var i = 20; while (i >= 0) { console.log(i); i--; }

// for (let i=20; i>=0; i--){
//     console.log(i);
// }

// Add ‘strawberry’ to the beginning, middle, and end of the array. var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];

var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"]

// fruits.unshift('strawberry');
// fruits.push('strawberry');
// fruits.splice(3,0,"strawberry");