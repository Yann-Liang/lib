const changeURL = require ('./url/changeURL'),
    getParamsByName = require('./url/getParamsByName'),
    getBrowserInfo=require('./js/getBrowserInfo');

// utils
const url = {
  changeURL,
  getParamsByName,
};
exports = {
    url,
    getBrowserInfo
};
