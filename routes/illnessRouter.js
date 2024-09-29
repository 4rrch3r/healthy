const illnessController = require('../controllers/illnessController');

const router = require('express').Router();

router.post('/illness',illnessController.createIllness);
router.get('/illness',illnessController.getIllnesses);
router.get('/illness/:id',illnessController.getIllness);
router.put('/illness/:id',illnessController.updateIllness);
router.delete('/illness/:id',illnessController.deleteIllness);

module.exports = router;