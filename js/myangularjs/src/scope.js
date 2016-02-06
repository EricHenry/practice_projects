var _ = require("lodash");

"use strict";

// JavaScript functions are so called reference values, they are not
//  considered equal to anything but themselves. This will be used to uniquely
//  identify and initialize "this.$$watchers.last"
//
// This way new watches will always have their listener functions invoked, whatever their
//  watch functions might return
function initWatchVal() {}

function Scope(){

    //scope needs a place to store all of it's watchers
    // $$ means this property should be considered private to angular and not be called.
    this.$$watchers = [];
}

// The watch function takes two arguments and stores them in the $$waters array
Scope.prototype.$watch = function watch(watchFn, listenerFn){
    var watcher = {
        watchFn: watchFn,
        listenerFn: listenerFn || function() {},
        last: initWatchVal
    };

    this.$$watchers.push(watcher);
};

// iterate over all the regitered watchers and calls their listerner function (simple version)
Scope.prototype.$digest = function digest(){
    var newValue, oldValue;

    _.forEach(this.$$watchers, function __handler__(watcher){
        newValue = watcher.watchFn(this);
        oldValue = watcher.last;
        if (newValue !== oldValue) {
            watcher.last = newValue;
            watcher.listenerFn(newValue,
                oldValue === initWatchVal ? newValue : oldValue,
                this);
        }
    }.bind(this));
};

module.exports = Scope;
