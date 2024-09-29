const Models = require("../modelsHealthcare/index");

const createPatient = async (req, res) => {
  try{
        const Patient = await Models.Patient.create(req.body);
        res.status(200).json(Patient);
    }
    catch(err)
    {
        res.status(500).json({
            message: error.message
        })
    }
};

const getPatients = async (req, res) => {
    try{
          const Patients = await Models.Patient.findAll();
          res.status(200).json(Patients);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const getPatient = async (req, res) => {
    try{
          const Patient = await Models.Patient.findOne({where:{id:req.params.id}});
          res.status(200).json(Patient);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const updatePatient = async (req, res) => {
    try{
          const Patient = await Models.Patient.update(req.body,{where:{id:req.params.id}});
          res.status(200).json(Patient);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const deletePatient = async (req, res) => {
    try{
         await Models.Patient.destroy({where:{id:req.params.id}});
          res.status(200).json({});
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  module.exports = {
    createPatient,
    getPatients,
    getPatient,
    updatePatient,
    deletePatient
  }