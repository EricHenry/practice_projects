//declares your app in the global namespace
//angular is a global object that has code for module (which is a function)
//takes the name of the app and an array of dependencies
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);


myApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter, $log) {

    $scope.handle = '';
    
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    
    //how many characters the twitter name can be
    $scope.characters = 5;
    
    $scope.rules = [
    
        { rulename: "Must be 5 characters"},
        { rulename: "Must not be used elsewhere"},
        { rulename: "Must be cool"}
        
    ];
    
    $log.log($scope.rules);
    
    
}]);

//any code in here will be associated in controlling the html with the custom 
//  attributes called 'mainController'
/*myApp.controller('mainController', function($scope, $log, $filter, $resource) {
   // console.log($scope);
    
    $scope.name = 'John';
    $scope.formatted_name = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formatted_name);
   
    
}); 

//any code in here will be associated in controlling the html with the custom 
//  attributes called 'mainController'
myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

    //$scope acts as a model, anyhting inside the scope is available to the html code that this controller is attached to.
    $scope.name = 'Eric';
    
    $timeout(function(){
        
        $scope.name = 'Everybody';
        
    }, 3000);
    
}]);

 */
