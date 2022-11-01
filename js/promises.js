
async function getLastCommit(username){
    await fetch("https://api.github.com/users/" + username + "/events", {headers: {'Authorization': "token " + tempGithubToken}})
        .then(response => {
           response.json().then(events=>{
                let date = events[0].created_at;
                date = date.slice(0,10);
                return date;
           });
        })
        .catch(event => console.log(event));
}


getLastCommit('jones-jacobj');