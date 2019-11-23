const express = require('express')
const cors = require('cors')



const customers = express.Router()

const Customer = require('../models/Customers')

customers.use(cors())
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
customers.post('/update', (req,res) =>{
    const cusdata={
        code_cus:req.body.code_cus,
        fullname:req.body.fullname,
        idcard_passport:req.body.idcard_passport,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    }
    Customer.findOne({where:{code_cus:req.body.code_cus}}).then(customer =>{
        if(customer){
            Customer.update(cusdata,{where: {code_cus:req.body.code_cus}}).then(customer =>{
                res.send({status:customer.fullname, message:"thành công"});
            }).catch(err =>{res.send("err : "+err)});
        } else{
            res.send({status:false,message:"Nhập lại mã khách hàng"});
        }
    }).catch(err =>{
        res.send("err : "+ err);
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



// Customers.post('/create', (req, res) => {
//     const payload = req.body;
//     const {code_cus, fullname, idcard_passport, email, phone,address} = payload;
//     addcus({code_cus, fullname, idcard_passport, email, phone,address}).then(() => {
//       res.send({ status: true, message: 'THEM THANH CONG'});
//     }).catch((ex) => {
//       console.log("Lỗi khi thêm khách hàng", ex);
//       res.send({ status: false, message: "Có lỗi khi tạo sản phẩm" });
//     })
//   })

// Customers.put('/update/code_cus',(req,res) =>{
//     const payload=req.body;
//     const {code_cus}=req.params;
//     if(!code_cus){
//         res.send({
//             status: false,
//             message:'Bạn chưa điền mã khách hàng',
//         });
//         return;
//     }
//     const {code_cus, fullname, idcard_passport, email, phone,address}=payload;
//     updatecus({code_cus, fullname, idcard_passport, email, phone,address}).then(() =>{
//         res.send({status: true, message: 'Chỉnh sửa thành công'});
//     }).catch((ex) => {
//         console.log("Có lỗi khi chỉnh sửa " ,ex);
//         res.send({status: false, message:"Có lỗi khi chỉnh sửa"});
//     })
// })

// router.Customers.delete('/delete/:code_cus',(req,res) =>{
//     const {code_cus}=req.params;
//     if(!code_cus){
//         res.send({
//             status: false,
//             message: "Chưa điền mã khách hàng để xóa",
//         });
//         return;
//     }
//     deletecus(code_cus).then(() =>{
//         res.send({status: true, message: 'Xóa thành công'});
//     }).catch((e) =>{
//         console.log("Xóa khách hàng lỗi :",e);
//         res.send({
//             status: false,
//             message:'Xóa lỗi',
//         });
//     })
// })

// Customers.get('/Customer',(req,res) =>{
//     let query = db.query("select * from customer",(err,Customers) =>{
//         if(err) throw err;
//         res.send({status: true,});
//     })
// })

// Customers.post('/register', (req,res) =>{
//     const dataCustomer = {
//         Customer_ID: req.body.Customer_ID,
//         Customer_Surname: req.body.Customer_Surname,
//         Customer_Name: req.body.Customer_Name,
//         Customer_Identitycard: req.body.Customer_Identitycard,
//         Customer_Email: req.body.Customer_Email,
//         Customer_PhoneNumber: req.body.Customer_PhoneNumber,
//         Customer_Address: req.body.Customer_Address,
//     }
    
    // const sql =  `insert into todos(title,completed) value(?,?) `
    // const todo = ['Thêm khách hàng',false]
    // conn.query(sql,todo,(err,results,fields) =&gt;{
    //     if(err){
    //         return console.log(err.message)
    //     }
    //     console.log('Thêm thành công :'+ Customer_ID)
    // } )
    // Customer.post('/add',req,res){
    //     db.query(insert into )
    // }

 
//})
module.exports = customers