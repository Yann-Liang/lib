const changeURL = require ('./url/changeURL'),
    getParamsByName = require('./url/getParamsByName'),
    getBrowserInfo = require('./js/getBrowserInfo'),
    toUnicode = require('./js/toUnicode'),
    isMobile=require('./js/isMobile');

// utils
const url = {
    changeURL,
    getParamsByName,
};
module.exports = {
    url,
    getBrowserInfo,
    toUnicode,
    isMobile
};
