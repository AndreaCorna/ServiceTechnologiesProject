/**
 * Created by Lorenzo on 14/08/14.
 */
angular.module('trippo.plan',[
    'ui.router',
    'ui.bootstrap',
    'ngResource'
])







.controller('calendarCtrl', function calendarCtrl($scope, $log) {
        $scope.dtstart=null;
        $scope.dtend=null;
        $scope.$log= $log;


        $scope.next = function () {
              $log.log("start "+$scope.dtstart+" end "+$scope.dtend) ;
        };



})

.controller('datesCtrl', function datesCtrl($scope) {


})

.controller('planningCtrl', function planningCtrl($scope) {


});



 
