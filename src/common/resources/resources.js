/**
 * Created by Lorenzo on 04/09/14.
 */

/**
 * List of the resources which are provided by the Ruby Application
 */
angular.module('trippo.resources', [
    'ngResource'
])
.value('ResourceBaseUrl', {val:'../../'})

.factory('CityRes', function ($resource,ResourceBaseUrl){
     var city = $resource (ResourceBaseUrl.val+"city/:city_name");
     return city;
})

.factory( 'CultureRes', function ($resource,ResourceBaseUrl) {
    var culture = $resource(ResourceBaseUrl.val+"city/:city_name/culture/:id");
    return culture;
})

.factory('UtilityRes',function($resource,ResourceBaseUrl){

    var utility = $resource(ResourceBaseUrl.val+"city/:city_name/utility/:id");


    return utility;


})

.factory('EntertainmentRes',function($resource,ResourceBaseUrl){
    var entertainment = $resource(ResourceBaseUrl.val+"city/:city_name/entertainment/:id");

    return entertainment;
})

.factory('HotelRes',function($resource,ResourceBaseUrl){
    var hotel = $resource(ResourceBaseUrl.val+"city/:city_name/hotels/:id");
    return hotel;

})

.factory('FoodRes',function($resource,ResourceBaseUrl){
    var food = $resource(ResourceBaseUrl.val+"city/:city_name/food/:id");

    return food;
})
.factory('GuideRes', function ($resource,ResourceBaseUrl) {
   var  guide = $resource(ResourceBaseUrl.val+"guides/:id"/*,{id: '@id'},
       {
           inutile: {
               method: 'POST', url: ResourceBaseUrl.val+"guides/new"
           }
       }*/);
    return  guide;
})

.factory('SharedGuideRes', function ($resource,ResourceBaseUrl) {
    var  shared_guide = $resource(ResourceBaseUrl.val+"city/:city_name/shared_guide" );
    return shared_guide;
})


.factory('commonResources',function(FoodRes,HotelRes,EntertainmentRes,CultureRes){
      return{
          FoodRes : FoodRes,
          HotelRes : HotelRes ,
          EntertainmentRes : EntertainmentRes ,
          CultureRes : CultureRes
      } ;
})  ;