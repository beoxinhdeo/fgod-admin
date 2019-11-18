const Sequelize = require('sequelize')
const db = require('../database/db')


module.exports = db.sequelize.define(
    'room',
    {
        code_room:
        {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code_type:
        {
            type: Sequelize.INTEGER,
            referencesKey: 'code_type',
        },
        price:
        {
            type: Sequelize.INTEGER
        },
        description:
        {
            type: Sequelize.STRING
        },
        status:
        {
            type: Sequelize.STRING,
            references:
             {
                model: 'room', // 'persons' refers to table name
                key: 'code_room', // 'id' refers to column name in persons table
             }
        },
        
    },
    {
        timestamps : false,
        freezeTableName: true
    }
    
 );
