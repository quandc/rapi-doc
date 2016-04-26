'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.authSignInPOST = function authSignInPOST (req, res, next) {
  Default.authSignInPOST(req.swagger.params, res, next);
};

module.exports.messagesGET = function messagesGET (req, res, next) {
  Default.messagesGET(req.swagger.params, res, next);
};

module.exports.messagesMessageIdDELETE = function messagesMessageIdDELETE (req, res, next) {
  Default.messagesMessageIdDELETE(req.swagger.params, res, next);
};

module.exports.messagesMessageIdGET = function messagesMessageIdGET (req, res, next) {
  Default.messagesMessageIdGET(req.swagger.params, res, next);
};

module.exports.messagesMessageIdPUT = function messagesMessageIdPUT (req, res, next) {
  Default.messagesMessageIdPUT(req.swagger.params, res, next);
};

module.exports.messagesPOST = function messagesPOST (req, res, next) {
  Default.messagesPOST(req.swagger.params, res, next);
};
