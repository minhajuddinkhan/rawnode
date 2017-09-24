"use strict";

const responseHandler = require("./responseHandler");
const { bodyParser, routeParser } = require("../utils");


module.exports = async function(req, res) {
	try {
		// use global middlewares here.

		req.body = await bodyParser(req);
		const controller = await routeParser(req);
		if(!controller) throw {status: 400, message: "Route not found."};
		responseHandler(req, res, await controller(req, res));
	}
	catch(ex) {
		responseHandler(req, res, null, ex);
	}
     
};