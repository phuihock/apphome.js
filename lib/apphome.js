/* jslint node: true */
"use strict";

var path = require('path');

module.exports = function(m, env){
    var home = process.env[env || 'APP_HOME'];
    var args = (home || process.cwd()).split(path.sep);
    if(typeof m !== 'undefined'){
        args = args.concat(m.split(path.sep));
    }
    return args.join(path.sep);
};
