const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
var port = 5000//process.env.PORT || 5000 

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))




var Users = require('./route/Users')
var Customers = require('./route/Customers')
var Bills = require('./route/Bills')

app.use('/users',Users)
app.use('/customers',Customers)
app.use('/bills',Bills)

app.listen(port, () => {
    console.log("Server is running on port:" + port )
})