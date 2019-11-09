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
        SDT:{
            type: Sequelize.STRING
        },
        EMAIL:{
            type: Sequelize.STRING
        },
        PASS:{
            type: Sequelize.STRING
        },
        NGAYTAO:{
            type: Sequelize.DATE,
            defautValue: Sequelize.NOW
        }
    },
    {
        timestamps : false
    }
)
