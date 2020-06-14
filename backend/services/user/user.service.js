const model = require('../../models/user');
const APIError = require('../../constants/APIError');
const AuthMiddleware = require('../../middlewares/auth/auth');
const bcrypt = require('bcrypt');
const authMiddleware = new AuthMiddleware();
class UserService {
    constructor() {
    }

    async login(request) {
        let user = await model.findOne({username: request.username});
        if(!user){
            throw APIError.UserNotFound;
        } 
        let valid_password = await bcrypt.compare(request.password, user.password);
        if(!valid_password) {
            throw APIError.InvalidCredentials;
        } 
        let token = await authMiddleware.createToken({username:user.username});
        return token;
    }

    async register(request) {
        let user = await model.findOne({username: request.username});
        if(user) {
            throw APIError.UserAlreadyExist;
        }   
        let count = await model.find({}).countDocuments();
        request.password = await bcrypt.hash(request.password, 8);
        request = {...{id : count+1}, ...request};
        let user = new model(request);
        let response = await user.save();
        return response;
  }

}

module.exports = UserService;