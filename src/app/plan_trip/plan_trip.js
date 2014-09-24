/**
 * Created by Lorenzo on 14/08/14.
 */
angular.module('trippo.plan',[
    'ui.router',
    'ui.bootstrap',
    'trippo.resources',
    'angular-sortable-view',
    'trippo.city',
    'trippo.modal',
    'common.maps'
])


.factory('CityPlanningService',function(DatesService){
        /**
         * keep track of the range of dates defined for each city
         * hash key:city-name value:array of
         * @type {Array}
         */
        var city_ranges =[];

        /**
         * Create the range of days for the respective city  keep track in city_ranges[city] and set current range in DatesService
         * @param city
         * @param start
         * @param end
         */
        var createRangeDatesCity = function(city,start,end){
             city_ranges[city] = DatesService.createRange(start,end);
            setRangeDatesCity(city);


        };
        /**
         * Set current range in dateService based on the city parameter
         * @param city
         */
        var setRangeDatesCity = function(city) {

            if (city_ranges[city] !== undefined) {

                DatesService.initRange(city_ranges[city]);
            }
            else{
                DatesService.initRange([]);
            }

        }  ;

        return {
            createRangeDatesCity : createRangeDatesCity,
            setRangeDatesCity : setRangeDatesCity
        }   ;
    })

/**
 * createRangesDates
 * params start start date of the range
 * params end  end date of the range
 * create a range between this dates and saved it in range variable
 */
.factory('DatesService', function () {
        /**
         * keep track of the range of days
         * hash key: date in dateFormat format value: day_schedule defined in  createRange function
         * @type {Array}
         */
    var range=[];
    var  dateFormat="DD-MM-YYYY";


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


    return {
        /**
         * format used in url to describe specific date and represent the key of the hashmap range
         */
        dateFormat :dateFormat,

        /**
         * function used ot initialize current range of date for the current city
         * @param newrange range passed from the cityPlanningService
         */
        initRange : function(newrange) {

            range = newrange;

        } ,
        /**
         * Generate the hash  of object which will represent the day schedule the key is the date in format dateFormat
         * @param start  start date of range
         * @param end   end date of range
         */
        createRange:function(start,end){
            var currentrange = [];
            var dates =createRangeDates(start,end);
            angular.forEach(dates, function (value, index) {
                var day_schedule = {
                    date: value,
                    todo: [],
                    name:"",
                    description:""
                };

                var key =   value.format(dateFormat);

                currentrange[key]=day_schedule;

            });

             return currentrange;

        },
        /**
         * return the list of object representing day schedule
         * @params day is the day which want to retrive in format DatesService.dateFormat i.e. (29-11-2005) the same format as the url parameter
         * @returns {Array}
         */
        getDay:function(day){

            return range[day];
        } ,
        /**
         * return the range of dates of the day schedule objects
         * @returns {Array}
         */
        getRangeDates:function(){
            var dateRange=[] ;
            console.log("getRangeDate in datesservice  range");
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

            return dateRange;
        }
        };
})


/**
 * gets the range of dates generated by the create range.
 */
