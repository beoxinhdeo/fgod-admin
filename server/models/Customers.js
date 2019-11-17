const Sequelize = require('sequelize')
const db = require('../database/db')


module.exports = db.sequelize.define(
    'customer',
    {
        code_cus:
        {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullname:
        {
            type: Sequelize.STRING
        },
        idcard_passport:
        {
            type: Sequelize.INTEGER
        },
        phone:
        {
            type: Sequelize.INTEGER
        },
        email:
        {
            type: Sequelize.STRING
        },
        address:
        {
            type: Sequelize.STRING
        },
    },
    {
        timestamps : false,
        freezeTableName: true
    }
    
 );


// export const getpagecus = async (input) => {
//     let error=null;
//     let total=[{TOTAL:0}]
//     let pcus=1;
//     let pSize=10;
//     let cuslist=[];
//     try {
//         let filter = input || {}
//         let {pagecus, pageSize, fullname, code_cus, idcard_passport, email, phone, address}=filter
//         pcus = parseInt(pagecus,10)||1;
//         pSize = parseInt(pageSize,10)||10;
//         fullname=fullname ? fullname.trim() : "";
//         let ret = queryBuilder("Customer").select();
//         let counter =queryBuilder("Customer").count('* as TOTAL');
//         let check=0;
//         if(fullname){
//             check++;
//             ret=ret.where('fullname','like',`%${fullname}$%`);
//             counter=counter.where('fullname','like',`%${fullname}$%`);
//         }
//         if(code_cus){
//             if(check){
//                 ret=ret.andWhere('code_cus','like', `%${code_cus}$%`);
//                 counter=counter.andWhere('code_cus','like',`%${code_cus}$%`);
//             } else{
//                 ret=ret.where('code_cus','like',`%${code_cus}$%`);
//                 counter=counter.where('code_cus','like',`%${code_cus}$%`);
//             }
//             check++;
//         }
//         if(idcard_passport){
//             if(check){
//                 ret=ret.andWhere('idcard_passport','like',`%${idcard_passport}$%`);
//                 counter=counter.andWhere('idcard_passport','like',`%${idcard_passport}$%`);
//             }else {
//                 ret=ret.where('idcard_passport','like',`%${idcard_passport}$%`);
//                 counter=counter.where('idcard_passport','like',`%${idcard_passport}$%`);
//             }
//             check++;
//         }
//         if(email){
//             if(check){
//                 ret=ret.andWhere('email','like',`%${email}$%`);
//                 counter=counter.andWhere('email','like',`%${email}$%`);
//             }else{
//                 ret=ret.where('email','like',`%${email}$%`);
//                 counter=counter.where('email','like',`%${email}$%`);
//             }
//             check++;
//         }
//         if(phone){
//             if(check){
//                 ret=ret.andWhere('phone','like',`%${phone}$%`)
//                 counter=counter.andWhere('phone','like',`%${phone}$%`);
//             }else{
//                 ret=ret.where('phone','like',`%${phone}$%`);
//                 counter=counter.where('phone','like',`%${phone}$%`);
//             }
//             check++;
//         }
//         if(address){
//             if(check){
//                 ret=ret.andWhere('address','like',`%${address}$%`);
//                 counter=counter.andWhere('address','like',`%${address}$%`);
//             }else{
//                 ret=ret.where('address','like',`%${address}$%`);
//                 counter=counter.where('address','like',`%${address}$%`);
//             }
//             check++;
//         }
//         total=await counter;
//         const dataCursor=await ret.limit(pSize).offset(pSize*(pcus-1));
//         for(let i=0;i<dataCursor.length;i++){
//             const{...filteredObj}=dataCursor[i];
//             cuslist.push(filteredObj);
//         }

//     } catch(err){
//         error=err
//     }
//     return new promises((resolve,reject) =>{
//         if(!error){
//             resolve({
//                 data:cuslist,
//                 total:total[0].TOTAL,
//                 pagecus: pcus,
//             })
//         }else{
//             reject(error)
//         }
//     })
// }
// //update
// export const updatecus=(payload) =>{
//     const {code_cus,fullname,idcard_passport,email,phone,address}=payload;
//     if(code_cus){
//         const dataUpdate={};
//         if(fullname && fullname.trim()){
//             dataUpdate.fullname=fullname;
//         }
//         if(idcard_passport && idcard_passport.trim()){
//             dataUpdate.idcard_passport=idcard_passport;
//         }
//         if(email && email.trim()){
//             dataUpdate.email=email;
//         }
//         if(address && address.trim()){
//             dataUpdate.address=address;
//         }
//         if(phone && phone.trim()){
//             dataUpdate.phone=phone;
//         }
//         return queryBuilder("customer").update(dataUpdate).where({code_cus});
//     }else{
//         return queryBuilder("customer").insert({code_cus,fullname,idcard_passport,phone,email,address});
//     }
// }

// //thêm
// export const addcus=(payload) =>{
//     const {code_cus,fullname,idcard_passport,email,phone,address}=payload;
//     if(!code_cus){
//         return queryBuilder("customer").insert({code_cus,fullname,idcard_passport,phone,email,address});
//     }
// }
// //xóa
// export const deletecus=(code_cus) =>{
//     return queryBuilder("customer").delete().where({code_cus});
// }
// //tìm kiếm theo mã
// export const findcode=(code_cus) =>{
//     return queryBuilder("customer").select().where({code_cus});
// }

