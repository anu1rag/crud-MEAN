const express= require('express');
const router = express.Router();
const ChildController = require('../../controllers/child/child.controller');

const childController = new ChildController();

router.get('/get-all-child', childController.getAllChild);
router.get('/get-child-by-district', childController.getChildByDistrict);
router.post('/create', childController.createChild);

module.exports = router;