// Define a function named `allIndexesOf` that takes in two arguments. The first
// argument should be the array to search and the second argument should be the
// value you want to search for. If the item does not exist in the provided
// array, return an empty array.

function allIndexesOf(arr, val){
    let allIndexsOfArray=[];
    for (let i=0; i<arr.length;i++){
        if(arr[i] === val){
            allIndexsOfArray.push(i);
        }
    }
    return allIndexsOfArray;
}

let fruits = ["apple", "banana", "orange", "apple", "pineapple"];

// console.log(allIndexesOf(fruits, "apple"));
// console.log(allIndexesOf(fruits, "guava"));
// console.log(allIndexesOf(fruits, "pineapple"));


// Define a function named `removeAll(array, value)` that takes in two arguments.
// The first argument should be an array and the second argument should be a
// value you wish to remove

function removeAll(array, value){
    let newArray = [];
    for (let i=0; i<array.length; i++){
        if (array[i]!==value){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

// console.log(removeAll(bugs, "ant"));
// console.log(removeAll(bugs, "mosquito"));
// console.log(removeAll(bugs, "roach"));


// Make a function called randomIntBetween(min, max) that returns a random number
// between the min and the max.
function randomBetween(min, max){
    return (Math.floor(Math.random() * max) + min);
}
// Make a function called `coinFlip()` that returns either 0 or 1, randomly
function coinFlip(){
    return randomBetween(0,2);
}
// Make a function called `twoDice()` that returns the sum of rolling two six
// sided dice.
function twoDice(){
    let dice1 = randomBetween(1,6);
    let dice2 = randomBetween(1,6);
    return (`${dice1} + ${dice2} = ${dice1+dice2}`);
}
// Make a function called `twentySidedDie()` that returns a random integer
// between 1 and 20.
function twentySidedDie(){
    return (randomBetween(1,20));
}
// Make a function called `twelveSidedDie()` that returns a random integer
// between 1 and 12.
function twelveSidedDie(){
    return (randomBetween(1,12));
}
// Make a function called `tetrahedron()` that returns a random integer between 1
// and 4.
function tetrahedron(){
    return (randomBetween(1,4));
}