function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();
    //console.log(agent);
    //agent chrome : mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/41.0.2272.89 safari/537.36
    //agent firefox : mozilla/5.0 (windows nt 6.1; wow64; rv:42.0) gecko/20100101 firefox/42.0
    //agent IE11: mozilla/5.0 (windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729;
    //接上.net clr 3.0.30729; media center pc 6.0;infopath.2; .net4.0c; .net4.0e; rv:11.0) like gecko
    //可以看出IE11中不包括MSIE字段;
    //agent IE10: mozilla/5.0(compatible; msie 10.0; windows nt 6.1; wow64; trident/6.0)
    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi;
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;
    //IE11以下
    if (agent.indexOf('msie') > 0) {
        return agent.match(regStr_ie);
    }
    //IE11版本中不包括MSIE字段
    if (agent.indexOf('trident') > 0 && agent.indexOf('rv') > 0) {
        return 'IE ' + agent.match(/rv:(\d+\.\d+)/)[1];
    }
    //firefox
    if (agent.indexOf('firefox') > 0) {
        return agent.match(regStr_ff);
    }
    //Chrome
    if (agent.indexOf('chrome') > 0) {
        return agent.match(regStr_chrome);
    }
    //Safari
    if (agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0) {
        return agent.match(regStr_saf);
    }
}


exports=getBrowserInfo