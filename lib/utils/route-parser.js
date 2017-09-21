'use strict';

const routes = require('../../routes').require();
const Route = require('route-parser');
module.exports = function (req) {
    return new Promise((resolve, reject) => {


        const route = Object.keys(routes).find((route) =>  {
           return new Route(route).match(req.url);
        });

        if(!route) return reject({status: 404, message : 'Not Found'});
        if(route && req['method'] !== req.method) return reject({status: 404, message : 'Not Found'});

        req.params = new Route(route).match(req.url);
        req.controller = routes[route].controller;

        resolve(req);
    });


}