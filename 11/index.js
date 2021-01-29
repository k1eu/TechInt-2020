const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.use((req, res, next) => {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
      "Content-Security-Policy": "default-src 'self'; style-src 'self' *.bootstrapcdn.com; script-src 'self' *.bootstrapcdn.com",
    //default-blokuje  "Content-Security-Policy": "default-src *",
      "X-Content-Security-Policy": "default-src *",
      "X-WebKit-CSP": "default-src *"
    })
    next();
  });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})