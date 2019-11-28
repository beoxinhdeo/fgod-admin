const express = require('express')
const cors = require('cors')


const bills = express.Router();
const Bill = require("../models/Bills")
const Employee = require("../models/Users")
const Customer = require("../models/Customers")

Employee.hasMany(Bill, {foreignKey: 'code_bill'})
Bill.belongsTo(Employee, {foreignKey: 'code_emp'})

Customer.hasMany(Bill, {foreignKey: 'code_bill'})
Bill.belongsTo(Customer, {foreignKey: 'code_cus'})



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

bills.post('/show', (req,res) =>{
    

    Bill.findAll({
        include: [{
          model: Employee,
          required: true
         },
         {
            model: Customer,
            required: true
           }]
         
      }).then(bill =>{
        if(bill){
                    res.send(bill).catch(err =>{res.send("err : " + err)});
           
        } 
        else{
            res.send({status:false,message:"Nhập lại mã khách hàng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})



module.exports = bills