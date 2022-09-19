
/*
    Has a loop, asks user for input; breaks if invalid input given, continues if given proper input (odd number between 1 and 50).
    Prints all odd numbers between 1 and 50, skipping the number the user gave.
 */
function pickANumber() {
    let chosenNumber = 0;
    for(let i=0;i<5;i++) {
        chosenNumber = prompt("Choose an odd number between 1 and 50");
        if (chosenNumber % 2 !== 0) {
            break;
        }
    }
    for(let i=0; i<50; i++){
        if(i%2===0){
            continue;
        }
        if(i!==Number(chosenNumber)){
            console.log(i)
        }else{
            console.log("Yikes, skipping " + chosenNumber);
        }
    }
}

