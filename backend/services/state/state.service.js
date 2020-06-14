const model = require('../../models/state');
const APIError = require('../../constants/APIError');

class StateService {
    constructor() {
    }

    async getState() {
        let data = await model.find({});
        return data;
    }

    async createState(request) {
        let state_name = await model.findOne({state_name:request.state_name});
        if(state_name) {
            throw APIError.DuplicateEntity;
        }
        let count = await model.find({}).countDocuments();
        request = {...{id : count+1},...request};
        let state = new model(request);
        let response = await state.save();
        return response;
    }    
}

module.exports = StateService;