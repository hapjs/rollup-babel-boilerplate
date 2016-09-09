(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

function now() {
    return new Date();
}

function yestoday() {
    return new Date(now().getTime() - 1000 * 60 * 60 * 24);
}

function add(a, b) {
    return a + b;
}

document.write('<p>yestoday is ' + yestoday() + '</p>');
document.write('<p>1 + 2 = ' + add(1, 2) + '</p>');

})));