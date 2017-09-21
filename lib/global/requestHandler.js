'use strict';
const routes = require('../../routes').bootstrap();
const { auth } = require('../middlewares');
const responseHandler = require('./responseHandler');
const { bodyParser, routeParser } = require('../utils');


module.exports = async function(req, res) {
    try {
    // use global middlewares here.
       // req.body = await bodyParser(req);
        req = await routeParser(req);
        const data = await req.controller(req, res);
        responseHandler(req, res, data);
    }
    catch(ex) {
        console.log(ex);
        responseHandler(req, res, null, ex);
    }
     
}