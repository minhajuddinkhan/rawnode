
const auth = require('./auth');

module.exports = {
    bootstrap : () => {
        let routes = {};

        routes = Object.assign(routes,
            auth
        );
        return routes;

    }
}