weatherApp.controller('homeController', ['$scope', '$log', '$location', 'cityService', function($scope, $log, $location, cityService){
    
    $scope.city = cityService.city;
    
    //watch scope's city attribute and update cityService when it is changed
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
        //$log.info('cityService.city = ' + cityService.city);
    });
    
    $scope.submit = function (){
        $location.path("/forecast");
    };
    
}]);