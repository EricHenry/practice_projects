myApp.controller("secondController", ['$scope', '$location', '$log', '$routeParams', 'nameService', function($scope, $location, $log, $routeParams, nameService){

    $scope.num = $routeParams.num || 1;
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
       nameService.name = $scope.name; 
    });
    
}]);  