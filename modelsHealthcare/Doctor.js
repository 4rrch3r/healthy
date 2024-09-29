const Sequelize = require('sequelize');
const db = require('../configDB/db');

const Doctor = db.define('doctor',{

name:{
    type:Sequelize.STRING(50),
    allowNull: false,
},
tel:{
    type:Sequelize.CHAR(7),
    allowNull: false,
},
post:{
    type:Sequelize.STRING(20),
    allowNull: false,
    validate: {
        isIn: [['assistant', 'doctor', 'head doctor']]
      }
},
HospitalFK: {
    type: Sequelize.INTEGER,
  },
},{
    freezeTableName:true,
    timestamps: false
})

Doctor.sync({alter: true});
//Vaccination.sync({force: true});
module.exports = Doctor;