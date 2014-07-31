angular.module( 'trippo.city', [
  'ui.router',
  'placeholders',
  'ui.bootstrap' ,
  'ngResource'

])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'city', {
    url: '/city/:city_name',
    views: {
      "main": {
        controller: 'CityCtrl',
        templateUrl: 'city/city.tpl.html'
      }
    },
    data:{ pageTitle: 'City' }
  });
})

.controller( 'CityCtrl', function CityCtrl( $scope, $log , CityRes, CultureRes) {
  $scope.city =   CityRes.query();
  $scope.$log= $log;
  $scope.cultureList = CultureRes.list.query();

})

.factory( 'CityRes', function ( $resource )  {
        return $resource("../../city");
    })

.factory( 'CultureRes', function ($resource) {
        var cultureList = function ($resource) {
            return $resource("../../city/:city_name/culture", {city_name: "@city_name"});

        };

        var cultureDetails = function($resource,id_culture){
            return $resource("../../city/:name_city/culture/:id_culture", {name_city: "@city_name",id_culture:id_culture});
        };

        return {
            list:function (){
                cultureList($resource);},
            details:function (id_culture){
            cultureDetails($resource,id_culture);}
        };
        })

;

