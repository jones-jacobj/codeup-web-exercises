/*
Define a function named `allIndexesOf` that takes in two arguments. The first
  argument should be the array to search and the second argument should be the
  value you want to search for. If the item does not exist in the provided
  array, return an empty array.
 */

function allIndexesOf(arr, itm){
    let foundItems = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === itm){
          foundItems.push(arr[i]);
        }
    }
    return foundItems;
}

let fruits = ["apple", "banana", "orange", "apple", "pineapple"]



function evenNumbers(input){
    let evens = [];
    for (let i=0; i<input.length; i++){
        if(input[i]%2==0){
            evens.push(input[i]);
        }
    }
    return evens;
}

let nums = [1,2,3,4,5,6,7,8,9,10];

//console.log(evenNumbers(nums));


function addContinent(arr, cont){
    for(let i=0; i<arr.length; i++){
        arr[i].continent = cont;
    }
    return arr
}

//console.log(addContinent([{city: 'Tokyo', country: 'Japan'}, {city: 'Bangkok', country: 'Thailand'}], 'Asia'));

