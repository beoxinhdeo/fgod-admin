
const express = require('express')
const cors = require('cors')



const roles = express.Router()

const Role = require('../models/Roles')

roles.use(cors())



roles.post('/show', (req,res) =>{

    Role.findAll().then(role =>{
        if(role){
                    res.send(role).catch(err =>{res.send("err : " + err)});
           
        } 
        else{
            res.send({status:false,message:"Nhập lại mã khách hàng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})

roles.post('/create', (req,res) =>{
    const roledata={
        idrole: req.body.idrole,
        rolename: req.body.rolename,
        bill_role: req.body.bill_role,
        cus_role: req.body.cus_role,
        emp_role: req.body.emp_role,
        role_role: req.body.role_role,
        room_role: req.body.room_role,
        roomtype_role: req.body.roomtype_role,
        statistic_role: req.body.statistic_role,
        booking_role: req.body.booking_role,
        status: req.body.status

    }
    Role.findOne({where:{rolename: req.body.rolename}}).then(role =>{
        if(!role){
            Role.create(roledata).then(role =>{
                res.send({status:role.rolename,message:"thành công"});
            }).catch(err =>{
                res.send("err : "+err);
            })
        } else {
            res.send({status:false,message:"Đã tồn tại"});
        }
    }).catch(err =>{
        res.send("err :"+ err);
    })
})

module.exports = roles