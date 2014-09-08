angular.module( 'trippo.city', [
  'ui.router',
  'placeholders',
  'ui.bootstrap' ,
  'trippo.resources',
  'trippo.modal',
  'infinite-scroll'
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

.controller('CultureCtrl', function CultureCtrl($scope,CultureRes,$stateParams,SelectionService,ModalHandler,InfiniteScrollHandler) {
        $scope.loaderEnabled = true;
        $scope.resource = CultureRes;

        $scope.cultureList = CultureRes.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;
            $scope.nextPageToken = $scope.cultureList[0].token;
            $scope.cultureList = $scope.cultureList[0].results;


            $scope.infiniteScroll = new InfiniteScrollHandler($scope.nextPageToken,$scope.cultureList);

        });



        $scope.setCultureDetails = function(culture_item){
            ModalHandler.setCultureDetails(culture_item);
        } ;

        $scope.addCultureItem = function(culture_item){
            $scope.cultureSelection = SelectionService.addCultureItem(culture_item,$scope.cultureList);
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


.controller('EntertainmentCtrl', function EntertainmentCtrl($scope,EntertainmentRes,$stateParams,SelectionService,ModalHandler,InfiniteScrollHandler) {
        $scope.loaderEnabled = true;
        $scope.resource =   EntertainmentRes;


        $scope.entertainmentList= EntertainmentRes.list.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;
            $scope.nextPageToken = $scope.entertainmentList[0].token;
            $scope.entertainmentList = $scope.entertainmentList[0].results;
            $scope.infiniteScroll = new InfiniteScrollHandler($scope.nextPageToken,$scope.entertainmentList);


        });




        $scope.setEntertainmentDetails = function (entertainment_item) {
            ModalHandler.setEntertainmentDetails(entertainment_item);
        };


        $scope.addEntertainmentItem = function(entertainment_item){
            $scope.entertainmentSelection = SelectionService.addEntertainmentItem(entertainment_item,$scope.entertainmentList);
        };

        $scope.removeEntertainmentItem = function(entertainment_item){
            $scope.entertainmentSelection = SelectionService.removeEntertainmentItem(entertainment_item,$scope.entertainmentList);
        };

        $scope.$watchCollection(function () { return SelectionService.getEntertainmentSelection(); }, function (newVal, oldVal) {
            $scope.entertainmentSelection = SelectionService.getEntertainmentSelection();
            if(!$scope.$$phase) {
                $scope.$apply();
            }

        });


})

.controller('UtilityCtrl', function UtilityCtrl($scope,UtilityRes,$stateParams,SelectionService,ModalHandler,InfiniteScrollHandler) {
        $scope.loaderEnabled = true;
        $scope.resource =   UtilityRes;


        $scope.utilityList = UtilityRes.list.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;
            $scope.nextPageToken = $scope.utilityList[0].token;
            $scope.utilityList = $scope.utilityList[0].results;
            $scope.infiniteScroll = new InfiniteScrollHandler($scope.nextPageToken,$scope.utilityList);

        });



        $scope.setUtilityDetails = function(id_utility){
           ModalHandler.setUtilityDetails(id_utility);
        };

        $scope.addUtilityItem = function(utility_item){
            $scope.utilitySelection = SelectionService.addUtilityItem(utility_item,$scope.utilityList);
        };

        $scope.removeUtilityItem = function(utility_item){
            $scope.utilitySelection = SelectionService.removeUtilityItem(utility_item,$scope.utilityList);
        };

        $scope.$watchCollection(function () { return SelectionService.getUtilitySelection(); }, function (newVal, oldVal) {
            $scope.utilitySelection = SelectionService.getUtilitySelection();
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        });



    })

.controller('HotelCtrl', function HotelCtrl($scope,HotelRes,$stateParams,SelectionService,ModalHandler,InfiniteScrollHandler) {
        $scope.loaderEnabled = true;
        $scope.resource =  HotelRes;

        $scope.hotelList = HotelRes.list.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;
            $scope.nextPageToken = $scope.hotelList[0].token;
            $scope.hotelList = $scope.hotelList[0].results;
            console.log($scope.nextPageToken);
            $scope.infiniteScroll = new InfiniteScrollHandler($scope.nextPageToken,$scope.hotelList);
        });

        $scope.setHotelDetails = function(id_hotel){
            ModalHandler.setHotelDetails(id_hotel);
        } ;


        $scope.addHotelItem = function(hotel_item){
            $scope.hotelSelection = SelectionService.addHotelItem(hotel_item);
        };

        $scope.removeHotelItem = function(hotel_item){
            $scope.hotelSelection = SelectionService.removeHotelItem(hotel_item);
        };

        $scope.$watchCollection(function () { return SelectionService.getHotelSelection(); }, function (newVal, oldVal) {
            $scope.hotelSelection = SelectionService.getHotelSelection();
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        });


})

.controller('FoodCtrl',function FoodCtrl($scope,FoodRes,$stateParams,SelectionService,ModalHandler,InfiniteScrollHandler){
        $scope.loaderEnabled = true;
        $scope.resource =   FoodRes;


        $scope.foodList = FoodRes.list.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;
            $scope.nextPageToken = $scope.foodList[0].token;
            $scope.foodList = $scope.foodList[0].results;
            $scope.infiniteScroll = new InfiniteScrollHandler($scope.nextPageToken,$scope.foodList);

        });

        $scope.setFoodDetails = function(id_food){
            ModalHandler.setFoodDetails(id_food);
        } ;


        $scope.addFoodItem = function(food_item){
            $scope.foodSelection = SelectionService.addFoodItem(food_item,$scope.foodList);
        };

        $scope.removeFoodItem = function(food_item){
            $scope.foodSelection = SelectionService.removeFoodItem(food_item,$scope.foodList);
        };

        $scope.$watchCollection(function () { return SelectionService.getFoodSelection(); }, function (newVal, oldVal) {
            $scope.foodSelection = SelectionService.getFoodSelection();
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        });

})

.factory('InfiniteScrollHandler', function ($stateParams) {

        var ScrollHandler = function(curr_token,list){
             this.itemList = list;
             this.busy = false;
             this.token =curr_token;
        };
        ScrollHandler.prototype.nextPage = function(resource,list){
            if (this.busy){return;}
            this.busy = true;
            this.itemList = list;



            if(this.token != null){
                var otherElements = resource.query({city_name: $stateParams.city_name, token: this.token},function(){

                    this.token = otherElements[0].token;

                    for(var i=0;i<otherElements[0].results.length;i++){
                        this.itemList.push(otherElements[0].results[i]);
                    }
                    this.busy = false;

                }.bind(this));
            }

        };
        return  ScrollHandler;



    
})




    .controller( 'CityCtrl', function CityCtrl( $scope, $stateParams, $log , CityRes,ModalHandler) {
        $scope.$log = $log;
        $scope.intervalImages = 5000;
        $scope.moreInfoSelection = null;
        $scope.modalEnabled = false;
        $scope.loaderEnabled = true;

        $scope.city = CityRes.details.query({city_name: $stateParams.city_name}, function () {
            $scope.images = $scope.city[0].images;
            $scope.city = $scope.city[0].details;
        });

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

