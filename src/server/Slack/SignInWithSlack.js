/* 
COMMENTED OUT FOR RESTRUCTURING

import React from 'react';

// installed axios to use it for the get request as you suggested
const axios = require('axios');

// slack oauth url
const slackUrl =
  'https://slack.com/oauth/v2/authorize?user_scope=identity.basic&client_id=138300555622.1489513882948';

// client id & secret from when I created the app, I'll use them to get the token backend
const clientId = '138300555622.1489513882948';
const clientSecret = '4f636cd9f50e2a4728eef3e2ee82baaa';

// I used the search params to get the CODE from the redirect url query string  client side
const params = new URLSearchParams(window.location.search);
const code = params.get('code');
// console.log(window.location);
// console.log(code);

// server gets token sends to frontend

console.log(localStorage.getItem('myName'));
// url to get the token after // post method
const getTokenUrl = `https://slack.com/api/oauth.v2.access?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`;

// checking if there is code and getting the access token with axios
if (code) {
  axios.get(getTokenUrl).then((res) => {
    console.log(res);
    // acces token taken from the json received controller backend
    const accessToken = res.data.authed_user.access_token;

    // checking if there is access token and saving it in local storage frontend
    if (accessToken) {
      localStorage.setItem('accessToken', `${accessToken}`);
    }
  });
  // Access Token gets saved succesfully in local storage we see in console
  console.log(localStorage.getItem('accessToken'));
}

// Retrieving the acces token from local storage Front end
const tk = localStorage.getItem('accessToken');

// Url to get user information  server side
const userDetailsURl = `https://slack.com/api/users.identity?token=${tk}`;
if (tk) {
  axios.get(userDetailsURl).then((res) => console.log(res));
}

// goes to frontend

const SignInWithSlack = () => {
  return (
    <div>
      <a href={slackUrl}>
        <button type="submit">
          <img
            alt="Sign in with Slack"
            src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
            srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
          />
        </button>
      </a>
    </div>
  );
};

export default SignInWithSlack;
*/
