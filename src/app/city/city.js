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
    data:{ pageTitle: 'City' }
  });
})

.controller( 'CityCtrl', function CityCtrl( $scope, $stateParams, $log , CityRes, CultureRes, UtilityRes, EntertainmentRes, HotelRes, SelectionService) {
      $scope.$log= $log;
      $scope.cultureList = CultureRes.list.query({city_name:$stateParams.city_name});
      $scope.utilityList = UtilityRes.list.query({city_name:$stateParams.city_name});
      $scope.entertainmentList= EntertainmentRes.list.query({city_name:$stateParams.city_name});
      $scope.hotelList = HotelRes.list.query({city_name:$stateParams.city_name});
      $scope.getCultureDetails = function(id_culture){
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
          SelectionService.addCultureItem(culture_item);
          /*Codice per recuperare le informazioni sulle selezioni*/
      };

  /*
  metti lista selezione di culture entertaiment ecc liste complete
  servizi per gli oggetti selezionati e tali oggetti vanno messi nei servizi.
  Ogni oggetto va tenuto con il json delle info base le info complete in redis
   */
})

.factory( 'CityRes', function ( $resource )  {
        return $resource("../../city");
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

        this.addCultureItem = function(culture_item){
            cultureSelection.push(culture_item);
        };

        this.removeCultureItem = function(culture_item){
            cultureSelection.remove(culture_item);
        };

        this.getCultureSelection = function(){
            return cultureSelection.promise;
        };

        this.addUtilityItem = function(utility_item){
            utilitySelection.push(utility_item);
        };
        this.removeUtilityItem = function(utility_item){
            utilitySelection.remove(utility_item);
        };

        this.addHotelItem = function(hotel_item){
            hotelSelection.push(hotel_item);
        };

        this.removeHotelItem = function(hotel_item){
            hotelSelection.remove(hotel_item);
        };

        this.addEntertainmentItem = function(entertainment_item){
            entertainmentSelection.push(entertainment_item);
        };
        this.removeEntertainmentItem = function(entertainment_item){
            entertainmentSelection.remove(entertainment_item);
        };
    })

;

