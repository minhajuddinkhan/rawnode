module.exports = function() {
	return new Promise( ( resolve ) => {
		setTimeout( () => {
			return resolve( "passed through middleware" );
		}, 0 );
	} );
};
