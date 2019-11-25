const Sequelize = require('sequelize')
const db = require('../database/db')


module.exports = db.sequelize.define(
    'role',
    {
        idrole:
        {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rolename:
        {
            type: Sequelize.STRING
        },
        bill_role :
        {
            type: Sequelize.STRING
        },
        cus_role:
        {
            type: Sequelize.STRING
        },
        emp_role:
        {
            type: Sequelize.STRING
        },
        role_role:
        {
            type: Sequelize.STRING
        },
        room_role:
        {
            type: Sequelize.STRING
        },
        roomtype_role:
        {
            type: Sequelize.STRING
        },
        statistic_role:
        {
            type: Sequelize.STRING
        },
        booking_role:
        {
            type: Sequelize.STRING
        },
        status:
        {
            type: Sequelize.INTEGER,
            references:
             {
                model: 'status_users', // 'persons' refers to table name
                key: 'code_status', // 'id' refers to column name in persons table 
             }
        },
        
        
        
    },
    {
        timestamps : false,
        freezeTableName: true
    }
    
 );
