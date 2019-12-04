const express = require('express')
const cors = require('cors')


const rooms = express.Router();
const Room = require("../models/Rooms")


rooms.use(cors())
//thêm 
//cd server
//npm run dev

//xóa


// //update
rooms.post('/update', (req,res) =>{
    const roomdata={
        code_room:req.body.code_room,
        code_type:req.body.code_type,
        price:req.body.price,
        description:req.body.description,
        status:req.body.status
    }
    Room.findOne({where:{code_room:req.body.code_room}}).then(room =>{
        if(room){
            Room.update(roomdata,{where:{code_room:req.body.code_room}}).then(room =>{
                res.send({status:room.code_room, message:"thành công"});
            }).catch(ex =>{res.send("err : "+ex)});
        } else{
            res.send({status:false,message:"Chưa có mã phòng"});
        }
    }).catch(ex =>{
        res.send("err : "+ ex);
    })
})


rooms.post('/updatelock', (req,res) =>{
    const roomdata={
        code_room:req.body.code_room,
        status:req.body.status
    }
    Room.findOne({where:{code_room:req.body.code_room}}).then(room =>{
        if(room){
            Room.update(roomdata,{where:{code_room:req.body.code_room}}).then(room =>{
                res.send({status:room.code_room, message:"thành công"});
            }).catch(ex =>{res.send("err : "+ex)});
        } else{
            res.send({status:false,message:"Chưa có mã phòng"});
        }
    }).catch(ex =>{
        res.send("err : "+ ex);
    })
})


rooms.post('/create', (req,res) =>{
    const roomdata={
        code_room:req.body.code_room,
        code_type:req.body.code_type,
        price:req.body.price,
        description:req.body.description,
        status:req.body.status
    }
    Room.findOne({where:{code_room:req.body.code_room}}).then(room =>{
        if(!room){
            Room.create(roomdata).then(room =>{
                res.send({status:room.code_room, message:"thành công"});
            }).catch(ex =>{res.send("err : "+ex)});
        } else{
            res.send({status:false,message:"room đã tồn tại"});
        }
    }).catch(ex =>{
        res.send("err : "+ ex);
    })
})

rooms.post('/show', (req,res) =>{

    Room.findAll().then(room =>{
        if(room){
            let rooom = room.map( each_room => {
                if(each_room.role == "1")
                each_room.status ="5";
            
            })
                    res.send(room).catch(err =>{res.send("err : " + err)});
           
        } 
        else{
            res.send({status:false,message:"Nhập lại mã khách hàng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})

// rooms.post('/find', (req,res) =>{

//     Room.findAll({where : }).then(room =>{
//         if(room){
//             let rooom = room.map( each_room => {
//                 findAll
//                 if(each_room.role == "1")
//                 each_room.status ="5";
            
//             })
//                     res.send(room).catch(err =>{res.send("err : " + err)});
           
//         } 
//         else{
//             res.send({status:false,message:"Nhập lại mã khách hàng"});
//         }
//     }).catch(err =>{
//         res.send("err : "+ err);
//     })
// })



module.exports = rooms