const Models = require("../modelsHealthcare/index");

const createHospital = async (req, res) => {
  try{
        const hospital = await Models.Hospital.create(req.body);
        res.status(200).json(hospital);
    }
    catch(err)
    {
        res.status(500).json({
            message: error.message
        })
    }
};

const getHospitals = async (req, res) => {
    try{
          const hospitals = await Models.Hospital.findAll();
          res.status(200).json(hospitals);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const getHospital = async (req, res) => {
    try{
          const hospital = await Models.Hospital.findOne({where:{id:req.params.id}});
          res.status(200).json(hospital);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const updateHospital = async (req, res) => {
    try{
        console.log(`\n\n\n`)
        console.log(req)
          const hospital = await Models.Hospital.update(req.body,{where:{id:req.params.id}});
          res.status(200).json(hospital);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const deleteHospital = async (req, res) => {
    try{
         await Models.Hospital.destroy({where:{id:req.params.id}});
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
    createHospital,
    getHospitals,
    getHospital,
    updateHospital,
    deleteHospital
  }