const HttpStatus = require('http-status-codes');
module.exports = (req, res, next) => {
    res.sendResponse = (status, data) => {
      res.header('Content-Type', 'application/json');
      res.statusCode = status;
      return res.send(data);
    };
  
    res.success = (data = null, code = HttpStatus.OK) => {
      res.sendResponse(code, {
        status: true,
        data
      });
    };
  
    res.created = (data = null) => {
      res.sendResponse(HttpStatus.CREATED, {
        status: true,
        data
      });
    };
  
    res.accepted = (data = null) => {
      res.sendResponse(HttpStatus.ACCEPTED, {
        status: true,
        data
      });
    };
  
    res.badRequest = (message = 'required parameters missing or invalid') => {
      res.sendResponse(HttpStatus.BAD_REQUEST, {
        status: false,
        error: {
          code: HttpStatus.BAD_REQUEST,
          name: 'BAD_REQUEST',
          message
        }
      });
    };
  
    res.unAuthorized = (message = 'invalid authentication data') => {
      res.sendResponse(HttpStatus.UNAUTHORIZED, {
        status: false,
        error: {
          code: HttpStatus.UNAUTHORIZED,
          name: 'UNAUTHORIZED',
          message
        }
      });
    };
  
    res.forbidden = (message = 'authentication required') => {
      res.sendResponse(HttpStatus.FORBIDDEN, {
        status: false,
        error: {
          code: HttpStatus.FORBIDDEN,
          name: 'FORBIDDEN',
          message
        }
      });
    };
  
    res.notFound = (message = 'requested resource not available') => {
      res.sendResponse(HttpStatus.NOT_FOUND, {
        status: false,
        error: {
          code: HttpStatus.NOT_FOUND,
          name: 'NOT_FOUND',
          message
        }
      });
    };
  
    res.serverError = (message = 'Internal server error occurred') => {
      res.sendResponse(HttpStatus.INTERNAL_SERVER_ERROR, {
        status: false,
        error: {
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          name: 'INTERNAL_SERVER_ERROR',
          message
        }
      });
    };
  
    next();
    return;
  };