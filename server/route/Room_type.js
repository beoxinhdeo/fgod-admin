const express = require('express')
const cors = require('cors')


const room_type = express.Router();
const Room_type = require("../models/Room_type")

room_type.use(cors())

room_type.post('/show', (req,res) =>{
    

    Room_type.findAll().then(room_type =>{
        if(room_type){
                    res.send(room_type).catch(err =>{res.send("err : " + err)});
           
        } 
        else{
            res.send({status:false,message:"Nhập lại mã khách hàng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})
//thêm 
//cd server
//npm run dev

//xóa


// //update
room_type.post('/update', (req,res) =>{
    const roomtypedata={
        code_type:req.body.code_type,
        type_name:req.body.type_name,
        description:req.body.description,
        status:req.body.status
    }
    Room_type.findOne({where:{code_type:req.body.code_type}}).then(room_t =>{
        if(room_t){
            Room_type.update(roomtypedata,{where:{code_type:req.body.code_type}}).then(room_t =>{
                res.send({status:room_t.code_type, message:"thành công"});
            }).catch(err =>{res.send("err : "+err)});
        } else{
            res.send({status:false,message:"Chưa có mã loại phòng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})


room_type.post('/updatelock', (req,res) =>{
    const roomtypedata={
        code_type:req.body.code_type,
        status:req.body.status
    }
    Room_type.findOne({where:{code_type:req.body.code_type}}).then(room_t =>{
        if(room_t){
            Room_type.update(roomtypedata,{where:{code_room:req.body.code_room}}).then(room_t =>{
                res.send({status:room_t.code_type, message:"thành công"});
            }).catch(err =>{res.send("err : "+err)});
        } else{
            res.send({status:false,message:"Chưa có mã phòng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})


room_type.post('/create', (req,res) =>{
    const roomtypedata={
        code_type:req.body.code_type,
        type_name:req.body.type_name,
        description:req.body.description,
        
    }
    Room_type.findOne({where:{code_type:req.body.code_type}}).then(room_t =>{
        if(!room_t){
            Room_type.create(roomtypedata).then(room_t =>{
                res.send({status:room_t.code_type, message:"thành công"});
            }).catch(err =>{res.send("err : "+err)});
        } else{
            res.send({status:false,message:"loại phòng đã tồn tại"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})





module.exports = room_type