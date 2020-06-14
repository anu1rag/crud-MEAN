const APIError = require('../../constants/APIError');
module.exports =  (err, req, res, next) => {
    console.error(err);
    switch (err.name) {
      case APIError.MissingParams.name:
      case APIError.InvalidParams.name:
      case APIError.InvalidCredentials:
      case APIError.NumberAlreadyExist.name:
      case APIError.UserAlreadyExist.name:
      case APIError.DuplicateEntity.name:
        res.badRequest(err.message);
        break;
      case APIError.MissingToken.name:
      case APIError.InvalidToken.name:
      case APIError.NotAuthorized.name:
        res.unAuthorized(err.message);
        break;
      case APIError.EndpointNotFound.name:
      case APIError.EntityNotFound.name:
      case APIError.UserNotFound.name:
      case APIError.ServiceNotFound.name:
        res.notFound(err.message);
        break;
      case 'ValidationError':
        res.badRequest(APIError.MissingParams.message);
        break;
      case 'MongoError':
        switch (err.code) {
          case 11000:
            res.badRequest(APIError.DuplicateEntity.message);
            break;
          default:
            res.serverError();
            break;
        }
        break;
      default:
        res.serverError();
        break;
    }
  };