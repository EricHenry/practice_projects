//Module 
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Routing / configuration
weatherApp.config( function($routeProvider){
   
    $routeProvider
        .when('/', { 
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })  
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
     
});

weatherApp.directive('searchResult', function () {

 return {
        restrict: 'AE',
        templateUrl: 'directives/searchResult.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToDate: "&",
            convertToStandard: "&",
            dateFormat: "@"
        }}   

});