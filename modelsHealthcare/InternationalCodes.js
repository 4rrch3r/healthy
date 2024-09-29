const Sequelize = require('sequelize');
const db = require('../configDB/db');

const InternationalCodes = db.define('internationalCodes',{

code:{
    type:Sequelize.STRING(50),
    allowNull: false,
},
desc:{
    type:Sequelize.STRING(100),
    allowNull: false,
},

},{
     timestamps: false,
    freezeTableName:true,
   
})
InternationalCodes.sync({alter: true});

module.exports = InternationalCodes;