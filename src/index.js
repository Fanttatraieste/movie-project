const key = require('./JavaScript/key').key;
const buildBody = require('./JavaScript/body');
const pageSelect = require('./JavaScript/numbers');
const searchTitle = require('./JavaScript/header');

searchTitle();
pageSelect(1);
buildBody(1, key);
