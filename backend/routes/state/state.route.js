const express= require('express');
const router = express.Router();
const StateController = require('../../controllers/state/state.controller');

const stateController = new StateController();

router.get('/get-state', stateController.getState);
router.post('/create', stateController.createState);

module.exports = router;