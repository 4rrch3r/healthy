const Sequelize = require('sequelize');
const db = require('../configDB/db');

const Patient = db.define('patient',{

name:{
    type:Sequelize.STRING(50),
    allowNull: false,
},
tel:{
    type:Sequelize.CHAR(7),
    allowNull: false,
},
email:{
    type:Sequelize.STRING(25),
},
DoctorFK: {
    type: Sequelize.INTEGER,
  },

},{
    freezeTableName:true,
    timestamps: false
})

Patient.sync({alter: true});

module.exports = Patient;