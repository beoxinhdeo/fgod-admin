const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'bill',
    {
        code_bill:
        {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code_emp:
        {
            type: Sequelize.INTEGER,
            foreignKey: true,
            autoIncrement: true
        },
        code_cus:
        {
            type: Sequelize.INTEGER,
            foreignKey: true,
            autoIncrement: true
        },
        bill_date:
        {
            type: Sequelize.DATE
        },
        total:
        {
            type: Sequelize.INTEGER
        },
        message:
        {
            type: Sequelize.STRING
        },
    },
    {
        // timestamps : false,
        // freezeTableName: true
    }
    
 );