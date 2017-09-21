'use strict';

const routes = require('../../routes');
const Route = require('route-parser');
module.exports = function (req) {
    return new Promise((resolve, reject) => {


        const route = Object.keys(routes).find((route) =>  (new Route(req.url).match(req.url)));

        if(!route) return reject({status: 404, message : 'Not Found'});
        if(route && route['method'] !== req.method) return reject({status: 404, message : 'Not Found'});

        req.params = req.match(req.url);
        req.controller = route['controller'];

        resolve();
    });


}