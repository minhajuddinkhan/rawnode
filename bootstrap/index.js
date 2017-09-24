"use strict";

const http = require('http');
const { requestHandler } = require('../lib/global');
const Sequelize = require('sequelize');

module.exports =  function () {


    return connectDb()
        .then(listen)
        .catch((err) => console.log(`SERVER FAILURE:: ${err}` ));

};



function listen() {
    http.createServer(requestHandler).listen(3000);
    console.log('listening to port 3000');

}

function connectDb() {

    const sequelize = new Sequelize('postgres', 'postgres', '123456', {
        host: 'postgres',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });
    return  sequelize.authenticate()

}

