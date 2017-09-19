
const auth = require('./auth');

module.exports = {
    bootstrap : () => {
    let routes = {};
    
    routes = Object.assign(
    {},
    auth);
    
    
    return routes;    
    }
    
}