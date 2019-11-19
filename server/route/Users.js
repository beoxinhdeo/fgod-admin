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
          bcrypt.hash(req.body.password,10,(err,hash) => {
            userData.password = hash
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
    User.findOne({ where: { email : req.body.email} })
    .then(employee => {
        if(employee)
        {     
            
            //res.status(200).send((employee[1].email).toString())
            
        freezeTableName: true
        //if(req.body.PASS=nhanvien.PASS)
            if(bcrypt.compareSync(req.body.password,employee.password))
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
            res.send(bcrypt.compareSync('123456789',employee.password))
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

users.post('/update', (req,res) =>{
    const userData = {
        code_emp : req.body.code_emp,
        fullname :      req.body.fullname,
        identity_card : req.body.identity_card,
        email :         req.body.email,
        password :      req.body.password,//bcrypt.hash(req.body.password,10,(err,hash) => {userData.password = err}),
        phone :         req.body.phone,
        address :       req.body.address,
        role :          req.body.role,
        status :        req.body.status
    }

    User.findOne({where:{code_emp:req.body.code_emp}}).then(user =>{
        if(user){
            bcrypt.hash(req.body.password,10,(err,hash) => {
                userData.password = hash
                User.update( userData,{where: {code_emp:req.body.code_emp}}).then(user =>{
                    res.send({status:user.fullname, message:"thành công"})
                }).catch(err =>{res.send("err : " + err)});
            })
        } 
        else{
            res.send({status:false,message:"Nhập lại mã khách hàng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})

users.post('/show', (req,res) =>{
    const userData = {
        code_emp : req.body.code_emp,
        fullname :      req.body.fullname,
        identity_card : req.body.identity_card,
        email :         req.body.email,
        password :      req.body.password,//bcrypt.hash(req.body.password,10,(err,hash) => {userData.password = err}),
        phone :         req.body.phone,
        address :       req.body.address,
        role :          req.body.role,
        status :        req.body.status
    }

    User.findAll().then(user =>{
        if(user){
                    res.send(user).catch(err =>{res.send("err : " + err)});
           
        } 
        else{
            res.send({status:false,message:"Nhập lại mã khách hàng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})



module.exports = users