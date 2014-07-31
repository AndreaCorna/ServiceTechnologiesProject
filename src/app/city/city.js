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

.controller( 'CityCtrl', function CityCtrl( $scope, $stateParams, $log , CityRes, CultureRes) {
  $scope.$log= $log;
  $scope.cultureList = CultureRes.list.query({city_name:$stateParams.city_name});
  $scope.cultureDetails = function(id_culture){
      $scope.details = CultureRes.details.query({city_name:$stateParams.city_name,id_culture:id_culture});
  };
  /*
  metti lista selezione di culture entertaiment ecc liste complete
  servizi per gli oggetti selezionati.
  Ogni oggetto va tenuto con il json delle info base le info complete in redis
   */
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

