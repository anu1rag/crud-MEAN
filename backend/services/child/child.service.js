const model = require('../../models/child');

class ChildService {
    constructor() {
    }

    async getAllChild() {
        try{

            let data = await model.find({});
            return data;
        }
        catch(err){
            return err;
        }
    }

    async getChildByDistrict(request) {
        try{

            let data = await model.find({district_id: +request.district_id});
            return data;
        }
        catch(err){
            return err;
        }
    }

    async createChild(request) {
        try {
            let count = await model.find({district_id: +request.district_id}).count();
            request = {...{id:count+1},...request};
            let data = model.create(request);
            let response = await data.save(request);
            return response;
        } catch(err) {
            return err;
        }
    }    
}

module.exports = ChildService;