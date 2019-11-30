const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const db = require('../database/db')

module.exports = db.sequelize.define(
    'bill_detail',
        {
        code_bill:
        {
            type: Sequelize.INTEGER,
            referencesKey: 'code_bill',
            primaryKey: true,
        },
        code_room:
        {
            type: Sequelize.INTEGER,
            referencesKey: 'code_room',
            primaryKey: true,
            
        },
        price:
        {
            type: Sequelize.INTEGER,
            
        },
        staying_days:
        {
            type: Sequelize.INTEGER,
            
        },
        checkin:
        {
            type: Sequelize.DATEONLY
        },
        checkout:
        {
            type: Sequelize.DATEONLY
        },
        charged:
        {
            type: Sequelize.INTEGER,
            
        },
        amount:
        {
            type: Sequelize.INTEGER,
            
        },
    },
    {
        timestamps : false,
        freezeTableName: true,
    }
    
 );