const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const users = express.Router()

const User = require('../models/Users')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req,res) => {
    const today = new Date()
    const userData = {
        TENNV : req.body.TENNV,
        EMAIL: req.body.EMAIL,
        PASS: req.body.PASS,
        SDT: req.body.SDT,
        MAQUYEN: req.body.MAQUYEN,
        TRANGTHAI: req.body.TRANGTHAI
        //NGAYTAO: today
    }

    User.findOne({ where: { EMAIL: req.body.EMAIL } })
        .then( nhanvien => { 
        if(!nhanvien)
        {
          bcrypt.hash(req.body.PASS, 10,(err,hash) => {
            userData.PASS = hash
            User.create(userData)
            .then(nhanvien => {
                res.json({ status: nhanvien.EMAIL + ' registered'})
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
    User.findOne({ where: { EMAIL : req.body.EMAIL } })
    .then(nhanvien => {
        if(nhanvien)
        {
            if(bcrypt.compareSync(req.body.PASS, nhanvien.PASS))
            {
                let token = jwt.sign(nhanvien, process.env.SECRET_KEY,{expiresIn: 1440})
                res.send('token')
            }
        }
        else
        {
            res.status(4000).json({ error : "User does not exist"})
        }
    })
    .catch(err => {
        res.status(400).json({ error : err })
    })
}) 


module.exports = users