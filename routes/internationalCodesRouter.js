const internationalCodesController = require('../controllers/internationalCodesController');

const router = require('express').Router();

router.post('/internationalCode',internationalCodesController.createInternationalCode);
router.post('/internationalCode/code',internationalCodesController.getInternationalCodeByCode);
router.get('/internationalCode',internationalCodesController.getInternationalCodes);
router.get('/internationalCode/:id',internationalCodesController.getInternationalCode);
router.put('/internationalCode/:id',internationalCodesController.updateInternationalCode);
router.delete('/internationalCode/:id',internationalCodesController.deleteInternationalCode);

module.exports = router;