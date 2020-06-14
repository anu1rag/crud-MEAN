const model = require('../../models/state');


class StateService {
    constructor() {
    }

    async getState() {
        let data = await model.find({});
        return data;
    }

    async createState(request) {
        let count = await model.find({}).countDocuments();
        request = {...{id : count+1},...request};
        let state = new model(request);
        let response = await state.save();
        return response;
    }    
}

module.exports = StateService;