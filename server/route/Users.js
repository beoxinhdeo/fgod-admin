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
          bcrypt.hash(req.body.PASS,10,(err,hash) => {
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
        freezeTableName: true
        //if(req.body.PASS=nhanvien.PASS)
            if(bcrypt.compareSync(req.body.PASS,nhanvien.PASS))
            {
               var token = jwt.sign(nhanvien.dataValues , process.env.SECRET_KEY,{ expiresIn: '1h'})
               res.send(token)
            }
            else
            res.send(bcrypt.compareSync('123456789',nhanvien.PASS))
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