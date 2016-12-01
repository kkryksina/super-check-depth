#!/usr/bin/env node

'use strict';

const assert = require('assert');

const url = process.argv[2];
const maxDepth = process.argv[3];

const checkDepth = require('./index.js');

if (!checkDepth(url, maxDepth)) {
    console.log('DOM depth is too big');
    process.exit();
}