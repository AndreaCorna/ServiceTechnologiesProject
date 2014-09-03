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
  })
      .state('culture', {
          url: '/culture',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'CultureCtrl',
                  templateUrl: 'city/culture.tpl.html'

              }
          }

      })
      .state('hotel', {
          url: '/hotel',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'HotelCtrl',
                  templateUrl: 'city/hotel.tpl.html'

              }
          }

      })
      .state('entertainment', {
          url: '/entertainment',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'EntertainmentCtrl',
                  templateUrl: 'city/entertainment.tpl.html'

              }
          }

      })
      .state('utility', {
          url: '/utility',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'UtilityCtrl',
                  templateUrl: 'city/utility.tpl.html'

              }
          }

      })

      .state('food', {
          url: '/food',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'FoodCtrl',
                  templateUrl: 'city/food.tpl.html'

              }
          }

      })


      .state('dates', {
          url: '/dates',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'DatesCtrl',
                  templateUrl: 'plan_trip/trip_dates.tpl.html'

              }
          }

      })

      .state('planning', {
          url: '/planning/:date',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'PlanningCtrl',
                  templateUrl: 'plan_trip/planning.tpl.html'
              }
          }

      });

})

.controller('CultureCtrl', function CultureCtrl($scope,CultureRes,$stateParams,SelectionService,ModalHandler) {
        $scope.loaderEnabled = true;
        $scope.cultureList = CultureRes.list.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;});
        $scope.getCultureDetails = function(id_culture){
            console.log("selection "+$scope.cultureSelection);
            console.log("currently selected  "+id_culture);

            var data;

            CultureRes.details.query({city_name: $stateParams.city_name, id_culture: id_culture},function(response){
                data =response;
                console.log(data[0].name);
                ModalHandler.setDetails(data[0]);


            });


        };
        $scope.addCultureItem = function(culture_item){
            $scope.cultureSelection = SelectionService.addCultureItem(culture_item,$scope.cultureList);
            console.log(ModalHandler.details);
        };


        $scope.removeCultureItem = function(culture_item){
            $scope.cultureSelection = SelectionService.removeCultureItem(culture_item,$scope.cultureList);
        };

        $scope.$watchCollection(function () { return SelectionService.getCultureSelection(); }, function (newVal, oldVal) {
                $scope.cultureSelection = SelectionService.getCultureSelection();
                if(!$scope.$$phase) {
                    $scope.$apply();
                }

        });

})


.controller('EntertainmentCtrl', function EntertainmentCtrl($scope,EntertainmentRes,$stateParams,SelectionService,ModalHandler) {
        $scope.loaderEnabled = true;
        $scope.entertainmentList= EntertainmentRes.list.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;});
        $scope.getEntertainmentDetails = function(id_entertainment){
            console.log("selection "+$scope.cultureSelection);
            console.log("currently selected  "+id_entertainment);

            var data;

            EntertainmentRes.details.query({city_name: $stateParams.city_name, id_entertainment: id_entertainment},function(response){
                data =response;
                console.log(data[0].name);
                ModalHandler.setDetails(data[0]);


            });


        };

        $scope.addEntertainmentItem = function(entertainment_item){
            $scope.entertainmentSelection = SelectionService.addEntertainmentItem(entertainment_item,$scope.entertainmentList);
        };

        $scope.removeEntertainmentItem = function(entertainment_item){
            $scope.entertainmentSelection = SelectionService.removeEntertainmentItem(entertainment_item,$scope.entertainmentList);
        };

        $scope.$watchCollection(function () { return SelectionService.getEntertainmentSelection(); }, function (newVal, oldVal) {
            $scope.cultureSelection = SelectionService.getEntertainmentSelection();
            if(!$scope.$$phase) {
                $scope.$apply();
            }

        });


})

.controller('UtilityCtrl', function UtilityCtrl($scope,UtilityRes,$stateParams,SelectionService,ModalHandler) {
        $scope.loaderEnabled = true;
        $scope.utilityList = UtilityRes.list.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;});
        $scope.getUtilityDetails = function(id_utility){
            console.log("selection "+$scope.cultureSelection);
            console.log("currently selected  "+id_utility);

            var data;

            UtilityRes.details.query({city_name: $stateParams.city_name, id_utility: id_utility},function(response){
                data =response;
                console.log(data[0].name);
                ModalHandler.setDetails(data[0]);


            });


        };
        $scope.addUtilityItem = function(utility_item){
            $scope.utilitySelection = SelectionService.addUtilityItem(utility_item,$scope.utilityList);
        };

        $scope.removeUtilityItem = function(utility_item){
            $scope.utilitySelection = SelectionService.removeUtilityItem(utility_item,$scope.utilityList);
        };

        $scope.$watchCollection(function () { return SelectionService.getUtilitySelection(); }, function (newVal, oldVal) {
            $scope.cultureSelection = SelectionService.getUtilitySelection();
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        });



    })

