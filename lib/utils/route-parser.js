'use strict';

const routes = require('../../routes').require();
const Route = require('route-parser');
module.exports = function (req) {
    return new Promise((resolve, reject) => {

        let _match = null;
        const route = Object.keys(routes).find((route) =>  {
            _match =  new Route(route).match(req.url);
            return _match;
        });

        if(!route) return reject({status: 404, message : 'Not Found'});

        const ctrl =  routes[route][req.method];
        req.params = ctrl
            ?  _match
            : {};

        resolve(ctrl);
    });


}