const DistrictService = require('../../services/district/district-service')
const districtService = new DistrictService();
const utils = require('../../utils/utils');
const APIError = require('../../constants/APIError');


class DistrictController {
    constructor() {}

    async getDistrict(req,res,next) {
        try {
            let result = await districtService.getDistrict(req.query);
            res.success(result);
        } catch(err) {
            next(err);
        }
    }

    async createDistrict(req,res,next) {
        try {
            if(!utils.hasParams(req.body, ['state_id', 'district_name'])) {
                throw APIError.MissingParams;
            } 
            let obj = utils.pick(req.body, ['state_id', 'district_name']);
            let data = await districtService.createDistrict(obj);
            res.created(data);
        } catch (err) {
            next(err);
        }
    }
}


module.exports = DistrictController;
