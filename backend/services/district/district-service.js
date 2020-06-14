const model = require('../../models/district');

class DistrictService {
    constructor() {
    }

    async getDistrict(query) {
        let data = await model.find({state_id:+query.state_id});
        return data;
    }

    async createDistrict(request) {
        let count = await model.find({state_id: request.state_id}).count();
        request = {...{id:count+1},...request};
        let data = model.create(request);
        let response = await data.save(request);
        return response;
    }    
}

module.exports = DistrictService;