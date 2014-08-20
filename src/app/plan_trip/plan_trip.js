/**
 * Created by Lorenzo on 14/08/14.
 */
angular.module('trippo.plan',[
    'ui.router',
    'ui.bootstrap',
    'ngResource'
])







.controller('CalendarCtrl', function CalendarCtrl($scope, $state,$stateParams,DatesService) {
        $scope.dtstart=null;
        $scope.dtend=null;
        $scope.submitted =false;

        $scope.next = function (form) {
        $scope.submitted =true;
            if (form.$valid) {
                var now = moment();
                console.log(now);
                DatesService.createRangeDates($scope.dtstart,$scope.dtend) ;
                $state.transitionTo('dates',{city_name: $stateParams.city_name});
            }

        };



})
.factory('DatesService', function () {
    var range=[];

    return {
        createRangeDates:function(start,end){

            for (var m = moment(start); m.isBefore(moment(end).add(1, 'days')); m.add(1, 'days')) {
                console.log(m.format('DD MMMM YYYY'));
                range.push(m);
            }

            }
        };
})



.controller('DatesCtrl', function DatesCtrl($scope) {


})

.controller('PlanningCtrl', function PlanningCtrl($scope) {


});



 
