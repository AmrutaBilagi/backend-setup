const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Backend development')
})
app.get('/youtube',(req,res)=>{
  res.send("you tube")
})
app.get('/twitter',(req,res)=>{
  res.send("MY TWITTER")
})
app.get('/Github',(req,res)=>{
  res.send("GitHub")
})
app.get('/Instagram',(req,res)=>{
  res.send("Instagram")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
