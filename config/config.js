var x1             = x1 || {};
x1.config          = x1.config || {};
x1.config.language = x1.config.language || (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage).split('-')[0];


//
//  get default decimal- and thousands-separator
//  from localstring
//
var _n_ = (1234.5678).toLocaleString ? ((1234.5678).toLocaleString()) : '1234.5678';
var fn = function(s, s1, s2) {
    var a = s.indexOf(s1);
    var b = s.indexOf(s2);
    if (b > a + 1) {
        return s.substring(a + 1, b);
    }
    return null;
}

x1.config.thousandsSeparator = x1.config.thousandsSeparator || fn(_n_, "1", "2") || '';
x1.config.decimalSeparator   = x1.config.decimalSeparator   || fn(_n_, "4", "5") || '.';
x1.config.decimals           = x1.config.decimals           || (_n_.length - _n_.indexOf('5')) || 2;

delete fn;