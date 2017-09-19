module.exports = function(request, response, data, err){
 
    
    let status =  200;
    response.writeHead(status,
                       {"Content-Type": "application/json"});
    const responseMessage = {};
    responseMessage[err? 'err' : 'data'] = err ? err: data;
    response.write(JSON.stringify(responseMessage));
    response.end();
}