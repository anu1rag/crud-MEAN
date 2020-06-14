const express= require('express');
const router = express.Router();
const DistrictController = require('../../controllers/district/district.controller');

const districtController = new DistrictController();

router.get('/get-district', districtController.getDistrict);
router.post('/create', districtController.createDistrict);

module.exports = router;