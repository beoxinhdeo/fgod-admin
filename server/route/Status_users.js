const express = require('express')
const cors = require('cors')


const status_users = express.Router();
const Status_user = require("../models/Status_users")

status_users.use(cors())
//thêm 
//cd server
//npm run dev

//xóa
//thằng quyền phải trạng thái

// //update
status_users.post('/update', (req,res) =>{
    const statusdata={
        code_status:req.body.code_status,
        name:req.body.name,
        
    }
    Status_user.findOne({where:{code_status:req.body.code_status}}).then(status_user =>{
        if(status_user){
            Status_user.update(statusdata,{where:{code_status:req.body.code_status}}).then(status_user =>{
                res.send({status:status_user.code_status, message:"thành công"});
            }).catch(err =>{res.send("err : "+err)});
        } else{
            res.send({status:false,message:"Chưa có mã trạng thái"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})




status_users.post('/create', (req,res) =>{
    const statusdata={
        code_status:req.body.code_status,
        name:req.body.name,
        
    }
    Status_user.findOne({where:{code_status:req.body.code_status}}).then(status_user =>{
        if(!status_user){
            Status_user.create(statusdata).then(status_user =>{
                res.send({status:status_user.code_status, message:"thành công"});
            }).catch(err =>{res.send("err : "+err)});
        } else{
            res.send({status:false,message:"trạng thái đã tồn tại"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})





module.exports = status_users