var myApp = angular.module("myApp", ['ngRoute']);

/* */
myApp.config(function($routeProvider){
    //when it is an empty hash, get the main.html page and connect it to mainController
    //when the hash is equal to second, get the second.html page and connect it to mainController
    $routeProvider
    .when('/', { 
        templateUrl: 'js/pages/main.html',
        controller: 'mainController'
    })
    .when('/second/:num', {
        templateUrl: 'js/pages/second.html',
        controller: 'secondController'
    })
    .when('/second/', {
        templateUrl: 'js/pages/second.html',
        controller: 'secondController'
    })

});

myApp.service('nameService', function(){
   
    var self = this;
    this.name = 'Logan Gaifer';
    
    this.nameLength = function (){
        return self.name.length;
    };
    
    
});

