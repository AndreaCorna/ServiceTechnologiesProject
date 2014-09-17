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

.controller('CultureCtrl', function CultureCtrl(CultureService,$scope,CultureRes,$stateParams,SelectionService,ModalHandler) {
        $scope.loaderEnabled = true;
        $scope.resource = CultureRes;

        CultureService.initCultureList($stateParams.city_name,function (){
            //setting the infinite scroll after cultureService initialization through callback function
            $scope.infiniteScroll =  CultureService.getInfinityScroll($stateParams.city_name);
            $scope.loaderEnabled = false;

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
       /** $scope.$watchCollection(function () { return CultureService.getCultureList($stateParams.city_name); }, function (newVal, oldVal) {
            $scope.cultureList  = CultureService.getCultureList($stateParams.city_name);
            if(!$scope.$$phase) {
                $scope.$apply();
            }

        });*/

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

.controller('EntertainmentCtrl', function EntertainmentCtrl(EntertainmentService,$scope,EntertainmentRes,$stateParams,SelectionService,ModalHandler) {
        $scope.loaderEnabled = true;
        $scope.resource = EntertainmentRes;

        EntertainmentService.initEntertainmentList($stateParams.city_name,function (){
            //setting the infinite scroll after cultureService initialization through callback function
            $scope.infiniteScroll =  EntertainmentService.getInfinityScroll($stateParams.city_name);
            $scope.loaderEnabled = false;

        }) ;

        $scope.setEntertainmentDetails = function(entertainment_item){
            ModalHandler.setDetailsByResource($scope.resource ,entertainment_item);
        } ;

        $scope.addEntertainmentItem = function(entertainment_item){
            $scope.entertainmentSelection = SelectionService.addEntertainmentItem(entertainment_item,$stateParams.city_name);
        };


        $scope.removeEntertainmentItem = function(entertainment_item){
            $scope.entertainmentSelection = SelectionService.removeEntertainmentItem(entertainment_item,$stateParams.city_name);
        };

        $scope.$watchCollection(function () { return SelectionService.getEntertainmentSelection($stateParams.city_name); }, function (newVal, oldVal) {
            $scope.entertainmentSelection = SelectionService.getEntertainmentSelection($stateParams.city_name);
            if(!$scope.$$phase) {
                $scope.$apply();
            }

        });
})

.factory('EntertainmentService', function EntertainmentService(EntertainmentRes,InfiniteScrollHandler){
        var entertainmentList=[];
        //hash with key: "city" , value : InfiniteScrollHandler object of the city
        var infiniteScroll =[];

        var initEntertainmentList = function(city,callback){
            //check if  cultureList of city hasn't already been request
            if (entertainmentList[city] === undefined) {

                //first time to request so REST call to fetch data
                EntertainmentRes.query({city_name: city}, function (cult) {

                    //code executed when data has been fetched
                    var token =  cult[0].token;

                    //initialize cultureList[city] with the data coming from the api call
                    entertainmentList[city] = cult[0].results;

                    //creating infinity scrollhandler for this city
                    infiniteScroll[city] = new InfiniteScrollHandler(token,entertainmentList[city]);

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
        var getEntertainmentList = function(city){
            return entertainmentList[city];
        } ;
        var addItem = function(city,item){
            entertainmentList[city].push(item);
        };
        var removeItem = function(city,item){
            var index = entertainmentList[city].indexOf(item);
            if (index != -1){
                entertainmentList[city].splice(index,1);
            }
        };

        return {
            initEntertainmentList : initEntertainmentList,
            addItem :addItem ,
            removeItem : removeItem,
            getEntertainmentList:getEntertainmentList,
            getInfinityScroll :getInfinityScroll
        };

})

.controller('UtilityCtrl', function UtilityCtrl(UtilityService,$scope,UtilityRes,$stateParams,SelectionService,ModalHandler) {
        $scope.loaderEnabled = true;
        $scope.resource = UtilityRes;

        UtilityService.initUtilityList($stateParams.city_name,function (){
            //setting the infinite scroll after cultureService initialization through callback function
            $scope.infiniteScroll =  UtilityService.getInfinityScroll($stateParams.city_name);
            $scope.loaderEnabled = false;

        }) ;

        $scope.setUtilityDetails = function(utility_item){
            ModalHandler.setDetailsByResource($scope.resource ,utility_item);
        } ;

        $scope.addUtilityItem = function(utility_item){
            $scope.utilitySelection = SelectionService.addUtilityItem(utility_item,$stateParams.city_name);
        };


        $scope.removeUtilityItem = function(utility_item){
            $scope.utilitySelection = SelectionService.removeUtilityItem(utility_item,$stateParams.city_name);
        };

        $scope.$watchCollection(function () { return SelectionService.getUtilitySelection($stateParams.city_name); }, function (newVal, oldVal) {
            $scope.utilitySelection = SelectionService.getUtilitySelection($stateParams.city_name);
            if(!$scope.$$phase) {
                $scope.$apply();
            }

        });
})

.factory('UtilityService', function UtilityService(UtilityRes,InfiniteScrollHandler){
        var utilityList=[];
        //hash with key: "city" , value : InfiniteScrollHandler object of the city
        var infiniteScroll =[];

        var initUtilityList = function(city,callback){
            //check if  cultureList of city hasn't already been request
            if (utilityList[city] === undefined) {

                //first time to request so REST call to fetch data
                UtilityRes.query({city_name: city}, function (cult) {

                    //code executed when data has been fetched
                    var token =  cult[0].token;

                    //initialize cultureList[city] with the data coming from the api call
                    utilityList[city] = cult[0].results;

                    //creating infinity scrollhandler for this city
                    infiniteScroll[city] = new InfiniteScrollHandler(token,utilityList[city]);

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
        var getUtilityList = function(city){
            return utilityList[city];
        } ;
        var addItem = function(city,item){
            utilityList[city].push(item);
        };
        var removeItem = function(city,item){
            var index = utilityList[city].indexOf(item);
            if (index != -1){
                utilityList[city].splice(index,1);
            }
        };

        return {
            initUtilityList : initUtilityList,
            addItem :addItem ,
            removeItem : removeItem,
            getUtilityList:getUtilityList,
            getInfinityScroll :getInfinityScroll
        };

    })


.controller('HotelCtrl', function HotelCtrl(HotelService,$scope,HotelRes,$stateParams,SelectionService,ModalHandler) {
        $scope.loaderEnabled = true;
        $scope.resource = HotelRes;

        HotelService.initHotelList($stateParams.city_name,function (){
            //setting the infinite scroll after cultureService initialization through callback function
            $scope.infiniteScroll =  HotelService.getInfinityScroll($stateParams.city_name);
            $scope.loaderEnabled = false;

        }) ;

        $scope.setHotelDetails = function(hotel_item){
            ModalHandler.setDetailsHotel($scope.resource ,hotel_item);
        } ;

        $scope.addHotelItem = function(hotel_item){
            $scope.foodSelection = SelectionService.addHotelItem(hotel_item,$stateParams.city_name);
        };


        $scope.removeHotelItem = function(hotel_item){
            $scope.hotelSelection = SelectionService.removeHotelItem(hotel_item,$stateParams.city_name);
        };

        $scope.$watchCollection(function () { return SelectionService.getHotelSelection($stateParams.city_name); }, function (newVal, oldVal) {
            $scope.hotelSelection = SelectionService.getHotelSelection($stateParams.city_name);
            if(!$scope.$$phase) {
                $scope.$apply();
            }

        });
})

.factory('HotelService', function HotelService(HotelRes,InfiniteScrollHandler){
        var hotelList=[];
        //hash with key: "city" , value : InfiniteScrollHandler object of the city
        var infiniteScroll =[];

        var initHotelList = function(city,callback){
            //check if  cultureList of city hasn't already been request
            if (hotelList[city] === undefined) {

                //first time to request so REST call to fetch data
                HotelRes.query({city_name: city}, function (cult) {

                    //code executed when data has been fetched
                    var token =  cult[0].token;

                    //initialize cultureList[city] with the data coming from the api call
                    hotelList[city] = cult[0].results;

                    //creating infinity scrollhandler for this city
                    infiniteScroll[city] = new InfiniteScrollHandler(token,hotelList[city]);

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
        var getHotelList = function(city){
            return hotelList[city];
        } ;
        var addItem = function(city,item){
            hotelList[city].push(item);
        };
        var removeItem = function(city,item){
            var index = hotelList[city].indexOf(item);
            if (index != -1){
                hotelList[city].splice(index,1);
            }
        };

        return {
            initHotelList : initHotelList,
            addItem :addItem ,
            removeItem : removeItem,
            getHotelList:getHotelList,
            getInfinityScroll :getInfinityScroll
        };
})

.controller('FoodCtrl',function FoodCtrl(FoodService,$scope,FoodRes,$stateParams,SelectionService,ModalHandler){
        $scope.loaderEnabled = true;
        $scope.resource = FoodRes;

        FoodService.initFoodList($stateParams.city_name,function (){
            //setting the infinite scroll after cultureService initialization through callback function
            $scope.infiniteScroll =  FoodService.getInfinityScroll($stateParams.city_name);
            $scope.loaderEnabled = false;

        }) ;

        $scope.setFoodDetails = function(food_item){
            ModalHandler.setDetailsByResource($scope.resource ,food_item);
        } ;

        $scope.addFoodItem = function(food_item){
            $scope.foodSelection = SelectionService.addFoodItem(food_item,$stateParams.city_name);
        };


        $scope.removeFoodItem = function(food_item){
            $scope.foodSelection = SelectionService.removeFoodItem(food_item,$stateParams.city_name);
        };

        $scope.$watchCollection(function () { return SelectionService.getFoodSelection($stateParams.city_name); }, function (newVal, oldVal) {
            $scope.foodSelection = SelectionService.getFoodSelection($stateParams.city_name);
            if(!$scope.$$phase) {
                $scope.$apply();
            }

        });

})
.factory('FoodService',function FoodService(FoodRes,InfiniteScrollHandler){
        var foodList=[];
        //hash with key: "city" , value : InfiniteScrollHandler object of the city
        var infiniteScroll =[];

        var initFoodList = function(city,callback){
            //check if  cultureList of city hasn't already been request
            if (foodList[city] === undefined) {

                //first time to request so REST call to fetch data
                FoodRes.query({city_name: city}, function (cult) {

                    //code executed when data has been fetched
                    var token =  cult[0].token;

                    //initialize cultureList[city] with the data coming from the api call
                    foodList[city] = cult[0].results;

                    //creating infinity scrollhandler for this city
                    infiniteScroll[city] = new InfiniteScrollHandler(token,foodList[city]);

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
        var getFoodList = function(city){
            return foodList[city];
        } ;
        var addItem = function(city,item){
            foodList[city].push(item);
        };
        var removeItem = function(city,item){
            var index = foodList[city].indexOf(item);
            if (index != -1){
                foodList[city].splice(index,1);
            }
        };

        return {
            initFoodList : initFoodList,
            addItem :addItem ,
            removeItem : removeItem,
            getFoodList:getFoodList,
            getInfinityScroll :getInfinityScroll
        };

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
        ScrollHandler.prototype.nextPage = function(resource){
            if (this.busy){return;}
            this.busy = true;



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


.service('SelectionService',function(CultureService,EntertainmentService,FoodService,UtilityService,HotelService){
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

            addUtilityItem:function (utility_item,city) {
                if (utilitySelection[city]===undefined){
                    utilitySelection[city] =[];
                }
                if( utilitySelection[city].indexOf(utility_item) == -1) {
                    UtilityService.removeItem(city,utility_item);
                    utilitySelection[city].push(utility_item);

                }
                return utilitySelection[city];

            },

            removeUtilityItem:function (utility_item,city) {
                var index = utilitySelection[city].indexOf(utility_item);
                if(index != -1) {
                    utilitySelection[city].splice(index, 1);
                    UtilityService.addItem(city,utility_item);
                }
                return utilitySelection[city];

            },

            getUtilitySelection:function(city){
               return utilitySelection[city];
            },

            addHotelItem:function (hotel_item,city) {
                if (hotelSelection[city]===undefined){
                    hotelSelection[city] =[];
                }
                if( hotelSelection[city].indexOf(hotel_item) == -1) {
                    HotelService.removeItem(city,hotel_item);
                    hotelSelection[city].push(hotel_item);

                }
                return hotelSelection[city];


            },

            removeHotelItem:function (hotel_item,city) {
                var index = hotelSelection[city].indexOf(hotel_item);
                if(index != -1) {
                    hotelSelection[city].splice(index, 1);
                    HotelService.addItem(city,hotel_item);
                }
                return hotelSelection[city];

            },

            getHotelSelection:function(city){
                return hotelSelection[city];
            },

            addEntertainmentItem:function (entertainment_item,city) {
                if (entertainmentSelection[city]===undefined){
                    entertainmentSelection[city] =[];
                }
                if( entertainmentSelection[city].indexOf(entertainment_item) == -1) {
                    EntertainmentService.removeItem(city,entertainment_item);
                    entertainmentSelection[city].push(entertainment_item);

                }
                return entertainmentSelection[city];

            },
            removeEntertainmentItem:function (entertainment_item,city) {
                var index = entertainmentSelection[city].indexOf(entertainment_item);
                if(index != -1) {
                    entertainmentSelection[city].splice(index, 1);
                    EntertainmentService.addItem(city,entertainment_item);
                }
                return entertainmentSelection[city];
            },

            getEntertainmentSelection:function(city){
                return entertainmentSelection[city];
            },

            addFoodItem:function(food_item,city){
                if (foodSelection[city]===undefined){
                    foodSelection[city] =[];
                }
                if( foodSelection[city].indexOf(food_item) == -1) {
                    FoodService.removeItem(city,food_item);
                    foodSelection[city].push(food_item);

                }
                return foodSelection[city];
            },

            removeFoodItem:function(food_item,city){
                var index = foodSelection[city].indexOf(food_item);
                if(index != -1) {
                    foodSelection[city].splice(index, 1);
                    FoodService.addItem(city,food_item);
                }
                return foodSelection[city];
            },

            getFoodSelection:function(city){
                return foodSelection[city];
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

