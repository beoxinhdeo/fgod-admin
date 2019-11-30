const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const Op = Sequelize.Op



const bills = express.Router();
const Room_type = require("../models/Room_type")
const Room = require("../models/Rooms")
const Bill = require("../models/Bills")
const Bill_detail = require("../models/Bill_detail")
const Employee = require("../models/Users")
const Customer = require("../models/Customers")

Room.hasMany(Bill_detail, {foreignKey: 'code_room'})
Bill_detail.belongsTo(Room, {foreignKey: 'code_room'})

Room_type.hasMany(Room, {foreignKey: 'code_type'})
Room.belongsTo(Room_type, {foreignKey: 'code_type'})

Employee.hasMany(Bill, {foreignKey: 'code_bill'})
Bill.belongsTo(Employee, {foreignKey: 'code_emp'})

Customer.hasMany(Bill, {foreignKey: 'code_bill'})
Bill.belongsTo(Customer, {foreignKey: 'code_cus'})



bills.use(cors())
var a=5
var b=[]
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
     //a++;
    // console.log(a);
    // res.send(a).catch(err =>{res.send("err : " + err)});
    

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
                    //a++;
                    //console.log(a);
                    res.send(bill).catch(err =>{res.send("err : " + err)});
           
        } 
        else{
            res.send({status:false,message:"Nhập lại mã khách hàng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })
})





bills.post('/find', (req,res) =>{




Bill_detail.findAll(
        {
            attributes: ['code_room','price'],
            where : {checkin: {[Op.between]: [req.body.checkin,req.body.checkout]}
        },
}).then(bill => {
    billl = bill.map( bill => b.push(bill.dataValues.code_room))
    console.log(b);




    Room.findAll(
        {
            attributes: [
                'code_room','price'
             ],
            where :
            {
                code_room : {[Op.notIn]: b}
            },
 
                   // [req.body.checkin,req.body.checkout]
        include: [{
        //             attributes: [
        //                 'code_room'
        //             ],
        //             model: Bill_detail,
        //             required: true,
        //             where :  
        //             { 
        //             checkin: {[Op.notBetween]: [req.body.checkin,req.body.checkout],}
        //             },
        //             },
        //             {
                        model: Room_type,
                        required: true,
                         }

                      ]
  }
 )
    .then(bill =>{
        if(bill){
                    b=[]
            
                    res.send(bill).catch(err =>{res.send("err : " + err)});
           
        } 
        else{
            res.send({status:false,message:"Nhập lại mã khách hàng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
    })





   
}).catch(err =>{
    res.send("err : "+ err);
         })
//})




   
})





module.exports = bills