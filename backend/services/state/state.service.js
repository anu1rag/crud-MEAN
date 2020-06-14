const model = require('../../models/state');


class StateService {
    constructor() {
    }

    async getState() {
        try{
            let data = await model.find({});
            return data;
        }
        catch(err){
            return err;
        }
    }

    async createState(request) {
        try{
            let count = await model.find({}).count();
            request = {...{state_id : count+1},...request};
            let state = model.create(request);
            let response = await state.save(request);
          return response;
        } catch(err) {
            return err;
        }
    }    
}

module.exports = StateService;