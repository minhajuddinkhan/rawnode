const http = require('http');
const {requestHandler} = require('../lib/global')
module.exports = {
    start: () => {
        
        http.createServer(requestHandler).listen(3000);
        
    }
}
