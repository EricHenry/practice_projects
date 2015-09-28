weatherApp.service('weatherService', ['$resource', '$log', function($resource, $log){
   
    this.GetWeather = function(city, days){
        //hold the api call
        var weatherAPI = $resource(
            "http://api.openweathermap.org/data/2.5/forecast/daily", 
            {callback:"JSON_CALLBACK"}, 
            {get:{method:"JSONP"}});

        
        //call the get api with the two parameters
        return weatherAPI.get({ q:city, cnt:days});
    }
}]);
                   