const model = require('../../models/user');
const APIError = require('../../constants/APIError');
const AuthMiddleware = require('../../middlewares/auth/auth');
const bcrypt = require('bcrypt');
const authMiddleware = new AuthMiddleware();
class UserService {
    constructor() {
    }

    async get_user(request) {
        let user = await model.findById(request, {password: 0});
        return user;
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
        let registeration = new model(request);
        let response = await registeration.save();

        console.log(response);
        let token = await authMiddleware.createToken({username: request.username});
        console.log(token);
        return token;
  }

  async getUserByToken(token) {
    let id = await authMiddleware.parseToken(token);
    let user = await model.findOne({username: id['username']}, {password: 0});
    return user;
  }

}

module.exports = UserService;