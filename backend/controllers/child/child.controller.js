const ChildService = require('../../services/child/child.service')
const utils = require('../../utils/utils');
const APIError = require('../../constants/APIError');

let childService = new ChildService();

class ChildController {
    constructor() {}


    async getAllChild(req,res,next) {
        try {
            let result = await childService.getAllChild();
            res.success(result);
        } catch(err) {
            next(err);
        }

    }

    async getChildByDistrict(req,res,next) {
        try {
            let result = await childService.getChildByDistrict(req.query);
            res.success(result);
        } catch(err) {
            next(err);
        }
    }

    async createChild(req,res,next) {
        try {
            if(!utils.hasParams(req.body, ['state_id', 'district_name'])) {
                throw APIError.MissingParams;
            }
            let obj = utils.pick(req.body, ['state_id', 'district_name']);
            let data = await stateService.createState(obj);
            res.created(data);
        } catch (err) {
            next(err);
        }
    }
}


module.exports = ChildController;
