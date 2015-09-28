weatherApp.controller('forecastController', ['$scope', '$log', '$routeParams', 'cityService', 'weatherService', function($scope, $log, $routeParams, cityService, weatherService){
    
    $scope.city = cityService.city;
    
    //double pipe adds a default option
    $scope.days = $routeParams.days || '2';
    
    $log.log('ForecastController scope.city = ' + $scope.city);
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
    $log.info($scope.weatherResult);
    
    $scope.convertToFahrenheit = function(degK){
        
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt) {
        
        //the date given by api is in milliseconds so multiply by 1000
        return new Date(dt * 1000);
    
    }
    
}]);