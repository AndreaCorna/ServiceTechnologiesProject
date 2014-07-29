angular.module( 'places.city', [
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
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'CityCtrl', function CityCtrl( $scope, $log , CityRes) {
  $scope.city =   CityRes.query();
  $scope.$log= $log;


})

.factory( 'CityRes', function ( $resource )  {
        return $resource("../../city");
    })
;


