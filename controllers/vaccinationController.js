const Models = require("../modelsHealthcare/index");

const createVaccination = async (req, res) => {
  try{
        const Vaccination = await Models.Vaccination.create(req.body);
        res.status(200).json(Vaccination);
    }
    catch(err)
    {
        res.status(500).json({
            message: error.message
        })
    }
};

const getVaccinations = async (req, res) => {
    try{
          const Vaccinations = await Models.Vaccination.findAll();
          res.status(200).json(Vaccinations);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const getVaccination = async (req, res) => {
    try{
          const Vaccination = await Models.Vaccination.findOne({where:{id:req.params.id}});
          res.status(200).json(Vaccination);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const updateVaccination = async (req, res) => {
    try{
          const Vaccination = await Models.Vaccination.update(req.body,{where:{id:req.params.id}});
          res.status(200).json(Vaccination);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const deleteVaccination = async (req, res) => {
    try{
         await Models.Vaccination.destroy({where:{id:req.params.id}});
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
    createVaccination,
    getVaccinations,
    getVaccination,
    updateVaccination,
    deleteVaccination
  }