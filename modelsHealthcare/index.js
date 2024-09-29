



const { Sequelize } = require('sequelize');

const Hospital = require('./Hospital');
const Doctor = require ('./Doctor');
const Patient = require ('./Patient');
const Illness = require ('./Illness');
const Vaccination = require('./Vaccination');
const InternationalCodes = require('./InternationalCodes');

Doctor.belongsTo(Hospital, { foreignKey: 'HospitalFK', onDelete: 'CASCADE' });
Hospital.hasMany(Doctor, { foreignKey: 'HospitalFK', onDelete: 'CASCADE' });

Patient.belongsTo(Doctor, { foreignKey: 'DoctorFK', onDelete: 'CASCADE' });
Doctor.hasMany(Patient, { foreignKey: 'DoctorFK', onDelete: 'CASCADE' });

Illness.belongsTo(Patient, { foreignKey: 'PatientFK', onDelete: 'CASCADE' });
Patient.hasMany(Illness, { foreignKey: 'PatientFK', onDelete: 'CASCADE' });

Vaccination.belongsTo(Patient, { foreignKey: 'PatientFK', onDelete: 'CASCADE' });
Patient.hasMany(Vaccination, { foreignKey: 'PatientFK', onDelete: 'CASCADE' });



module.exports = {
  InternationalCodes,
    Hospital,
    Doctor,
    Patient,
    Illness,
    Vaccination,
  };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  // const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/db')

// const Hospital = sequelize.define('Hospital', {
//   HospitalPK: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//   },
//   Name: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   QuantityEmployees: {
//     type: DataTypes.INTEGER,
//     validate: {
//       isNumeric: true,
//     },
//   },
//   Address: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
// });

// const Doctor = sequelize.define('Doctor', {
//   DoctorPK: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//   },
//   Name: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   Tel: {
//     type: DataTypes.CHAR(7),
//     allowNull: false,
//   },
//   Post: {
//     type: DataTypes.STRING(20),
//     allowNull: false,
//     validate: {
//       isIn: [['assistant', 'doctor', 'head doctor']],
//     },
//   },
// });

// const Patient = sequelize.define('Patient', {
//   PatientPK: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//   },
//   Name: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   Tel: {
//     type: DataTypes.CHAR(7),
//     allowNull: false,
//   },
//   Email: {
//     type: DataTypes.CHAR(25),
//   },
// });

// const Illness = sequelize.define('Illness', {
//   IllnessPK: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//   },
//   Name: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   BeginDate: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   EndDate: {
//     type: DataTypes.DATE,
//   },
// });

// const Vaccination = sequelize.define('Vaccination', {
//   VaccinationPK: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//   },
//   Name: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   VaccinationDate: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   VaccinationEndDate: {
//     type: DataTypes.DATE,
//   },
// });

// Doctor.belongsTo(Hospital, { foreignKey: 'HospitalFK' });
// Hospital.hasMany(Doctor, { foreignKey: 'HospitalFK' });

// Patient.belongsTo(Doctor, { foreignKey: 'DoctorFK' });
// Doctor.hasMany(Patient, { foreignKey: 'DoctorFK' });

// Illness.belongsTo(Patient, { foreignKey: 'PatientFK' });
// Patient.hasMany(Illness, { foreignKey: 'PatientFK' });

// Vaccination.belongsTo(Patient, { foreignKey: 'PatientFK' });
// Patient.hasMany(Vaccination, { foreignKey: 'PatientFK' });

// module.exports = {
//   Hospital,
//   Doctor,
//   Patient,
//   Illness,
//   Vaccination,
// };
