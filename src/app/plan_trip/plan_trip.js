/**
 * Created by Lorenzo on 14/08/14.
 */
angular.module('trippo.plan',[
    'ui.router',
    'ui.bootstrap',
    'ngResource',
    'angular-sortable-view'
])


/**
 * Gets the start and end date from the view
 */
.controller('CalendarCtrl', function CalendarCtrl($scope, $state,$stateParams,DatesService) {
        $scope.dtstart=null;
        $scope.dtend=null;
        $scope.submitted =false;

        $scope.next = function (form) {
        $scope.submitted =true;
            if (form.$valid) {
                DatesService.createRangeDates($scope.dtstart,$scope.dtend) ;
                $state.transitionTo('dates',{city_name: $stateParams.city_name});
            }

        };



})
/**
 * createRangesDates
 * params start start date of the range
 * params end  end date of the range
 * create a range between this dates and saved it in range variable
 */
.factory('DatesService', function () {
    var range=[];

    return {
        createRangeDates:function(start,end){
            range=[];
            for (var m = moment(start); m.isBefore(moment(end).add(1, 'days')); m.add(1, 'days')) {
                console.log(m.format('DD MMMM YYYY'));
                var curr_day = angular.copy(m);
                range.push(curr_day);
                }

            },
        getRange:function(){
            return range;
        }
        };
})


/**
 * gets the range of dates generated by the create range.
 */
.controller('DatesCtrl', function DatesCtrl($scope,DatesService) {
        $scope.dtstart=null;
        $scope.dtend=null;
        $scope.submitted =false;
        $scope.dates = DatesService.getRange();
         console.log($scope.dates);
        /**
         * open the start or end datepicker based on which button is pushed
         * @param $event
         */
        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            /*Checking if icon or button(its parent) has been pushed*/
            if($event.target.id == "startbtn" || $event.target.parentNode.id == "startbtn") {
                console.log($event.target.id);

                $scope.startOpened = true;
            }
            else if($event.target.id == "endbtn" || $event.target.parentNode.id == "endbtn"){
                $scope.endOpened = true;

            }



        };
        /**
         * check if the form is valid and creates the range of date selected in the datepicker
         * @param form
         */
        $scope.next = function (form) {
            $scope.submitted = true;
            if (form.$valid) {
                DatesService.createRangeDates($scope.dtstart, $scope.dtend);
                $scope.dates = DatesService.getRange();
            }
        };


        /**
         * list fo format for handle different date format inside the view
         * @type {string}
         */
        $scope.datePickerFormat ="dd-MM-yyyy";
        $scope.dateFormat ="DD-MM-YYYY";
        $scope.dayFormat = "DD";
        $scope.monthFormat = "MMM";
        $scope.yearFormat ="YYYY";





})

.controller('PlanningCtrl', function PlanningCtrl($scope) {
        $scope.selectedItems =["1","2","3","4","5","6","7","8","9"];
        $scope.hotels =["1","2","3","4","5","6","7","8","9"];
        $scope.culture =["1","2","3","4","5","6","7","8","9"];




    });



 
