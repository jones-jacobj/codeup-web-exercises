
/*
    Has a loop, asks user for input; breaks if invalid input given, continues if given proper input (odd number between 1 and 50).
    Prints all odd numbers between 1 and 50, skipping the number the user gave.
 */
function pickANumber(input){
    while(input){
        let userChoose = prompt("Pick an odd number between 1 and 50");
        if(Number(input)<50 && Number(input)>0){
            continue;
        }else{
            break;
        }
    }
}
