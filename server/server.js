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

//app.use('/users',Users)
//app.use('/customers',Customers)

var Customers = require('./route/Customers')
var Bills = require('./route/Bills')
var Rooms = require('./route/Rooms')
var Room_types = require('./route/Room_type')
var Status_users = require('./route/Status_users')
var Roles = require('./route/Roles')
    
app.use('/users',Users)
app.use('/customers',Customers)
app.use('/bills',Bills)

app.use('/rooms',Rooms)
app.use('/room_type',Room_types)
app.use('/status_users',Status_users)
app.use('/roles',Roles)

//// >>>>>>> eb859e54085172358d37c9833da8e892dbe446b4
//// >>>>>>> 2c800b21af4e5cc86d98617aabc4cb7663b87347

app.listen(port, () => {
    console.log("Server is running on port:" + port )
})