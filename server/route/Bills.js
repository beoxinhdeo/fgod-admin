const express = require('express')
const cors = require('cors')


const bills = express.Router();
const Bill = require("../models/Bills")

bills.use(cors())
//thêm 
//cd server
//npm run dev

//xóa


// //update
bills.post('/create', (req,res) =>{
    const billdata={
        code_bill:req.body.code_bill,
        code_emp:req.body.code_emp,
        code_cus:req.body.code_cus,
        bill_date:req.body.bill_date,
        total:req.body.total,
        message:req.body.message
    }
    Bill.findOne({where:{code_bill:req.body.code_bill}}).then(bill =>{
        if(!bill){
            Bill.create(billdata).then(bill =>{
                res.send({status:bill.code_bill, message:"thành công"});
            }).catch(ex =>{res.send("err : "+ex)});
        } else{
            res.send({status:false,message:"Bill ton tai"});
        }
    }).catch(ex =>{
        res.send("err : "+ ex);
    })
})





module.exports = bills