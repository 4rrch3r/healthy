const vaccinationController = require('../controllers/vaccinationController');

const router = require('express').Router();

router.post('/vaccination',vaccinationController.createVaccination);
router.get('/vaccination',vaccinationController.getVaccinations);
router.get('/vaccination/:id',vaccinationController.getVaccination);
router.put('/vaccination/:id',vaccinationController.updateVaccination);
router.delete('/vaccination/:id',vaccinationController.deleteVaccination);

module.exports = router;