const model = require('../../models/district');

class DistrictService {
    constructor() {
    }

    async getDistrict(query) {
        try{
            let data = await model.find({state_id:+query.state_id});

            return data;
        }
        catch(err){
            return err;
        }
    }

    async createDistrict(request) {
        try{
            let count = await model.find({state_id: request.state_id}).count();
            request = {...{id:count+1},...request};
            let data = model.create(request);
            let response = await data.save(request);
          return response;
        } catch(err) {
            return err;
        }
    }    
}

module.exports = DistrictService;