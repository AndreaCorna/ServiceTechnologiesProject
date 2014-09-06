/**
 * Created by Lorenzo on 14/08/14.
 */
angular.module('trippo.plan',[
    'ui.router',
    'ui.bootstrap',
    'ngResource',
    'angular-sortable-view',
    'trippo.city',
    'trippo.modal'
])



/**
 * createRangesDates
 * params start start date of the range
 * params end  end date of the range
 * create a range between this dates and saved it in range variable
 */
.factory('DatesService', function () {
    var range=[];


        /**
         * generate a range of moments(dates)
         * @param start
         * @param end
         * @returns {Array|*}  return array containing range of dates
         */
    var createRangeDates = function(start,end){
        var datesRange=[];
        for (var m = moment(start); m.isBefore(moment(end).add(1, 'days')); m.add(1, 'days')) {
            var curr_day = angular.copy(m);
            datesRange.push(curr_day);
        }
        return datesRange;

    } ;
    var  dateFormat="DD-MM-YYYY";

    return {
        /**
         * format used in url to describe specific date and represent the key of the hashmap range
         */
        dateFormat :dateFormat,
        /**
         * Generate the hash  of object which will represent the day schedule the key is the date in format dateFormat
         * @param start  start date of range
         * @param end   end date of range
         */
        createRange:function(start,end){
            var dates =createRangeDates(start,end);
            angular.forEach(dates, function (value, index) {
                var day_schedule = {
                    date: value,
                    todo: [],
                    name:"",
                    description:""
                };
                console.log("Range key:");
                var key =   value.format(dateFormat);
                console.log(key);

                range[key]=day_schedule;

            });
            console.log("dates schedule");
            console.log(range);


        },
        /**
         * return the list of object representing day schedule
         * @params day is the day which want to retrive in format DatesService.dateFormat i.e. (29-11-2005) the same format as the url parameter
         * @returns {Array}
         */
        getDay:function(day){
            console.log("days in range");
            for (var o in range) {
                console.log(o);

            }
            return range[day];
        } ,
        /**
         * return the range of dates of the day schedule objects
         * @returns {Array}
         */
        getRangeDates:function(){
            var dateRange=[] ;
            console.log("range indateas");
            console.log(range);
            for (var key in range) {
                dateRange.push(range[key].date);
            } /*
            angular.forEach(range, function (value, key) {
                console.log("value");
                console.log(value);

                dateRange.push(value.date);
            });
            */
            console.log(dateRange);

            return dateRange;
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
        $scope.dates = DatesService.getRangeDates();
        /**
         * open the start or end datepicker based on which button is pushed
         * @param $event
         */
        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            /*Checking if icon or button(its parent) has been pushed*/
            if($event.target.id == "startbtn" || $event.target.parentNode.id == "startbtn") {
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
                DatesService.createRange($scope.dtstart, $scope.dtend);
                $scope.dates = DatesService.getRangeDates();
            }
        };


        /**
         * list fo format for handle different date format inside the view
         * @type {string}
         */
        $scope.datePickerFormat ="dd-MM-yyyy";
        $scope.dateFormat =DatesService.dateFormat;
        $scope.dayFormat = "DD";
        $scope.monthFormat = "MMM";
        $scope.yearFormat ="YYYY";





})

.controller('PlanningCtrl', function PlanningCtrl($scope,SelectionService,ModalHandler,PlanningService,$stateParams,StubHandler) {
        /**
         * List of fuction which set the content of the modal when clicked More button in item
         */
        $scope.setCultureDetails = function(id_culture){
            ModalHandler.setCultureDetails(id_culture);
        };
        $scope.setEntertainmentDetails = function(id_entertainment){
            ModalHandler.setEntertainmentDetails(id_entertainment);
        };
        $scope.setHotelsDetails = function(id_hotel){
            ModalHandler.setHotelsDetails(id_hotel);
        };
        $scope.setFoodDetails = function(id_food){
            ModalHandler.setFoodDetails(id_food);
        };

        var randomItemsc = [];
        var  randomItemse = [];
        var  randomItemsh = [];
        var  randomItemsf = [];

        for (var i = 0; i < 8; i++) {
            randomItemsc.push(StubHandler.getItemRandom());
        }
        for (var g = 0; i < 8; i++) {
            randomItemse.push(StubHandler.getItemRandom());
        }
        for (var f = 0; i < 8; i++) {
            randomItemsh.push(StubHandler.getItemRandom());
        }
        for (var a = 0; i < 8; i++) {
            randomItemsf.push(StubHandler.getItemRandom());
        }
        $scope.culture =randomItemsc;
        $scope.entertainment = randomItemse;
        $scope.hotel =randomItemsh;
        $scope.food =randomItemsf;




        //get the item selected in the selectionService and set the current daySchedule removing item which has been removed from the Selection service
        $scope.hotels =SelectionService. getHotelSelection();
        $scope.culture =SelectionService.getCultureSelection();
        $scope.entertainment =SelectionService.getEntertainmentSelection();
        $scope.foods = SelectionService.getFoodSelection();
        var selectedItems = $scope.culture.concat($scope.hotels,$scope.entertainment,$scope.foods) ;
        PlanningService.initializeCurrentDay($stateParams.date,selectedItems);


        $scope.isScheduled = function (item) {
              return PlanningService.isScheduled(item);
        };

        $scope.selectedItems =PlanningService.getCurrentTodo();
        $scope.addToSchedule = function (item) {
            $scope.selectedItems =  PlanningService.addToSchedule(item);

        };
        $scope.removeFromSchedule = function (item) {
            $scope.selectedItems =  PlanningService.removeFromSchedule(item);

        };




})
.factory('PlanningService', function (DatesService) {
        var current_schedule;


        return {
            /**
             * set the current day of the schedule removing item which were removed from the selectedItem in city page
             * @param day
             */
             initializeCurrentDay: function(day,selectedItems){

                 current_schedule = DatesService.getDay(day);
                angular.forEach(current_schedule.todo, function (value, key) {
                     if(selectedItems.indexOf(value)==-1){
                         var index =current_schedule.todo.indexOf(value);
                         current_schedule.todo.splice(index, 1);
                     }
                });
             },
            /**
             * add item to the todo_ array of schedule
             * @param item
             * @returns {*|day_schedule.todo_}  item of the current day
             */
            addToSchedule:function(item){
                var index = current_schedule.todo.indexOf(item);
                if (index==-1){
                    current_schedule.todo.push(item);
                }
                return current_schedule.todo;

            },
            /**
             * remove item to the toodo array of schedule
             * @param item
             * @returns {*|day_schedule.todo_}  item of the current day
             */
            removeFromSchedule:function(item){
                var index = current_schedule.todo.indexOf(item);
                if (index > -1) {
                    current_schedule.todo.splice(index, 1);
                }
                return current_schedule.todo;
            },
            getCurrentTodo:function(){
                return current_schedule.todo;
            } ,
            /**
             * check if item is inside current day todo_ array
             * @param item
             * @returns {boolean}
             */
            isScheduled:function(item){
                return current_schedule.todo.indexOf(item)>-1 ;
            }
        };


})

.factory('StubHandler', function () {
    function makestring(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
        return {
            getItemRandom : function(){
                return {
                    id:"fdsfsd",
                    name: makestring(),
                    photos : ["http://ilmiomappamondo.files.wordpress.com/2014/02/londra2.jpg","assets/images/empty_photo.png"]

                };
            }
        };
});