.controller('DatesCtrl', function DatesCtrl($scope,DatesService,CityPlanningService,$stateParams) {

        $scope.dtstart=null;
        $scope.dtend=null;
        $scope.submitted =false;
        CityPlanningService.setRangeDatesCity($stateParams.city_name) ;
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

                CityPlanningService.createRangeDatesCity($stateParams.city_name,$scope.dtstart, $scope.dtend);
                $scope.dates = DatesService.getRangeDates();
                console.log("scope dates");
                console.log($scope.dates);


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

.controller('PlanningCtrl', function PlanningCtrl($scope,SelectionService,ModalHandler,PlanningService,$stateParams,StubHandler,commonResources) {

        /**
         * List of fuction which set the content of the modal when clicked More button in item
         */
        $scope.setCultureDetails = function(id_culture){
            ModalHandler.setDetailsByResource(commonResources.CultureRes,id_culture);
        };
        $scope.setEntertainmentDetails = function(id_entertainment){
            ModalHandler.setDetailsByResource(commonResources.EntertainmentRes,id_entertainment);
        };
        $scope.setHotelsDetails = function(id_hotel){
            ModalHandler.setDetailsByResource(commonResources.HotelRes,id_hotel);
        };
        $scope.setFoodDetails = function(id_food){
            ModalHandler.setDetailsByResource(commonResources.FoodRes,id_food);
        };
        //START STUB
        /*

         StubHandler.createFakeDates();
        var randomItemsc = [];
        var  randomItemse = [];
        var  randomItemsh = [];
        var  randomItemsf = [];

        for (var i = 0; i < 8; i++) {
            randomItemsc.push(StubHandler.getItemRandom("culture"));
            randomItemse.push(StubHandler.getItemRandom("entertainment"));
            randomItemsh.push(StubHandler.getItemRandom("hotel"));
            randomItemsf.push(StubHandler.getItemRandom("food"));
        }

        $scope.culture =randomItemsc;
        $scope.entertainment = randomItemse;
        $scope.hotels =randomItemsh;
        $scope.foods =randomItemsf;


        */

        //END STUB
        //get the item selected in the selectionService and set the current daySchedule removing item which has been removed from the Selection service

        $scope.current_day = moment($stateParams.date,"DD-MM-YYYY");


        $scope.hotels =SelectionService. getHotelSelection($stateParams.city_name);
        $scope.culture =SelectionService.getCultureSelection($stateParams.city_name);
        $scope.entertainment =SelectionService.getEntertainmentSelection($stateParams.city_name);
        $scope.foods = SelectionService.getFoodSelection($stateParams.city_name);


        var selectedItems = [].concat($scope.culture,$scope.hotels,$scope.entertainment,$scope.foods) ;
        PlanningService.initializeCurrentDay($stateParams.date);
        PlanningService.removeUnselectedItems(selectedItems)  ;


        $scope.isScheduled = function (item) {
              return PlanningService.isScheduled(item);
        };
        /**
         * loading the previously chosen items
         */
        $scope.selectedItems =PlanningService.getCurrentTodo();

        $scope.addToSchedule = function (item) {
            $scope.selectedItems =  PlanningService.addToSchedule(item);
            //open the map with the first item added


        };
        $scope.removeFromSchedule = function (item) {
            $scope.selectedItems =  PlanningService.removeFromSchedule(item);

        };
        /**
         * return correct class based on the item tag
         * @param item   tag
         * @returns {string} class
         */
        $scope.getItemClass = function(item){
            return PlanningService.getItemClass(item)  ;
        };

        /**
         *MAPS HANDLING
         * current start and destination variable for the map
         */

        $scope.origin=undefined;
        $scope.destination=undefined;
        $scope.setMapsDirections = function (start) {
            $scope.origin = start;
            var index_dest = $scope.selectedItems.indexOf(start)+1;
            $scope.destination = ($scope.selectedItems[index_dest] === undefined) ? $scope.selectedItems[index_dest-1] : $scope.selectedItems[index_dest];

            $scope.currentMarker =undefined;
            $scope.currentSelectedMap  = {place :$scope.origin, type:"direction"};
        };

        $scope.currentMarker = undefined;
        $scope.setMapsMarker = function (item) {
            $scope.currentMarker = item  ;
            //making undefined origin and destination because no more available in map.. Important to allow update of the value
            $scope.origin = undefined;
            $scope.destination =undefined;
            $scope.currentSelectedMap  = {place :$scope.currentMarker, type:"marker"};


        };

        //keep track of which is the last item pressed which is linked to origin and destination of the map (used to highline this item)
        $scope.currentSelectedMap = undefined;
        $scope.isCurrentMap= function(value,type){

            if ( $scope.currentSelectedMap!== undefined  && value == $scope.currentSelectedMap.place && type == $scope.currentSelectedMap.type) {
                return true;
            }
            return false;
        } ;







})
.factory('PlanningService', function (DatesService) {
        var current_schedule;


        return {
            /**
             * set the current day of the schedule
             * @param day
             */
             initializeCurrentDay: function(day){
                console.log("initiliaze current day");
                console.log(day);

                 current_schedule = DatesService.getDay(day);

             },
            /**
             * remove items which were removed from the selectedItem in city page
             * @param selectedItems
             */
            removeUnselectedItems: function(selectedItems){
                if (current_schedule !== undefined) {
                    angular.forEach(current_schedule.todo, function (value, key) {
                        if (selectedItems.indexOf(value) == -1) {
                            var index = current_schedule.todo.indexOf(value);
                            current_schedule.todo.splice(index, 1);
                        }
                    });
                }
            } ,
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
                if (current_schedule !== undefined){
                    return current_schedule.todo;
                }
                    return [] ;

            } ,
            /**
             * check if item is inside current day todo_ array
             * @param item
             * @returns {boolean}
             */
            isScheduled:function(item){
                return current_schedule.todo.indexOf(item)>-1 ;
            } ,
            /**
             * return correct class based on the item tag
             * @param item   tag
             * @returns {string} class
             */
            getItemClass : function(item){

            switch (item.tag){
                case "culture" :
                    return "culture-color" ;
                case "entertainment":
                    return "entertainment-color";
                case "hotel":
                    return "hotel-color";
                case "food":
                    return "food-color";
                }
            }

    };


})

.controller('CreateTripCtrl',function CreateTripCtrl($stateParams,$scope,DatesService,CityPlanningService,PlanningService, StubHandler,ModalHandler,commonResources,GuideRes,$document,$http){
        $scope.dateFormat = DatesService.dateFormat;


        $scope.setCultureDetails = function(id_culture){
            ModalHandler.setDetailsByResource(commonResources.CultureRes,id_culture);
        };

        //STUB START
         /*
        StubHandler.createFakeDates();
        var randomItemsc = [];
        var  randomItemse = [];
        var  randomItemsh = [];
        var  randomItemsf = [];

        for (var i = 0; i < 8; i++) {
            randomItemsc.push(StubHandler.getItemRandom("culture"));
            randomItemse.push(StubHandler.getItemRandom("entertainment"));
            randomItemsh.push(StubHandler.getItemRandom("hotel"));
            randomItemsf.push(StubHandler.getItemRandom("food"));
        }
         */
        //STUB END


        CityPlanningService.setRangeDatesCity($stateParams.city_name) ;
        $scope.dates = DatesService.getRangeDates();

        $scope.getDayProgram = function(day){

            PlanningService.initializeCurrentDay(day.format(DatesService.dateFormat));
            return PlanningService.getCurrentTodo();  // CHANGE THIS TO    PlanningService.getCurrentTodo()
        };

        $scope.createTrip = function (form) {
            $scope.submitted = true;
            if   (form.$valid){
                console.log("submitted");


            }

        };



        /**
         * return correct class based on the item tag
         * @param item   tag
         * @returns {string} class
         */
        $scope.getItemClass = function(item){

            return PlanningService.getItemClass(item);
        };

        $scope.generatePdf = function() {

            $('.substitute').each(function(index){
                console.log($(this).attr('ng-src'));
               var url = $(this).attr('ng-src');
               $http({method:'GET',url:url}).
                   success(function(data,status,headers,config){
                       console.log(headers);
                   var imgData = 'data:image/jpeg;base64,/9j/'+btoa(encodeURIComponent(data));
                       console.log(imgData);
                   $(this).removeAttr('ng-src');
                   $(this).attr('src',imgData);
                   });
            });

            var myDocument = $document[0];
            var JSPDF = jsPDF;
            var doc = new JSPDF('p','pt','a4');
            console.log($document[0].all);
            console.log('jquery');
            console.log($('.prova').attr('ng-src'));
            //myDocument.all.cityMap = imgData;


            doc.addHTML(myDocument.all,function() {

                var string = doc.output('datauristring');
                console.log(string);
                $('.preview-pane').attr('src', string);
            });
            //console.log(doc);
        };

    })

.factory('StubHandler', function (DatesService,$stateParams,CityPlanningService) {
    function makestring(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
        return {
            createFakeDates: function(){
                CityPlanningService.setRangeDatesCity($stateParams.city_name) ;
                DatesService.createRange(moment(), moment());
            } ,
            getItemRandom : function(type){
                var image1 = {image : "http://ilmiomappamondo.files.wordpress.com/2014/02/londra2.jpg"} ;
                var image2 = {image : "assets/images/empty_photo.png"} ;

                return {
                    id:"fdsfsd",
                    name: makestring(),
                    photos : [image1,image2],
                    tag:type,
                    lat:45,
                    lng:23

                };
            }
        };
});



