import axios from "axios";

function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
}


function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}`);
}


//used to make sure both getRepos and getUserInfo have retrned data before giving it out
export default function getGithubInfo(username) {
    console.log(`Username: `, username);
    //axios.all() waits for all the promises in the array to be resolved before running the function in .then();
    return axios.all([getRepos(username), getUserInfo(username)])
        .then((arr) => (
            {
                repos: arr[0].data,
                bio: arr[1].data
            };
        ));
}


export default helpers;
