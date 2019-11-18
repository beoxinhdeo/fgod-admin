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
            }).catch(ex =>{res.send("err : "+ex)});
        } else{
            res.send({status:false,message:"Chưa có mã quyền"});
        }
    }).catch(ex =>{
        res.send("err : "+ ex);
    })
})


// rooms.post('/updatelock', (req,res) =>{
//     const roomdata={
//         code_room:req.body.code_room,
//         status:req.body.status
//     }
//     Room.findOne({where:{code_room:req.body.code_room}}).then(room =>{
//         if(room){
//             Room.update(roomdata,{where:{code_room:req.body.code_room}}).then(room =>{
//                 res.send({status:room.code_room, message:"thành công"});
//             }).catch(ex =>{res.send("err : "+ex)});
//         } else{
//             res.send({status:false,message:"Chưa có mã phòng"});
//         }
//     }).catch(ex =>{
//         res.send("err : "+ ex);
//     })
// })


status_users.post('/create', (req,res) =>{
    const statusdata={
        code_status:req.body.code_status,
        name:req.body.name,
        
    }
    Status_user.findOne({where:{code_room:req.body.code_room}}).then(status_user =>{
        if(!status_user){
            Status_user.create(statusdata).then(status_user =>{
                res.send({status:status_user.code_status, message:"thành công"});
            }).catch(ex =>{res.send("err : "+ex)});
        } else{
            res.send({status:false,message:"quyền đã tồn tại"});
        }
    }).catch(ex =>{
        res.send("err : "+ ex);
    })
})





module.exports = status_users