// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// Use .map to create an array of strings where each element is a user's email address
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// Use .reduce to get the longest email from the list of users.
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


let htmlBody = document.getElementsByTagName('body')[0];
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Filtered
const filteredList = users.filter(user => user.languages.length>=3);
htmlBody.innerHTML += "Users who know more than three langauges<br>";
filteredList.forEach((element)=>htmlBody.innerHTML += element.name+', ');

// Map
const emails = users.map(user => user.email);
htmlBody.innerHTML += "<br>User's emails<br>";
emails.forEach((element)=>htmlBody.innerHTML += element+' ');

//reduce
const totalYears = users.reduce((total, person) => total + person.yearsOfExperience, 0);
htmlBody.innerHTML += "<br>Total years user experience<br>";
// emails.forEach((element)=>htmlBody.innerHTML += element+' ');
htmlBody.innerHTML += totalYears;
htmlBody.innerHTML += "<br>Average years experience<br>";
htmlBody.innerHTML += (totalYears/users.length);

// //Reduce
const longestEmail = users.reduce(function(thisUser, user) {
    if(user.email.length > thisUser.email.length){thisUser = user;}
    return thisUser;
},{'email':''})
htmlBody.innerHTML += "<br>Longest eMail address<br>";
htmlBody.innerHTML += longestEmail.email;

//reduce
// const combinedUserNames = users.reduce((names, user) => names += user.name + ", ","");
const combinedUserNames = users.reduce((names,user) => {
    if (users.indexOf(user) === users.length-1){
        names += user.name
    }else {
        names += user.name + ", "
    }
    return names;
},"");
htmlBody.innerHTML += "<br>Combined User Names<br>";
htmlBody.innerHTML += combinedUserNames;

//Bonus
const uniqueNames = users.reduce((uniques, user) => {   
    user.languages.forEach((el) => {if(!uniques.includes(el)){uniques.push(el)}});
    return uniques;
},[]);
htmlBody.innerHTML += "<br>Unique Languages<br>";
htmlBody.innerHTML += uniqueNames;
