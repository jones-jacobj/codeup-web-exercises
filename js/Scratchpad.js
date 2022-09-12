
function firstAndLast(firstName, lastName){
    return firstName+ " " + lastName;
}

let promptedFirstName = prompt("What is your first name?")
let promptedLastName = prompt("What is your last name?")
alert(firstAndLast(promptedFirstName, promptedLastName));