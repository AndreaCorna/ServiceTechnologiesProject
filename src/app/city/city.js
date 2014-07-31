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

.controller( 'CityCtrl', function CityCtrl( $scope, $stateParams, $log ,$cacheFactory, CityRes, CultureRes) {
  var $httpDefaultCache = $cacheFactory.get('$http');
  $httpDefaultCache.removeAll();
  $scope.$log= $log;
  $scope.cultureList = CultureRes.list.query({city_name:$stateParams.city_name});
  $scope.cultureDetails = function(id_culture){
      $scope.details = CultureRes.details.query({city_name:$stateParams.city_name,id_culture:id_culture});
  };

})

.factory( 'CityRes', function ( $resource )  {
        return $resource("../../city");
    })

.factory( 'CultureRes', function ($resource) {
        var cultureList = $resource("../../city/:city_name/culture");
        var cultureDetails = $resource("../../city/:city_name/culture/:id_culture");
        return {
            list: cultureList,
            details: cultureDetails
        };
        })

;

