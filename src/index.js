const changeURL = require ('./url/changeURL'),
    getParamsByName = require('./url/getParamsByName'),
    getBrowserInfo = require('./js/getBrowserInfo');
    toUnicode=require('./js/toUnicode');

// utils
const url = {
  changeURL,
  getParamsByName,
};
exports = {
    url,
    getBrowserInfo,
    toUnicode
};
