"use strict";

var Scope = require("../src/scope");

describe("Scope", function describeScope(){

    it("can be constructed and used as an object", function scopeTest1() {

        //var scope = Object.create(Scope);
        var scope = new Scope();
        scope.aProperty = 1;

        expect(scope.aProperty).toBe(1);

    });

    describe("digest", function describeDigest(){

        var scope;

        beforeEach(function initializeScope(){
            //scope = Object.create(Scope);
            scope = new Scope();
        });

        // in this test we invoke $watch to register a watcher on the scope. Not interested in the 
        //  watch function just yet, so just return a constant value
        //
        // a watcher is something that is notified when a change occurs on the scope.
        //
        // Jasmine's spy is a kind of mock function, can tell us "was this function called?" and
        //  "what arguements was it called with?"
        it("calls the listener function of a watch on first $digest", function testDigest1(){
            var watchFn = function  watch(){ return "wat"; };
            var listenerFn = jasmine.createSpy();
            scope.$watch(watchFn, listenerFn);

            scope.$digest();

            expect(listenerFn).toHaveBeenCalled();

        });

        it("calls the watch function with the scope as an argument", function arguementProvided(){
            var watchFn = jasmine.createSpy();
            var listenerFn = function() { };
            scope.$watch(watchFn, listenerFn);

            scope.$digest();

            expect(watchFn).toHaveBeenCalledWith(scope);
        });

        it("calls the listener function when the watched value changes", function callAfterChange(){
            scope.someValue = "a";
            scope.counter = 0;

            scope.$watch(
                function(scope) { return scope.someValue; },
                function(newValue, oldValue, scope) { scope.counter++; }
            );

            expect(scope.counter).toBe(0);

            scope.$digest();
            expect(scope.counter).toBe(1);

            scope.$digest();
            expect(scope.counter).toBe(1);

            scope.someValue = 'b';
            expect(scope.counter).toBe(1);

            scope.$digest();
            expect(scope.counter).toBe(2);


        });

    });

});