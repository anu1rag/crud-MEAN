const model = require('../../models/child');

class ChildService {
    constructor() {
    }

    async getAllChild() {
        let data = await model.find({});
        return data;
        try{

           
        }
        catch(err){
            return err;
        }
    }

    async getChildByDistrict(request) {
        let data = await model.find({district_id: +request.district_id});
        return data;
    }

    async createChild(request) {
        let count = await model.find({district_id: +request.district_id}).count();
        request = {...{id:count+1},...request};
        let data = model.create(request);
        let response = await data.save(request);
        return response;
    }    
}

module.exports = ChildService;