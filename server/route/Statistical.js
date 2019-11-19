const express = require('express')
const cors = require('cors')
const statisticals = express.Router();
const Bill =require("../models/Bills")

statisticals.use(cors())

bills.post('/count', (req,res) =>{
    const billdata={
        code_bill:req.body.code_bill,
        code_emp:req.body.code_emp,
        code_cus:req.body.code_cus,
        bill_date:req.body.bill_date,
        total:req.body.total,
        message:req.body.message
    }
    Bill.findOne( { where : billdata } ).then( bill =>{
        if(!bill){
           
        } 
        else{
            res.send({status:false,message:"Bill ton tai"});
        }
    }).catch(ex =>{
        res.send("err : "+ ex);
    })
})

module.exports = statisticals