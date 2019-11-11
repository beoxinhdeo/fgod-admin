const Sequelize = require('sequelize')
const db = require('../database/db')


module.exports = db.sequelize.define(
    'nhanvien',
    {
        MANV:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true             
        },
        TENNV:{
            type: Sequelize.STRING
        },
        EMAIL:{
            type: Sequelize.STRING
        },
        PASS:{
            type: Sequelize.STRING
        },
        SDT:{
            type: Sequelize.STRING
        },
        MAQUYEN:{
            type: Sequelize.INTEGER,
            references: 'quyen', // <<< Note, its table's name, not object name
            referencesKey: 'MAQUYEN' // <<< Note, its a column name
            
        },
        TRANGTHAI:{
            type: Sequelize.INTEGER,
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
