const express= require('express');
const multer = require('multer');
const router = express.Router();
const ChildController = require('../../controllers/child/child.controller');
const childController = new ChildController();
const AuthMiddleware = require('../../middlewares/auth/auth');
const authMiddleware = new AuthMiddleware();
const upload = multer({
    dest: 'uploads/',
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + '-' + Date.now())
      }
     
});
router.use(authMiddleware.verifyToken);
router.get('/get-all-child', childController.getAllChild);
router.get('/get-child-by-district', childController.getChildByDistrict);
router.post('/create',upload.single('photo'), childController.createChild);
module.exports = router;
