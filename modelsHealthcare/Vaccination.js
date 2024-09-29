const Sequelize = require('sequelize');
const db = require('../configDB/db');

 const Vaccination = db.define('vaccination',{

name:{
    type:Sequelize.STRING(50),
    allowNull: false,
},
vaccinationDate:{
    type:Sequelize.DATE,
    allowNull: false,
},
VaccinationEndDate :{
    type:Sequelize.DATE,
},
PatientFK: {
    type: Sequelize.INTEGER,
  },

},{
    freezeTableName:true,
    timestamps: false
})
Vaccination.sync({alter: true});
//Vaccination.sync({force: true});
//Vaccination.sync({alter: true});

module.exports = Vaccination;