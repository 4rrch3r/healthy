const Models = require("../modelsHealthcare/index");

const createInternationalCode= async (req, res) => {
  try{
        console.log(req.body.data)
        for(let i=0;i<req.body.data.length;i++)
        {
            const Illness = await Models.InternationalCodes.create(req.body.data[i]);
        }
        // const Illness = await Models.InternationalCodes.create(req.body);
        res.status(200).json({'message':'success'});
    }
    catch(err)
    {
        res.status(500).json({
            message: err.message
        })
    }
};

const getInternationalCodes = async (req, res) => {
    try{
          const Illnesses = await Models.InternationalCodes.findAll();
          res.status(200).json(Illnesses);
      }
      catch(err)
      {
          res.status(500).json({
              message: err.message
          })
      }
  };

  const getInternationalCode = async (req, res) => {
    try{
          const Illness = await Models.InternationalCodes.findOne({where:{id:req.params.id}});
          res.status(200).json(Illness);
      }
      catch(err)
      {
          res.status(500).json({
              message: err.message
          })
      }
  };
  
  const getInternationalCodeByCode = async (req, res) => {
    try{
          let Illness = await Models.InternationalCodes.findOne({where:{code:req.body.code}});
          Illness ??= {"message":"Illness with such international code was not found"}
          res.status(200).json(Illness);
      }
      catch(err)
      {
          res.status(500).json({
              message: err.message
          })
      }
  };

  const updateInternationalCode = async (req, res) => {
    try{
          const Illness = await Models.InternationalCodes.update(req.body,{where:{id:req.params.id}});
          res.status(200).json(Illness);
      }
      catch(err)
      {
          res.status(500).json({
              message: err.message
          })
      }
  };

  const deleteInternationalCode = async (req, res) => {
    try{
         await Models.InternationalCodes.destroy({where:{id:req.params.id}});
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
    createInternationalCode,
    getInternationalCodes,
    getInternationalCode,
    updateInternationalCode,
    deleteInternationalCode,
    getInternationalCodeByCode
  }