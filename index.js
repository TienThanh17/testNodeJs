const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  let a = 1, b =2
  c = a * b
  res.send("c: " + c)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})