
const auth = require('./auth');
let routes = {};

module.exports = {
    bootstrap : () => {

        routes = Object.assign(routes,
            auth
        );
        return routes;
    },
    require: () => routes
};