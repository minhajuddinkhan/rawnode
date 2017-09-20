'use strict';

const rb = require('raw-body');
const contentType = require('content-type');
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

module.exports = async function (req) {

    const buffer = await rb(req, {
        length: req.headers['content-length'],
        limit: '1mb',
        encoding: contentType.parse(req).parameters.charset
    });
    return decoder.write(Buffer.from(buffer));

}