const Models = require("../modelsHealthcare/index");

const createIllness = async (req, res) => {
  try{
        const Illness = await Models.Illness.create(req.body);
        res.status(200).json(Illness);
    }
    catch(err)
    {
        res.status(500).json({
            message: error.message
        })
    }
};

const getIllnesses = async (req, res) => {
    try{
          const Illnesses = await Models.Illness.findAll();
          res.status(200).json(Illnesses);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const getIllness = async (req, res) => {
    try{
          const Illness = await Models.Illness.findOne({where:{id:req.params.id}});
          res.status(200).json(Illness);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const updateIllness = async (req, res) => {
    try{
          const Illness = await Models.Illness.update(req.body,{where:{id:req.params.id}});
          res.status(200).json(Illness);
      }
      catch(err)
      {
          res.status(500).json({
              message: error.message
          })
      }
  };

  const deleteIllness = async (req, res) => {
    try{
         await Models.Illness.destroy({where:{id:req.params.id}});
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
    createIllness,
    getIllnesses,
    getIllness,
    updateIllness,
    deleteIllness
  }