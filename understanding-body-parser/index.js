const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const app = express()

var PORT = process.env.PORT || 3000

// View Engine Set-Up
console.log('__dirname ', __dirname)
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.render('SampleForm')
})

app.post('/saveData', (req, res) => {
    console.log('Using body-parser: ', req.body.email)
})

app.listen(PORT, function(error) {
    if(error) throw error
    console.log('Server created successfully on PORT ', PORT)
})