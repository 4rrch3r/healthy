const doctorController = require('../controllers/doctorController');

const router = require('express').Router();

router.post('/doctor',doctorController.createDoctor);
router.get('/doctor',doctorController.getDoctors);
router.get('/doctor/:id',doctorController.getDoctor);
router.put('/doctor/:id',doctorController.updateDoctor);
router.delete('/doctor/:id',doctorController.deleteDoctor);

module.exports = router;