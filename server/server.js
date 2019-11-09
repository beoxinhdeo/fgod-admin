const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const cors = require('cors')
var port = process.env.PORT || 5000
var app = express()
 
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

var Users = require('./route/Users')

app.use('/users',Users)
app.listen(port, () => {
    console.log("Serever is running on port:" + port )
})