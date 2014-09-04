/**
 * Created by Lorenzo on 04/09/14.
 */

/**
 * List of the resources which are provided by the Ruby Application
 */
angular.module('trippo.resources', [
    'ngResource'
])


.factory( 'CultureRes', function ($resource) {
    var cultureList = $resource("../../city/:city_name/culture");
    var cultureDetails = $resource("../../city/:city_name/culture/:id_culture");
    var cultureOthers = $resource("../../city/:city_name/culture?token=:token");
    return {
        list: cultureList,
        details: cultureDetails,
        others: cultureOthers
    };
})

.factory('UtilityRes',function($resource){
    var utilityList = $resource("../../city/:city_name/utility");
    var utilityDetails = $resource("../../city/:city_name/utility/:id_utility");
    var utilityOthers = $resource("../../city/:city_name/utility?token=:token");

    return{
        list:utilityList,
        details:utilityDetails,
        others:utilityOthers
    };


})

.factory('EntertainmentRes',function($resource){
    var entertainmentList = $resource("../../city/:city_name/entertainment");
    var entertainmentDetails = $resource("../../city/:city_name/entertainment/:id_entertainment");
    var entertainmentOthers = $resource("../../city/:city_name/entertainment?token=:token");

    return{
        list:entertainmentList,
        details:entertainmentDetails,
        others:entertainmentOthers
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
    var foodOthers = $resource("../../city/:city_name/food?token=:token");

    return{
        list:foodList,
        details:foodDetails,
        others:foodOthers
    };
}) ;

