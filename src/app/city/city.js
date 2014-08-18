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
                  controller: 'CityCtrl',
                  templateUrl: 'city/culture.tpl.html'

              }
          }

      })
      .state('hotel', {
          url: '/hotel',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'CityCtrl',
                  templateUrl: 'city/hotel.tpl.html'

              }
          }

      })
      .state('entertainment', {
          url: '/entertainment',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'CityCtrl',
                  templateUrl: 'city/entertainment.tpl.html'

              }
          }

      })
      .state('utility', {
          url: '/utility',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'CityCtrl',
                  templateUrl: 'city/utility.tpl.html'

              }
          }

      })

      .state( 'calendar', {
      url: '/calendar',
      parent:"city",
      views: {
          "content": {
              controller: 'calendarCtrl',
              templateUrl: 'plan_trip/calendar.tpl.html'

          }
      }
  })

      .state('dates', {
          url: '/dates',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'datesCtrl',
                  templateUrl: 'plan_trip/trip_dates.tpl.html'

              }
          }

      })

      .state('planning', {
          url: '/planning',
          parent:"city",
          views: {
              "content@city": {
                  controller: 'planningCtrl',
                  templateUrl: 'plan_trip/planning.tpl.html'
              }
          }

      });

})




.controller( 'CityCtrl', function CityCtrl( $scope, $stateParams, $log , CityRes, CultureRes, UtilityRes, EntertainmentRes, HotelRes, SelectionService) {
      $scope.$log= $log;
      $scope.intervalImages = 5000;
      $scope.city = CityRes.details.query({city_name:$stateParams.city_name});
      $scope.cultureList = CultureRes.list.query({city_name:$stateParams.city_name});
      $scope.utilityList = UtilityRes.list.query({city_name:$stateParams.city_name});
      $scope.entertainmentList= EntertainmentRes.list.query({city_name:$stateParams.city_name});
      $scope.hotelList = HotelRes.list.query({city_name:$stateParams.city_name});
      $scope.getCultureDetails = function(id_culture){
          console.log("selection "+$scope.cultureSelection);
          $scope.moreInfoSelection = CultureRes.details.query({city_name:$stateParams.city_name,id_culture:id_culture});
      };
      $scope.getUtilityDetails = function(id_utility){
          $scope.moreInfoSelection = UtilityRes.details.query({city_name:$stateParams.city_name,id_utility:id_utility});
      };
      $scope.getEntertainmentDetails = function(id_entertainment){
          $scope.moreInfoSelection = EntertainmentRes.details.query({city_name:$stateParams.city_name,id_entertainment:id_entertainment});
      };
      $scope.getHotelDetails = function(id_hotel){
          $scope.moreInfoSelection = HotelRes.details.query({city_name:$stateParams.city_name,id_hotel:id_hotel});
      };

      $scope.addCultureItem = function(culture_item){
          $scope.cultureSelection = SelectionService.addCultureItem(culture_item);
      };

      $scope.removeCultureItem = function(culture_item){
          $scope.cultureSelection = SelectionService.removeCultureItem(culture_item);
      };

      $scope.addUtilityItem = function(utility_item){
          $scope.utilitySelection = SelectionService.addUtilityItem(utility_item);
      };

      $scope.removeUtilityItem = function(utility_item){
          $scope.utilitySelection = SelectionService.removeUtilityItem(utility_item);
      };

      $scope.addEntertainmentItem = function(entertainment_item){
          $scope.entertainmentSelection = SelectionService.addEntertainmentItem(entertainment_item);
      };

      $scope.removeEntertainmentItem = function(entertainment_item){
          $scope.entertainmentSelection = SelectionService.removeEntertainmentItem(entertainment_item);
      };

      $scope.addHotelItem = function(hotel_item){
          $scope.hotelSelection = SelectionService.addHotelItem(hotel_item);
      };

      $scope.removeHotelItem = function(hotel_item){
          $scope.hotelSelection = SelectionService.removeHotelItem(hotel_item);
      };

  /*
  metti lista selezione di culture entertaiment ecc liste complete
  servizi per gli oggetti selezionati e tali oggetti vanno messi nei servizi.
  Ogni oggetto va tenuto con il json delle info base le info complete in redis
   */
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

.service('SelectionService',function(){
        var cultureSelection = [];
        var utilitySelection = [];
        var hotelSelection = [];
        var entertainmentSelection = [];
        return{
            addCultureItem:function (culture_item) {

                if(cultureSelection.indexOf(culture_item) == -1) {
                    cultureSelection.push(culture_item);
                }
                return cultureSelection;

            },

            removeCultureItem:function (culture_item) {
                var index = cultureSelection.indexOf(culture_item);
                if(index != -1) {
                    cultureSelection.splice(index, 1);
                }
                return cultureSelection;

            },

            getCultureSelection:function () {
                return cultureSelection;
            },

            addUtilityItem:function (utility_item) {
                if(utilitySelection.indexOf(utility_item) == -1) {
                    utilitySelection.push(utility_item);
                }
                return utilitySelection;

            },

            removeUtilityItem:function (utility_item) {
                var index = utilitySelection.indexOf(utility_item);
                if(index != -1) {
                    utilitySelection.splice(index, 1);
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

            addEntertainmentItem:function (entertainment_item) {
                if(entertainmentSelection.indexOf(entertainment_item) == -1) {
                    entertainmentSelection.push(entertainment_item);
                }
                return entertainmentSelection;

            },
            removeEntertainmentItem:function (entertainment_item) {
                var index = entertainmentSelection.indexOf(entertainment_item);
                if (index != -1) {
                    entertainmentSelection.splice(index, 1);
                }
                return entertainmentSelection;
            },

            getEntertainmentSelection:function(){
                return entertainmentSelection;
            },

            getSelections:function(){
                return{
                    listCulture:cultureSelection,
                    listUtility:utilitySelection,
                    listHotel:hotelSelection,
                    listEntertainment:entertainmentSelection
                };
            }
         };
    })

;

