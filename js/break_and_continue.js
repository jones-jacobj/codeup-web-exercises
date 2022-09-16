
/*
    Has a loop, asks user for input; breaks if invalid input given, continues if given proper input (odd number between 1 and 50).
    Prints all odd numbers between 1 and 50, skipping the number the user gave.
 */
function pickANumber(){
    let chosenNumber = 0;
    while(chosenNumber%2===0){
        chosenNumber = prompt("Choose an ODD number between 1 and 50");
    }
    for(let i=1;i<50;i+=2){
        if(i===Number(chosenNumber)){
            console.log("Yike, skipping number " + chosenNumber);
        }
        console.log("Here is an odd number " + i);
    }
}