const express = require('express');
const cors = require('cors');
const bills = express.Router();
const Bill =require("../models/Bill")

bills.use(cors())
//thêm 
//cd server
//npm run dev

//xóa
// customers.post('/delete',(req,res) =>{
//     const cusdata={
//         code_cus:req.body.code_cus,
//         fullname:req.body.fullname,
//         idcard_passport:req.body.idcard_passport,
//         email:req.body.email,
//         phone:req.body.phone,
//         address:req.body.address
//     }
//     Customer.findOne({where:{code_cus:req.body.code_cus}}).then(customer =>{
//         if(customer){
//             Customer.delete(cusdata).then(customer =>{
//                 res.send({status:customer.fullname,message:"delete thành công"});
//             }).catch(ex =>{res.send("err : "+ ex)});
//         } else{
//             res.send({status:false,message:"chưa nhập mã khách hàng"});
//         }
//     }).catch(ex =>{res.send("err : " + ex)});
// })


// //update
bills.post('/update', (req,res) =>{
    const billdata={
        code_bill:req.body.code_bill,
        code_emp:req.body.code_emp,
        code_cus:req.body.code_cus,
        bill_date:req.body.bill_date,
        total:req.body.total,
        message:req.body.message
    }
    Bill.findOne({where:{code_bill:req.body.code_bill}}).then(bill =>{
        if(bill){
            Bill.update(billdata,{where: {code_cus:req.body.code_cus}}).then(customer =>{
                res.send({status:customer.fullname, message:"thành công"});
            }).catch(ex =>{res.send("err : "+ex)});
        } else{
            res.send({status:false,message:"Nhập lại mã khách hàng"});
        }
    }).catch(ex =>{
        res.send("err : "+ ex);
    })
})



customers.post('/create', (req,res) =>{
    const cusdata={
        code_cus: req.body.code_cus,
        fullname: req.body.fullname,
        idcard_passport: req.body.idcard_passport,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    }
    Customer.findOne({where:{idcard_passport: req.body.idcard_passport}}).then(customer =>{
        if(!customer){
            Customer.create(cusdata).then(customer =>{
                res.send({status:customer.fullname,message:"thành công"});
            }).catch(ex =>{
                res.send("err : "+ex);
            })
        } else {
            res.send({status:false,message:"Đã tồn tại"});
        }
    }).catch(ex =>{
        res.send("err :"+ ex);
    })
})

module.exports = bills