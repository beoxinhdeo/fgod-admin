const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/Users')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register',(req,res) => {
    const today = new Date()
    const userData = {
        TENNV : req.body.TENNV,
        SDT: req.body.SDT,
        EMAIL: req.body.EMAIL,
        PASS: req.body.PASS,
        NGAYTAO: today
    }

    User.findOne({
        where: {
            EMAIL: req.body.email
        }
    })
    .then(user => {
        if(!user){
          bcrypt.hash(req.body.password, 10,(err,hash) => {
            userData.password = hash
            User.create(userData)
            .then(user => {
                res.json({ status: user.email + ' registered'    })
            })
            .catch(err => {
                res.send('err: ' + err)
            })
        })
                }
        else
        {
            res.json({ error: "User already existed" })
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = users