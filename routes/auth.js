'use strict';

module.exports = {
    '/authenticate': {
        'POST': authenticate,

    }
};

function authenticate(req, res){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(req.body);
        },1000)
    })
}