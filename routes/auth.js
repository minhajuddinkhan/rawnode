// url : controller key-value pair.

module.exports = {
    '/authenticate': authenticate
}

function authenticate(req, res){
    
    return new Promise((resolve, reject) => {
        resolve(req.body);
    })
}