.controller('HotelCtrl', function HotelCtrl($scope,HotelRes,$stateParams,SelectionService,ModalHandler) {
        $scope.loaderEnabled = true;
        $scope.hotelList = HotelRes.list.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;});
        $scope.getHotelDetails = function(id_hotel){
            console.log("selection "+$scope.cultureSelection);
            console.log("currently selected  "+id_hotel);

            var data;

            HotelRes.details.query({city_name: $stateParams.city_name, id_hotel: id_hotel},function(response){
                data =response;
                console.log(data[0].name);
                ModalHandler.setDetails(data[0]);


            });


        };
        $scope.addHotelItem = function(hotel_item){
            $scope.hotelSelection = SelectionService.addHotelItem(hotel_item);
        };

        $scope.removeHotelItem = function(hotel_item){
            $scope.hotelSelection = SelectionService.removeHotelItem(hotel_item);
        };


})

.controller('FoodCtrl',function FoodCtrl($scope,FoodRes,$stateParams,SelectionService,ModalHandler){
        $scope.loaderEnabled = true;
        $scope.foodList = FoodRes.list.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;});
        $scope.getFoodDetails = function(id_food){
            console.log("selection "+$scope.cultureSelection);
            console.log("currently selected  "+id_food);

            var data;

            FoodRes.details.query({city_name: $stateParams.city_name, id_food: id_food},function(response){
                data =response;
                console.log(data[0].name);
                ModalHandler.setDetails(data[0]);
            });
        };

        $scope.addFoodItem = function(food_item){
            $scope.foodSelection = SelectionService.addFoodItem(food_item,$scope.foodList);
        };

        $scope.removeFoodItem = function(food_item){
            $scope.foodSelection = SelectionService.removeFoodItem(food_item,$scope.foodList);
        };

        $scope.$watchCollection(function () { return SelectionService.getFoodSelection(); }, function (newVal, oldVal) {
            $scope.cultureSelection = SelectionService.getFoodSelection();
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        });

})




.factory('ModalHandler', function () {
    var details;
    /*Modify the format of the opening hour addin a : between numbers 08:00 instead of 0800*/
    var normalizeHours = function (details){
        if(details.open_hours !== null){
            for (var i=0;i<details.open_hours.periods.length;i++){
                console.log("called function");
                var day = details.open_hours.periods[i] ;
                details.open_hours.periods[i].open.time = day.open.time.substr(0, 2) + ":" + day.open.time.substr(2);
                details.open_hours.periods[i].close.time = day.close.time.substr(0, 2) + ":" + day.close.time.substr(2);

            }
        }
    }  ;
        return {
            getDetails: function () {
                return details;
            },
            setDetails: function(value) {
                normalizeHours(value);
                details = value;
            }
        };
})

    .controller( 'CityCtrl', function CityCtrl( $scope, $stateParams, $log , CityRes,ModalHandler) {
        $scope.$log= $log;
        $scope.intervalImages = 5000;
        $scope.moreInfoSelection=null;
        $scope.modalEnabled = false;
        $scope.loaderEnabled = true;
        $scope.city = CityRes.details.query({city_name:$stateParams.city_name});
        /**
         * Added a watch to update scope.moreInfoSelection which is set every time a moreInfo button is pushed
         */
        $scope.$watchCollection(function () { return ModalHandler.getDetails(); }, function (newVal, oldVal) {
            $scope.loaderEnabled = true;
            if (typeof newVal !== 'undefined') {
                $scope.moreInfoSelection = ModalHandler.getDetails();
                $scope.modalEnabled = true;
            }
            $scope.loaderEnabled = false;

        });
        $scope.disableModal = function(){
            $scope.modalEnabled = false;
            $scope.loaderEnabled = true;
        };



    })
/**
 * modify the value of the hour which comes from Google Api in a format of HH:mm
 */
.filter('hourFilter', function () {
    return function (input) {
       if (input !==undefined) {
           var hourFormat = input.substr(0, 2) + ":" + input.substr(2);
           console.log(hourFormat);
           return hourFormat;
       }
    };
})

.factory( 'CityRes', function ( $resource )  {
        var listCities = $resource("../../city/");
        var detailsCity = $resource("../../city/:city_name");
        var getCityDetails = function(){
            return detailsCity;
        };
        return{
            list:listCities,
            details:detailsCity,
            getCityDetails : getCityDetails
        };
    })

