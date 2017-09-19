const routes = require('../../routes').bootstrap();
const { auth } = require('../middlewares');
const responseHandler = require('./responseHandler');

module.exports = async function(req, res) {
    try {
    // use global middlewares here.
        req.auth = await auth(req, res);
        const route = routes[req.url];
        if(!route){
            
            throw {status: 400, message: 'Not Found'};
        }
        const data = await route(req, res); 
        responseHandler(req, res, data);
    }
    catch(ex) {
        responseHandler(req, res, null, ex);
    }
     
}