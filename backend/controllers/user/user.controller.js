const UserService = require('../../services/user/user.service');
const AuthMiddleware = require('../../middlewares/auth/auth');
const utils = require('../../utils/utils');
const APIError = require('../../constants/APIError');
const authMiddleware = new AuthMiddleware();
const userService = new UserService();

class UserController {
    constructor() {

    }

    async login(req, res, next) {
        try {
            if(!utils.hasParams(req.body, ['username', 'password'])) {
                throw APIError.MissingParams;
            }
            let obj = utils.pick(req.body, ['username', 'password']);
            const token = await userService.login(obj);
            res.success(token);
        } catch(err) {
            next(err);
        }


    }

    async logout(req, res, next) {
        try {
            res.send({token:null});
        } catch(err) {
            next(err);
        }
    }

    async register(req, res, next) {
        try {
            if(!utils.hasParams(req.body, ['username', 'password'])) {
                throw APIError.MissingParams;
            }
            let obj = utils.pick(req.body, ['username', 'password']);
        } catch(err) {
            next(err);
        }

    }
}