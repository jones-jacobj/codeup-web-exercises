
function showMultiplicationTable(number){
    let i = 1 ;
    while(i<11){
        console.log(Number(number) + " x " + i + " = " + (number*i));
        i++;
    }
}
/*
    Generates randoms between 2-200 and returns if those numbers are odd or even
 */
function randomType(){
    for (let i=0; i<10; i++){
        let random = Math.floor((Math.random() * 200) + 20);
        let typing = (random %2 !== 0) ? "odd" : "even";
        console.log(random + " = " + typing);
    }
}

/*
    Makes a pretty pyramid of numbers
 */
function pyramidAscii(){
    let output = ""
    for (let i=1; i<10;i++){
        output=""
        for (let j=i; j>0; j--){
            output += i;
        }
        console.log(output);
    }
}

/*
    Goes from 100 to 5 and prints out all numbers divisible by five
 */
function divisibleByFivePrint(){
    for (let i=100; i>4; i--){
        if(i % 5 === 0){
            console.log(i);
        }
    }
}
