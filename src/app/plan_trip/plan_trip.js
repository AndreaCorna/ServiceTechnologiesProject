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
    'common.mapsService',
    'common.mapDirections',
    'common.placeListDetails',
    'common.placeListMaps'



])


.factory('CityPlanningService',function(DatesService, localStorageService){
        /**
         * keep track of the range of dates defined for each city
         * hash key:city-name value:array of
         *
         */
        var city_ranges ={};
        var current_city;

        /**
         * Create the range of days for the respective city  keep track in city_ranges[city] and set current range in DatesService
         * @param city
         * @param start
         * @param end
         */
        var createRangeDatesCity = function(city,start,end){
            city_ranges[city] = DatesService.createRange(start, end);
            setRangeDatesCity(city);


        };
        /**
         * Set current range in dateService based on the city parameter
         * @param city
         */
        var setRangeDatesCity = function(city) {
            current_city = city ;
            //data already in memory
            if (city_ranges[city] !== undefined) {

                DatesService.initRange(city_ranges[city]);
            }
            else{
                // check if data is in local storage
                var local_storage = localStorageService.get(city+'plan_trip');
                console.log("plan trip local storage");
                console.log(local_storage);

                if( local_storage === null ){
                    console.log("DatesService.initRange empty");

                    //no data even in localStorage
                    DatesService.initRange([]);
                }
                else{
                    console.log("DatesService.initRange with localstorage");
                    city_ranges[city]   = local_storage;
                    DatesService.initRange(local_storage)  ;
                }

            }

        }  ;
        var removeRangeDatesCity = function(city){
            city_ranges[city]   = undefined;
            localStorageService.remove(city+'plan_trip');

        } ;



        var saveLocalStorage = function(){
            console.log("city_ranges");
            console.log(city_ranges);
            var data = city_ranges[current_city];
            localStorageService.set(current_city+'plan_trip', data);
            console.log("saved saveLocalStorage  in saveLocalStorage");
            console.log("current city ");
            console.log(current_city);
            console.log("city_ranges[current_city]");
            console.log(city_ranges[current_city]);
            console.log("city_ranges");
            console.log(city_ranges);
            console.log("get local storage");
            console.log(localStorageService.get(current_city+'plan_trip'));


        }  ;

        return {
            saveLocalStorage : saveLocalStorage,
            createRangeDatesCity : createRangeDatesCity,
            setRangeDatesCity : setRangeDatesCity,
            removeRangeDatesCity :  removeRangeDatesCity
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
    var range={};
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
            console.log("new Range of dates:");
            console.log(newrange);

            range = newrange;

        } ,
        /**
         * Generate the hash  of object which will represent the day schedule the key is the date in format dateFormat
         * @param start  start date of range
         * @param end   end date of range
         */
        createRange:function(start,end){
            var currentrange = {};
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
                var mymoment = moment(range[key].date);
                dateRange.push(mymoment);
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
.controller('DatesCtrl', function DatesCtrl($scope,DatesService,CityPlanningService,$stateParams,PlanningService) {
        console.log("initializing dates ctrl");

        $scope.dtstart=null;
        $scope.dtend=null;
        $scope.submitted =false;
        CityPlanningService.setRangeDatesCity($stateParams.city_name) ;
        $scope.dates = DatesService.getRangeDates();
        console.log("dates in dateCtrl");
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
                $scope.startOpened = true;
            }
            else if($event.target.id == "endbtn" || $event.target.parentNode.id == "endbtn"){
                $scope.endOpened = true;

            }

        };

        //don't show more info indirective place list
        $scope.dontShowMore = true;
        $scope.setModalDay = function (day) {
            console.log("$scope.dontShowMore");
            console.log($scope.dontShowMore);

            PlanningService.initializeCurrentDay(day.format(DatesService.dateFormat));
            $scope.dayTodo = PlanningService.getCurrentTodo();

        };




        /**
         * check if the form is valid and creates the range of date selected in the datepicker
         * @param form
         */
        $scope.next = function (form) {
            $scope.submitted = true;
            if (form.$valid) {
                console.log("dates difference");
                console.log($scope.dtend.getDate() -$scope.dtstart.getDate());

                var date_difference = $scope.dtend.getDate() -$scope.dtstart.getDate();
                if (date_difference>20) {
                    $scope.error =true ;
                    return ;
                }

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

.controller('PlanningCtrl', function PlanningCtrl(CityPlanningService,$scope,SelectionService,ModalHandler,PlanningService,$stateParams,StubHandler,commonResources) {
        /**
         * List of fuction which set the content of the modal when clicked More button in item
         */
        console.log("initializing planning ctrl");
        CityPlanningService.setRangeDatesCity($stateParams.city_name) ;

        $scope.setDetails = function(item) {
           ModalHandler.setDetailsItem(item,$stateParams.city_name);
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


        $scope.hotels =SelectionService.getHotelSelection($stateParams.city_name);
        $scope.culture =SelectionService.getCultureSelection($stateParams.city_name);
        $scope.entertainment =SelectionService.getEntertainmentSelection($stateParams.city_name);
        $scope.foods = SelectionService.getFoodSelection($stateParams.city_name);

        console.log("$scope.culture from selected");
        console.log($scope.culture);



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

        //saving to local storage every time the  selectedItems array is modified
        $scope.$watchCollection('selectedItems', function () {
            CityPlanningService.saveLocalStorage() ;

        });

        $scope.addToSchedule = function (item) {
            $scope.selectedItems =  PlanningService.addToSchedule(item);
            //open the map with the first item added


        };
        $scope.removeFromSchedule = function (item) {
            $scope.selectedItems =  PlanningService.removeFromSchedule(item);

        };

        $scope.moveBefore = function(item){
            $scope.selectedItems = PlanningService.movePlaceBefore(item);
        };
        $scope.moveAfter =function(item){
            $scope.selectedItems = PlanningService.movePlaceAfter(item);

        }   ;

        /**
         * return correct class based on the item tag
         * @param item   tag
         * @returns {string} class
         */
        $scope.getItemClass = function(item){
            return PlanningService.getItemClass(item)  ;
        };

        $scope.getCityName = function(){
            console.log("returning city name");
            
            return $stateParams.city_name;
        } ;

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
.factory('PlanningService', function (DatesService, CityPlanningService) {
        var current_schedule;
        var movePositionArray = function (array,old_index, new_index) {
            if (new_index >= array.length) {
                var k = new_index - array.length;
                while ((k--) + 1) {
                    array.push(undefined);
                }
            }
            array.splice(new_index, 0, array.splice(old_index, 1)[0]);
            return array; // for testing purposes
        };


        return {
            /**
             * set the current day of the schedule
             * @param day
             */
             initializeCurrentDay: function(day){
                console.log("initiliaze current day");
                console.log(day);


                 current_schedule = DatesService.getDay(day);
                console.log("current schedule ");
                console.log(current_schedule);


             },
            /**
             * remove items which were removed from the selectedItem in city page
             * @param selectedItems
             */

            removeUnselectedItems: function(selectedItems){


                if (current_schedule !== undefined) {
                    current_schedule.todo = current_schedule.todo.filter(function (current) {
                        return selectedItems.filter(function (current_b) {
                            return current_b.id == current.id;
                        }).length > 0;
                    });

                }
                console.log("current schedule after delete");
                console.log(current_schedule);
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
                current_schedule.todo =  current_schedule.todo.filter(function(current){
                    return item.id != current.id ;
                });
                return current_schedule.todo;
            },
            getCurrentTodo:function(){
                if (current_schedule !== undefined){
                    return current_schedule.todo;
                }
                    return [] ;

            } ,
            movePlaceBefore:function(item){
                var index = current_schedule.todo.indexOf(item);
                if (index > 0) {
                    current_schedule.todo =movePositionArray(current_schedule.todo,index, index-1);
                }
                return current_schedule.todo;

            } ,
            movePlaceAfter:function(item){
                var index = current_schedule.todo.indexOf(item);
                if (index < current_schedule.todo.length -1) {
                    current_schedule.todo = movePositionArray(current_schedule.todo,index, index+1);
                }
                return current_schedule.todo;


            }  ,
            /**
             * check if item is inside current day todo_ array
             * @param item
             * @returns {boolean}
             */
            isScheduled:function(item){
                var result = current_schedule.todo.filter(function( current ) {
                    return item.id == current.id ;
                });
                return result.length>0 ;
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

.controller('CreateTripCtrl',function CreateTripCtrl($stateParams,$scope,$location,DatesService,CityPlanningService,PlanningService, StubHandler,ModalHandler,commonResources,GuideRes,SelectionService,MapsService){
        $scope.dateFormat = DatesService.dateFormat;




        $scope.getCityName= function(){
            return $stateParams.city_name;
        };
        $scope.placeViews = ["DETAILS VIEW","MAPS VIEW"]   ;
        $scope.currentView =  $scope.placeViews[0];
        $scope.changeView = function() {
            var index =   $scope.placeViews.indexOf($scope.currentView);
            index++;

            if (index == $scope.placeViews.length){
                index = 0;
            }
            $scope.currentView = $scope.placeViews[index];
        }  ;



        CityPlanningService.setRangeDatesCity($stateParams.city_name) ;
        $scope.dates = DatesService.getRangeDates();


        $scope.getDayProgram = function(day){

            PlanningService.initializeCurrentDay(day.format(DatesService.dateFormat));
            return PlanningService.getCurrentTodo();  // CHANGE THIS TO    PlanningService.getCurrentTodo()
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

         $scope.getDayProgram = function(day){
         PlanningService.initializeCurrentDay(day.format(DatesService.dateFormat));
         return randomItemsc;  // CHANGE THIS TO    PlanningService.getCurrentTodo()
         };



         */
        //STUB END

        $scope.$on('fileuploadadd', function(event, data){
            //just one file per time so e

              data.scope.queue=[];

        });

        $scope.$on('fileuploaddone', function(event, data){
            console.log("fileupload done");
            $scope.imageFile = $(data.jqXHR.responseXML).find('Location').text() ;
            console.log("image file");
            console.log($scope.imageFile);

        });


        //geocoding the city to send infoabout lat and lng to createTrip
        var lat;
        var lng;
        MapsService.cityGeocode($stateParams.city_name,function(location){
            lat =  location.lat();
            lng = location.lng();
            lat = Math.round(lat*10000)/10000;   //rounding to make it flexible to small changes
            lng = Math.round(lng*10000)/10000;

        });

        $scope.createTrip = function (form) {
            console.log("lat and lng in createTrip");
            console.log(lat);
            console.log(lng);




            $scope.submitted = true;

            if   (form.$valid){
                var guide =  new GuideRes();
                guide.image = $scope.imageFile;
                guide.name = $scope.name ;
                guide.description = $scope.description ;
                guide.city = $stateParams.city_name   ;
                guide.image = $scope.imageFile;
                if(lat !==undefined && lng !== undefined)  {
                    guide.lat_lng = lat+':'+lng ;
                }
                else{
                    guide.lat_lng ='';
                }

                //hash key : day in dateFormat format value: array of activities in that day
                /**
                 * Adding all the day and their respective activities to  schedule hash
                 */
                var schedule = [];
                angular.forEach($scope.dates, function (value, key) {
                    var current_day =value;
                    var current_schedule = [] ;

                    angular.forEach($scope.getDayProgram(current_day), function (value, key) {
                          current_schedule.push(value);
                    });
                    var current_object ={
                        day :  current_day.format($scope.dateFormat),
                        schedule :  current_schedule
                    } ;
                    schedule.push(current_object);
                });

                guide.days = schedule;
                console.log("guide schedule");
                console.log(guide.schedule);

                guide.$save(function(data, status, headers, config) {
                    console.log("data back");
                    console.log(data);
                    if (data.message !== undefined) {
                        $scope.errorMessage  = data.message;

                    }
                    else{
                        CityPlanningService.removeRangeDatesCity($stateParams.city_name) ;
                        //redirect to user home when it will be
                        $location.path('/profile');
                        //clear all the selection of this city
                        SelectionService.clearAllSelection($stateParams.city_name )  ;



                    }
                });

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



