"use strict";

module.exports = {
	"/authenticate": {
		"POST": authenticate

	}
};

function authenticate( req ) {
    
	return new Promise( ( resolve ) => {
		setTimeout( () => {
			resolve( req.body );
		}, 1000 );
	} );
}
