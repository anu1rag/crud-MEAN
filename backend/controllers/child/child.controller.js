const ChildService = require('../../services/child/child.service')
const utils = require('../../utils/utils');
const APIError = require('../../constants/APIError');

let childService = new ChildService();

class ChildController {
    constructor() {}


    async getAllChild(req,res,next) {
        try {
            let result = await childService.getAllChild(req.query);
            res.success(result);
        } catch(err) {
            next(err);
        }

    }

    async getChildByDistrict(req,res,next) {
        try {
            console.log(req.query);
            let result = await childService.getChildByDistrict(req.query);
            res.success(result);
        } catch(err) {
            next(err);
        }
    }

    async createChild(req,res,next) {
        console.log(req.body);
        console.log(req.file);
        try {
            if(!utils.hasParams(req.body, ['name', 'mother_name', 'father_name', 'dob', 'sex', 'state_id', 'district_id'])) {
                throw APIError.MissingParams;
            }
            let obj = utils.pick(req.body, ['name', 'mother_name', 'father_name', 'dob', 'sex', 'state_id', 'district_id']);
            obj = {...obj, ...{photo:req.file.path}};
            let data = await childService.createChild(obj);
            res.created(data);
        } catch (err) {
            next(err);
        }
    }
}


module.exports = ChildController;
