const patientController = require('../controllers/patientController');

const router = require('express').Router();

router.post('/patient',patientController.createPatient);
router.get('/patient',patientController.getPatients);
router.get('/patient/:id',patientController.getPatient);
router.put('/patient/:id',patientController.updatePatient);
router.delete('/patient/:id',patientController.deletePatient);

module.exports = router;