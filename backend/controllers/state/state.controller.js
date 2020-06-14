const StateService = require('../../services/state/state.service')
const stateService = new StateService();
const utils = require('../../utils/utils');
const APIError = require('../../constants/APIError');

class StateController {
    constructor() {}


    async getState(req,res,next) {
        try {
            let result = await stateService.getState();
            res.success(result);
        } catch(err) {
            next(err);
        }

    }

    async createState(req,res,next) {
        try {
            console.log(req.body);
            if(!utils.hasParams(req.body, ['state_name'])) {
                throw APIError.MissingParams;
            } 
            let obj = utils.pick(req.body, ['state_name']);
            let data = await stateService.createState(obj);
            res.created(data);
        } catch (err) {
            next(err);
        }
    }
}


module.exports = StateController;
