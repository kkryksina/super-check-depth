'use strict';

const request = require('sync-request');
const parse5 = require('parse5');


function checkDepth(url, maxDepth) {
    const body = getBody(url);
    const document = parseBody(body);
    const depth = getDepth(document);
    return depth < maxDepth; 
}

function getBody(url) {
    const response = request('GET', url);
    return response.getBody('utf8');
}

function parseBody(body) {
    return parse5.parse(body);
}

function getDepth(document) {
    if (!document.childNodes) {
        return 1;
    }
    var depthesOfChildren = document.childNodes.map(getDepth);
    return 1 + Math.max(...depthesOfChildren);
}

module.exports = checkDepth;




