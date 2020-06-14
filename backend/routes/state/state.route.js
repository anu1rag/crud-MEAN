const express= require('express');
const multer = require('multer');
const router = express.Router();
const StateController = require('../../controllers/state/state.controller');
const AuthMiddleware = require('../../middlewares/auth/auth');
const authMiddleware = new AuthMiddleware();
const stateController = new StateController();
let upload = multer();
router.use(authMiddleware.verifyToken);
router.get('/get-state', upload.fields([]), stateController.getState);
router.post('/create', upload.fields([]), stateController.createState);

module.exports = router;