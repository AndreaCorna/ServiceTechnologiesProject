/**
 * Created by Lorenzo on 04/09/14.
 */

/**
 * List of the resources which are provided by the Ruby Application
 */
angular.module('trippo.resources', [
    'ngResource'
])

.factory('CityRes', function ($resource){
     var city = $resource ("../../city/:city_name");
     return city;
})

.factory( 'CultureRes', function ($resource) {
    var culture = $resource("../../city/:city_name/culture/:id");
    return culture;
})

.factory('UtilityRes',function($resource){

    var utility = $resource("../../city/:city_name/utility/:id");


    return utility;


})

.factory('EntertainmentRes',function($resource){
    var entertainment = $resource("../../city/:city_name/entertainment/:id");

    return entertainment;
})

.factory('HotelRes',function($resource){
    var hotel = $resource("../../city/:city_name/hotels/:id");
    return hotel;

})

.factory('FoodRes',function($resource){
    var food = $resource("../../city/:city_name/food/:id");

    return food;
})


.factory('commonResources',function(FoodRes,HotelRes,EntertainmentRes,CultureRes){
      return{
          FoodRes : FoodRes,
          HotelRes : HotelRes ,
          EntertainmentRes : EntertainmentRes ,
          CultureRes : CultureRes
      } ;
})  ;