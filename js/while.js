
function whileLoop(){
    let num = 2;
    while(num<65537){
        console.log(num);
        num = num*2;
    }
}
/*
    Generates a random number of Cones to Sell; and a random number of cones bought per sale.
    Runs until out of cones to sell
 */
function iceCreamCones(){
    // This is how you get a random number between 50 and 100
    let allCones = Math.floor(Math.random() * 50) + 50;
    while(allCones>0){
        // This expression will generate a random number between 1 and 5
        let conesSold = Math.floor(Math.random() * 5) + 1;
        let tempCones = allCones -= conesSold;
        if(allCones<0){allCones=0;}     //Prevent number to sell being a negative
        if(tempCones<0){tempCones=0;}   //Prevent number sold being a negative
        console.log("We have to sell " + allCones + " cones; We just sold " + conesSold + " that means we now have to sell " + tempCones)
        conesSold = tempCones;
    }
    console.log("We have sold all the cones!");     //After completing function; celebrate!
}

iceCreamCones();