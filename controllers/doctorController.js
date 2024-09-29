const Models = require("../modelsHealthcare/index");

const createDoctor = async (req, res) => {
  try{
        const Doctor = await Models.Doctor.create(req.body);
        res.status(200).json(Doctor);
    }
    catch(err)
    {
        res.status(500).json({
            message: err.message
        })
    }
};

const getDoctors = async (req, res) => {
    try{
          const Doctors = await Models.Doctor.findAll();
          res.status(200).json(Doctors);
      }
      catch(err)
      {
          res.status(500).json({
              message: err.message
          })
      }
  };

  const getDoctor = async (req, res) => {
    try{
          const Doctor = await Models.Doctor.findOne({where:{id:req.params.id}});
          res.status(200).json(Doctor);
      }
      catch(err)
      {
          res.status(500).json({
              message: err.message
          })
      }
  };

  const updateDoctor = async (req, res) => {
    try{
        
          const Doctor = await Models.Doctor.update(req.body,{where:{id:req.params.id}});
          res.status(200).json(Doctor);
      }
      catch(err)
      {
          res.status(500).json({
              message: err.message
          })
      }
  };

  const deleteDoctor = async (req, res) => {
    try{
         await Models.Doctor.destroy({where:{id:req.params.id}});
          res.status(200).json({});
      }
      catch(err)
      {
          res.status(500).json({
              message: err.message
          })
      }
  };

  module.exports = {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
  }