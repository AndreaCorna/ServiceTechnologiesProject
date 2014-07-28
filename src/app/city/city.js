angular.module( 'places.city', [
  'ui.state',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'city', {
    url: '/city',
    views: {
      "main": {
        controller: 'CityCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'CityCtrl', function CityCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.

})
.factory( 'CityRes', function ( $resource )  {
        return $resource('../city.json');
    })
;


