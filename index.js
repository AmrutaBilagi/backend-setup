const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Backend development')
})
const github={
  "login": "AmrutaBilagi",
  "id": 177816011,
  "node_id": "U_kgDOCplByw",
  "avatar_url": "https://avatars.githubusercontent.com/u/177816011?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AmrutaBilagi",
  "html_url": "https://github.com/AmrutaBilagi",
  "followers_url": "https://api.github.com/users/AmrutaBilagi/followers",
  "following_url": "https://api.github.com/users/AmrutaBilagi/following{/other_user}",
  "gists_url": "https://api.github.com/users/AmrutaBilagi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AmrutaBilagi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AmrutaBilagi/subscriptions",
  "organizations_url": "https://api.github.com/users/AmrutaBilagi/orgs",
  "repos_url": "https://api.github.com/users/AmrutaBilagi/repos",
  "events_url": "https://api.github.com/users/AmrutaBilagi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AmrutaBilagi/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Amruta N Bilagi",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-08-08T06:02:56Z",
  "updated_at": "2025-09-25T13:43:09Z"
}
app.get('/git',(req,res)=>{
  res.json(github)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
