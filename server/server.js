const express = require('express')
const session = require('express-session')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

var port = process.env.PORT || 5000 

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.use(session({
    resave: true, 
    saveUninitialized: false, 
    secret: 'somesecret', 
    cookie: { maxAge: 60000 }}))


var Users = require('./route/Users')
//var Users = require('./route/Customers')

app.use('/users',Users)
//app.use('/customers',Customers)

app.listen(port, () => {
    console.log("Server is running on port:" + port )
})