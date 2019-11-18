const Sequelize = require('sequelize')
const db = require('../database/db')


module.exports = db.sequelize.define(
    'employee',
    {
        code_emp:{
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: true             
        },
        fullname:{
            type: Sequelize.STRING
        },
        identity_card:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        phone:{
            type: Sequelize.STRING
        },
        address:{
            type: Sequelize.STRING
        },
        role:{
            type: Sequelize.STRING,
            references: 'quyen', // <<< Note, its table's name, not object name
            referencesKey: 'MAQUYEN' // <<< Note, its a column name
            
        },
        status:{
            type: Sequelize.STRING,
            references:
             {
                model: 'quyens', // 'persons' refers to table name
                key: 'MAQUYEN', // 'id' refers to column name in persons table
             } // <<< Note, its a column name
        }
        // },
        // NGAYTAO:{
        //     type: Sequelize.DATE,
        //     defautValue: Sequelize.NOW
        // }
    },
    {
        timestamps : false,
        freezeTableName: true
    }
)
