const model = require('../../models/child');

class ChildService {
    constructor() {
    }

    async getAllChild(request) {
        let pages = 0;
        if(request.pages<0 || request.pages == 0) {
            pages = 0;
        } else {
            pages = +request.pages-1
        }
        let data = await model.find({}).populate({
            path: 'district_id',
            populate: {path:'state_id'}
        }).limit(+request.limit).skip(pages).exec();
        return data;
    }

    async getChildByDistrict(request) {
        let data = await model.find({district_id: request.district_id});
        return data;
    }

    async createChild(request) {
        
        let count = await model.find({}).countDocuments();
        request = {...{id : count+1},...request};
        let child = new model(request);
        let response = await child.save();
        return response;
    }    
}

module.exports = ChildService;