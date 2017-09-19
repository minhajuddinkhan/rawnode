const routes = require('../../routes').bootstrap();
const { auth } = require('../middlewares');
const responseHandler = require('./responseHandler');

module.exports = async function(req, res) {
    try {
    // use global middlewares here.
        const data = await auth(req, res);    
        responseHandler(req, res, data);
    }
    catch(ex) {
        responseHandler(req, res, null, ex);
    }
     
}