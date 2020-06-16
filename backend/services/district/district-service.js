const model = require('../../models/district');
const APIError = require('../../constants/APIError');

class DistrictService {
    constructor() {
    }

    async getDistrict() {
        let data = await model.find({}).populate('state_id');
        return data;
    }

    async getDistrictByState(value) {
        let data = await model.find(value);
        return data;
    }

    async createDistrict(request) {
        let district_name = await model.findOne({state_id: request.state_id, district_name:request.district_name});
        if(district_name) {
            throw APIError.DuplicateEntity;
        }
        let count = await model.find({}).countDocuments();
        request = {...{id : count+1},...request};
        let district = new model(request);
        let response = await district.save();
        return response;
    }    
}

module.exports = DistrictService;