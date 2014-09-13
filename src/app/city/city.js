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

.controller('CultureCtrl', function CultureCtrl(CultureService,$scope,CultureRes,$stateParams,SelectionService,ModalHandler,InfiniteScrollHandler) {
        $scope.loaderEnabled = true;
        $scope.resource = CultureRes;

        CultureService.initCultureList($stateParams.city_name,function (){
            //setting the infinite scroll after cultureService initialization through callback function
            $scope.infiniteScroll =  CultureService.getInfinityScroll($stateParams.city_name);
        }) ;







        $scope.setCultureDetails = function(culture_item){
            ModalHandler.setDetailsByResource($scope.resource ,culture_item);
        } ;

        $scope.addCultureItem = function(culture_item){
            $scope.cultureSelection = SelectionService.addCultureItem(culture_item,$stateParams.city_name);
        };


        $scope.removeCultureItem = function(culture_item){
            $scope.cultureSelection = SelectionService.removeCultureItem(culture_item,$stateParams.city_name);
        };

        $scope.$watchCollection(function () { return SelectionService.getCultureSelection($stateParams.city_name); }, function (newVal, oldVal) {
                $scope.cultureSelection = SelectionService.getCultureSelection($stateParams.city_name);
                if(!$scope.$$phase) {
                    $scope.$apply();
                }

        });
        //syncronize the value of the   cultureList inside CultureService with the $scope.cultureList
        $scope.$watchCollection(function () { return CultureService.getCultureList($stateParams.city_name); }, function (newVal, oldVal) {
            $scope.cultureList  = CultureService.getCultureList($stateParams.city_name);
            if(!$scope.$$phase) {
                $scope.$apply();
            }

        });

})
/**
 * Handle the state of the culture list items of different cities
 */
.factory("CultureService",function CultureService(CultureRes,InfiniteScrollHandler){
    //hash with  key: "city",  value : array of culture item
    var cultureList=[];
    //hash with key: "city" , value : InfiniteScrollHandler object of the city
    var infiniteScroll =[];

        var initCultureList = function(city,callback){
        //check if  cultureList of city hasn't already been request
        if (cultureList[city] === undefined) {

            //first time to request so REST call to fetch data
            CultureRes.query({city_name: city}, function (cult) {

                //code executed when data has been fetched
                var token =  cult[0].token;

                //initialize cultureList[city] with the data coming from the api call
                cultureList[city] = cult[0].results;

               //creating infinity scrollhandler for this city
                infiniteScroll[city] = new InfiniteScrollHandler(token,cultureList[city]);

                 //calling callback function
                if (typeof callback == 'function'){
                    callback();
                }
            });
        }
        else{
            if (typeof callback == 'function'){
                callback();
            }
        }

    } ;
    var getInfinityScroll = function(city){
        return  infiniteScroll[city];
    } ;
    var getCultureList = function(city){
        return cultureList[city];
    } ;
    var addItem = function(city,item){
          cultureList[city].push(item);
    };

    var removeItem = function(city,item){
       var index = cultureList[city].indexOf(item);
       if (index != -1){
          cultureList[city].splice(index,1);
       }
    };
    return {
        initCultureList : initCultureList,
        addItem :addItem ,
        removeItem : removeItem,
        getCultureList:getCultureList,
        getInfinityScroll :getInfinityScroll


    };


})

.controller('EntertainmentCtrl', function EntertainmentCtrl($scope,EntertainmentRes,$stateParams,SelectionService,ModalHandler,InfiniteScrollHandler) {
        $scope.loaderEnabled = true;
        $scope.resource =   EntertainmentRes;


        $scope.entertainmentList= EntertainmentRes.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;
            $scope.nextPageToken = $scope.entertainmentList[0].token;
            $scope.entertainmentList = $scope.entertainmentList[0].results;
            $scope.infiniteScroll = new InfiniteScrollHandler($scope.nextPageToken,$scope.entertainmentList);


        });




        $scope.setEntertainmentDetails = function (entertainment_item) {
            ModalHandler.setDetailsByResource($scope.resource,entertainment_item);
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


        $scope.utilityList = UtilityRes.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;
            $scope.nextPageToken = $scope.utilityList[0].token;
            $scope.utilityList = $scope.utilityList[0].results;
            $scope.infiniteScroll = new InfiniteScrollHandler($scope.nextPageToken,$scope.utilityList);

        });



        $scope.setUtilityDetails = function(id_utility){
           ModalHandler.setDetailsByResource($scope.resource,id_utility);
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

        $scope.hotelList = HotelRes.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;
            $scope.nextPageToken = $scope.hotelList[0].token;
            $scope.hotelList = $scope.hotelList[0].results;
            console.log($scope.nextPageToken);
            $scope.infiniteScroll = new InfiniteScrollHandler($scope.nextPageToken,$scope.hotelList);
        });

        $scope.setHotelDetails = function(id_hotel){
            ModalHandler.setDetailsByResource($scope.resource,id_hotel);
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


        $scope.foodList = FoodRes.query({city_name:$stateParams.city_name},function() {
            $scope.loaderEnabled = false;
            $scope.nextPageToken = $scope.foodList[0].token;
            $scope.foodList = $scope.foodList[0].results;
            $scope.infiniteScroll = new InfiniteScrollHandler($scope.nextPageToken,$scope.foodList);

        });

        $scope.setFoodDetails = function(id_food){
            ModalHandler.setDetailsByResource($scope.resource,id_food);
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
/**
 * Handle the infinitescroll making subsequent api calls with different token
 */
.factory('InfiniteScrollHandler', function ($stateParams) {

        //initialize the Scroll handler with a token and a list which will be used to append items
        var ScrollHandler = function(curr_token,list){
             this.itemList = list;
             this.busy = false;
             this.token =curr_token;
        };
        //ATTENTION PROBABLY list param is not correct why not use the same passed in initialize?
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




.controller( 'CityCtrl', function CityCtrl( $scope, $stateParams, $log , CityRes) {
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


.service('SelectionService',function(CultureService){
        var cultureSelection= [];
        var utilitySelection = [];
        var hotelSelection = [];
        var entertainmentSelection = [];
        var foodSelection = [];
        return{
            addCultureItem:function (culture_item,city) {
                if (cultureSelection[city]===undefined){
                    cultureSelection[city] =[];
                }
                if( cultureSelection[city].indexOf(culture_item) == -1) {
                    CultureService.removeItem(city,culture_item);
                    cultureSelection[city].push(culture_item);

                }
                return cultureSelection[city];

            },

            removeCultureItem:function (culture_item,city) {
                var index = cultureSelection[city].indexOf(culture_item);
                if(index != -1) {
                    cultureSelection[city].splice(index, 1);
                    CultureService.addItem(city,culture_item);
                }
                return cultureSelection[city];

            },

            getCultureSelection:function (city) {
                return cultureSelection[city];
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

