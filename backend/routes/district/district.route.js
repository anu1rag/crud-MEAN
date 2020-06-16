const express= require('express');
const router = express.Router();
const DistrictController = require('../../controllers/district/district.controller');
const AuthMiddleware = require('../../middlewares/auth/auth');
const authMiddleware = new AuthMiddleware();
const districtController = new DistrictController();
router.use(authMiddleware.verifyToken);
router.get('/get-district', districtController.getDistrict);
router.get('/get-district-by-state', districtController.getDistrictByState);
router.post('/create', districtController.createDistrict);

module.exports = router;