.factory( 'CultureRes', function ($resource) {
        var cultureList = $resource("../../city/:city_name/culture");
        var cultureDetails = $resource("../../city/:city_name/culture/:id_culture");
        return {
            list: cultureList,
            details: cultureDetails
        };
        })

.factory('UtilityRes',function($resource){
        var utilityList = $resource("../../city/:city_name/utility");
        var utilityDetails = $resource("../../city/:city_name/utility/:id_utility");
        return{
            list:utilityList,
            details:utilityDetails
        };


})

.factory('EntertainmentRes',function($resource){
        var entertainmentList = $resource("../../city/:city_name/entertainment");
        var entertainmentDetails = $resource("../../city/:city_name/entertainment/:id_entertainment");
        return{
           list:entertainmentList,
           details:entertainmentDetails
         };
})

.factory('HotelRes',function($resource){
        var hotelList = $resource("../../city/:city_name/hotels");
        var hotelDetails = $resource("../../city/:city_name/hotels/:id_hotel");
        return{
            list:hotelList,
            details:hotelDetails
        };

})

.factory('FoodRes',function($resource){
        var foodList = $resource("../../city/:city_name/food");
        var foodDetails = $resource("../../city/:city_name/food/:id_food");
        return{
            list:foodList,
            details:foodDetails
        };
})

.service('SelectionService',function(){
        var cultureSelection = [];
        var utilitySelection = [];
        var hotelSelection = [];
        var entertainmentSelection = [];
        var foodSelection = [];
        return{
            addCultureItem:function (culture_item,cultureList) {

                if(cultureSelection.indexOf(culture_item) == -1) {
                    cultureSelection.push(culture_item);
                    var index = cultureList.indexOf(culture_item);
                    cultureList.splice(index,1);
                }
                return cultureSelection;

            },

            removeCultureItem:function (culture_item,cultureList) {
                var index = cultureSelection.indexOf(culture_item);
                if(index != -1) {
                    cultureSelection.splice(index, 1);
                    cultureList.push(culture_item);
                }
                return cultureSelection;

            },

            getCultureSelection:function () {
                return cultureSelection;
            },

            addUtilityItem:function (utility_item,utilityList) {
                if(utilitySelection.indexOf(utility_item) == -1) {
                    utilitySelection.push(utility_item);
                    var index = utilityList.indexOf(utility_item);
                    utilityList.splice(index,1);
                }
                return utilitySelection;

            },

            removeUtilityItem:function (utility_item,utilityList) {
                var index = utilitySelection.indexOf(utility_item);
                if(index != -1) {
                    utilitySelection.splice(index, 1);
                    utilityList.push(utility_item);
                }
                return utilitySelection;

            },

            getUtilitySelection:function(){
               return utilitySelection;
            },

            addHotelItem:function (hotel_item) {
                if(hotelSelection.indexOf(hotel_item) == -1) {
                    hotelSelection.push(hotel_item);
                }
                return hotelSelection;

            },

            removeHotelItem:function (hotel_item) {
                var index = hotelSelection.indexOf(hotel_item);
                if(index != -1) {
                    hotelSelection.splice(index, 1);
                }
                return hotelSelection;

            },

            getHotelSelection:function(){
                return hotelSelection;
            },

            addEntertainmentItem:function (entertainment_item,entertainmentList) {
                if(entertainmentSelection.indexOf(entertainment_item) == -1) {
                    entertainmentSelection.push(entertainment_item);
                    var index = entertainmentList.indexOf(entertainment_item);
                    entertainmentList.splice(index,1);
                }
                return entertainmentSelection;

            },
            removeEntertainmentItem:function (entertainment_item, entertainmentList) {
                var index = entertainmentSelection.indexOf(entertainment_item);
                if (index != -1) {
                    entertainmentSelection.splice(index, 1);
                    entertainmentList.push(entertainment_item);
                }
                return entertainmentSelection;
            },

            getEntertainmentSelection:function(){
                return entertainmentSelection;
            },

            addFoodItem:function(food_item,foodList){
                if(foodSelection.indexOf(food_item) == -1){
                    foodSelection.push(food_item);
                    var index = foodList.indexOf(food_item);
                    foodList.splice(index,1);
                }
                return foodSelection;
            },

            removeFoodItem:function(food_item,foodList){
                var index = foodSelection.indexOf(food_item);
                if (index != -1) {
                    foodSelection.splice(index, 1);
                    foodList.push(food_item);
                }
                return foodSelection;
            },

            getFoodSelection:function(){
                return foodSelection;
            },

            getSelections:function(){
                return{
                    listCulture:cultureSelection,
                    listUtility:utilitySelection,
                    listHotel:hotelSelection,
                    listEntertainment:entertainmentSelection,
                    listFood:foodSelection
                };
            }
         };
    })

;

