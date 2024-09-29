const Sequelize = require('sequelize');
const db = require('../configDB/db');

const Hospital = db.define('hospital',{

name:{
    type:Sequelize.STRING(50),
    allowNull: false,
},
quantityEmployees:{
    type:Sequelize.INTEGER,
    validate: {
        isNumeric: true,
      },
},
address:{
    type:Sequelize.STRING(50),
    allowNull: false,
},
},{
     timestamps: false,
    freezeTableName:true,
   
})
Hospital.sync({alter: true});

module.exports = Hospital;