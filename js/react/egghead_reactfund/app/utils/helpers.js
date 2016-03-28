const axios = require("axios");

function getRepos(username) {
    return axios.get("https://api.github.com/users/" + username + '/repos');
}


function getUserInfo(username) {
    axios.get("https://api.github.com/users/" + username);
}

var helpers = {
    //used to make sure both getRepos and getUserInfo have retrned data before giving it out
    getGithubInfo: function(username) {
        //axios.all() waits for all the promises in the array to be resolved before running the function in .then();
        return axios.all([getRepos(username), getUserInfo(username)])
            .then(function(arr){
                return {
                    repos: arr[0].data,
                    bio: arr[1].data
                };
            });
    }
};

module.exports = helpers;
