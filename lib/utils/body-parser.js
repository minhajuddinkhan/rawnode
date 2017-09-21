'use strict';

const rb = require('raw-body');
const contentType = require('content-type');
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

module.exports = async function (req) {

    req.headers['content-type'] = req.headers['content-type'] || '';

    if(!req.headers['content-type'].includes('json')){
         throw { status: 400, message: 'Unhandled content-type'}
    }
    const buffer = await rb(req, {
        length: req.headers['content-length'],
        limit: '1mb',
        encoding: contentType.parse(req).parameters.charset
    });
    const strJSON = decoder.write(Buffer.from(buffer));
    return JSON.parse(strJSON);
}