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
    data:{ pageTitle: 'What is It?' }
  }).state( 'calendar', {
      url: '/calendar',
      parent:"city",
      views: {
          "content": {
              controller: 'calendarCtrl',
              templateUrl: 'plan_trip/calendar.tpl.html'

          }
      }
  })

      .state('dates', {
          url: '/dates',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'datesCtrl',
                  templateUrl: 'plan_trip/trip_dates.tpl.html'

              }
          }

      })
      .state('planning', {
          url: '/planning',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'planningCtrl',
                  templateUrl: 'plan_trip/planning.tpl.html'
              }
          }

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


