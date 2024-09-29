const Sequelize = require('sequelize');
const db = require('../configDB/db');

const Illness = db.define('illness',{

name:{
    type:Sequelize.STRING(50),
    allowNull: false,
},
beginDate:{
    type:Sequelize.DATE,
    allowNull: false,
},
endDate:{
    type:Sequelize.DATE,
},

PatientFK: {
    type: Sequelize.INTEGER,
  },
},{
    freezeTableName:true,
    timestamps: false
})
Illness.sync({alter: true});

module.exports = Illness;