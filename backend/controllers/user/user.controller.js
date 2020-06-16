const UserService = require('../../services/user/user.service');
const utils = require('../../utils/utils');
const APIError = require('../../constants/APIError');
const userService = new UserService();

class UserController {
    constructor() {

    }

    async get_user(req, res, next) {
        try {
            let response = await userService.get_user(req.query.user_id);
            res.success(response);
        } catch(err) {
            next(err);
        }
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

    async getUserByToken(req, res, next) {
        try {
            if(!utils.hasParams(req.query, ['token'])) {
                throw APIError.MissingParams;
            }
            let obj = utils.pick(req.query, ['token']);
            const user = await userService.getUserByToken(req.query.token);
            res.success(user);
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
            if(!utils.hasParams(req.body, 
            [ 
            'name',
            'username',
            'organization',
            'designation',
            'password',
            'confirm_password' 
            ]
            )) {
                throw APIError.MissingParams;
            }
            let obj = utils.pick(req.body, 
                [ 
                    'name',
                    'username',
                    'organization',
                    'designation',
                    'password',
                    'confirm_password' 
                ]);
            const response = await userService.register(obj);
            res.success(response);
        } catch(err) {
            next(err);
        }

    }
}

module.exports = UserController;