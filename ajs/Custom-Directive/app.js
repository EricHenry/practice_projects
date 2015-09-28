var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.people= [
        { 
        name: 'John Doe',
        address: '555 Main St',
        city: 'New York', 
        state: 'NY', 
        zip: '11111'
        },
        { 
        name: 'Jane Doe',
        address: '222 Second St',
        city: 'Buffalo', 
        state: 'NY', 
        zip: '22222'
        },
        { 
        name: 'Gabe Doe',
        address: '111 Third St',
        city: 'Los Angles', 
        state: 'CA', 
        zip: '01234'
        }
    ];
    
    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive('searchResult', function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/searchResults.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
       /* compile: function(elem, attrs) {
            console.log('Compiling....');
            console.log(elem.html());
            
            return {
                
                post: function(scope, elements, attrs){
                    console.log('Post-linking...');
                    
                    console.log(scope);
                    
                    if(scope.personObject.name == 'Jane Doe'){
                        elements.removeAttr('class');
                    }
                    
                    console.log(elements);
                }
                
            }
        }*/
        link: function(scope, elements, attrs){
                    console.log('Linking...');
                    
                    console.log(scope);
                    
                    if(scope.personObject.name == 'Jane Doe'){
                        elements.removeAttr('class');
                    }
                    
                    console.log(elements);
        },
        transclude: true
    }

});