
const express = require('express')
var cors = require('cors'); 
const app = express()
const port = 4000

app.use(cors())
app.get('/api/hello', (req, res) => {
  console.log("banan")
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send({sample:'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})