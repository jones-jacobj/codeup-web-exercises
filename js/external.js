// console.log("Hello from External Javascript")
// alert("Welcome to my Website!")
// favoriteColor = prompt("What is your favorite color?")
// alert("Great, " + favoriteColor + " is my favorite color too!")

/*
Determines how much money you will pay in total for renting three movies for multiple days
 */
// alert("Movie Test");
// let movie1Days = Number(prompt("How many days will you keep your first movie"));
// let movie2Days = Number(prompt("How many days will you keep your second movie"));
// let movie3Days = Number(prompt("How many days will you keep your third movie"));
// let pricePerDay = Number(prompt("How much does it cost to rent a move per day"));
// let rentalTotal = (movie1Days+movie2Days+movie3Days)*pricePerDay;
// alert("Keeping the movies for " + (movie1Days + movie2Days + movie3Days) + " total days for $" + pricePerDay + " equals " + rentalTotal);

/*
Determines how much money you will make in total after calculating hourly wage & hours worked for three employers
 */
alert("Employment Pay Calculator");
let employer1 = Number(prompt("How many hours did you work at the first Employer?"))
let employer1PerHour = Number(prompt("How much did you make per hour working at that Employer?"))
let employer1Wages = employer1 * employer1PerHour
let employer2 = Number(prompt("How many hours did you work at the second Employer?"))
let employer2PerHour = Number(prompt("How much did you make per hour working at that Employer?"))
let employer2Wages = employer2 * employer2PerHour
let employer3 = Number(prompt("How many hours did you work at the third Employer?"))
let employer3PerHour = Number(prompt("How much did you make per hour working at that Employer?"))
let employer3Wages = employer3 * employer3PerHour

let totalHours = employer1 + employer2 + employer3
let totalWages = employer1Wages + employer2Wages + employer3Wages

alert("In total you worked " + totalHours + " hours, and made $" + totalWages)
