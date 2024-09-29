const hospitalController = require('../controllers/hospitalController');

const router = require('express').Router();

router.post('/hospital',hospitalController.createHospital);
router.get('/hospital',hospitalController.getHospitals);
router.get('/hospital/:id',hospitalController.getHospital);
router.put('/hospital/:id',hospitalController.updateHospital);
router.delete('/hospital/:id',hospitalController.deleteHospital);

module.exports = router;