//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = process.env.PORT || 8080

//Launch listening server on port 8080
app.listen(PORT, function () {
  console.log(`App listening on http://localhost:${PORT}`)
})
