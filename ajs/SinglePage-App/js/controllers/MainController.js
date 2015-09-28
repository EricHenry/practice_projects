myApp.controller("mainController", ['$scope', '$location', '$log', 'nameService', function($scope, $location, $log, nameService){

    //$scope.name = 'Main';
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
       nameService.name = $scope.name; 
    });
    
    $log.log(nameService.name);
    $log.log(nameService.nameLength());
    
}]);  