const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const users = express.Router()

const User = require('../models/Users')

users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req,res) => {
    const userData = {
        fullname :      req.body.fullname,
        identity_card : req.body.identity_card,
        email :         req.body.email,
        password :      req.body.password,
        phone :         req.body.phone,
        address :       req.body.address,
        role :          req.body.role,
        status :        req.body.status
    }

    User.findOne({ where: { email: req.body.email } })
        .then( employee => { 
        if(!employee)
        {
<<<<<<< HEAD
          bcrypt.hash(req.body.password,10,(err,hash) => {
            userData.password = hash
=======
          bcrypt.hash(req.body  .PASS,10,(err,hash) => {
            userData.PASS = hash
>>>>>>> eb859e54085172358d37c9833da8e892dbe446b4
            User.create(userData)
            .then(employee => {
                res.json({ status: employee.email + ' registered'})
            })
            .catch(err => {
                res.send('err: ' + err)
            })
        })
        }
        else
        {  
            res.json({ error: 'User already existed'})
           
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})


users.post('/login',(req,res) => {
    User.findAll({ where: { role : req.body.role} })
    .then(employee => {
        if(employee)
        {     
            
            //res.status(200).send((employee[1].email).toString())
            
        freezeTableName: true
        //if(req.body.PASS=nhanvien.PASS)
            if(bcrypt.compareSync(req.body.password,employee[1].password))
            {
                var sessions = req.session
                sessions.cart =[{
                    "quantity" : req.body.quantity,
                    "price" : req.body.price
                }]
                sessions.cart.push({
                    "quantity" : req.body.quantity,
                    "price" : req.body.price
                });
                res.json({status: 'success', session: req.session})
                
               //var token = jwt.sign(employee.dataValues , process.env.SECRET_KEY,{ expiresIn: '1h'})
               //res.send(token)
               }
            else
            res.send(bcrypt.compareSync('123456789',employee[1].password))
        }
        else
        {
            res.status(404).json({ error : "User does not exist"})
        }
    })
    .catch(err => {
        res.status(400).json({ error : err })
    })
}) 


module.exports = users