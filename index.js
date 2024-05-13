require('dotenv').config();
const express = require("express");

const app = express();
const port = 8000;

const gtihubData = {
  "login": "ankitdigimantra",
  "id": 154401320,
  "node_id": "U_kgDOCTP6KA",
  "avatar_url": "https://avatars.githubusercontent.com/u/154401320?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ankitdigimantra",
  "html_url": "https://github.com/ankitdigimantra",
  "followers_url": "https://api.github.com/users/ankitdigimantra/followers",
  "following_url": "https://api.github.com/users/ankitdigimantra/following{/other_user}",
  "gists_url": "https://api.github.com/users/ankitdigimantra/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ankitdigimantra/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ankitdigimantra/subscriptions",
  "organizations_url": "https://api.github.com/users/ankitdigimantra/orgs",
  "repos_url": "https://api.github.com/users/ankitdigimantra/repos",
  "events_url": "https://api.github.com/users/ankitdigimantra/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ankitdigimantra/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-12-20T04:50:10Z",
  "updated_at": "2024-04-25T10:35:49Z"
}

app.get('/github', (req, res) => {
  res.json(gtihubData)
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello twitterererer World!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome to login here </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Welcome to YOUTUBE  here </h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
