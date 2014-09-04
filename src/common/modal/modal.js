/**
 * Created by Lorenzo on 04/09/14.
 */
angular.module('trippo.modal', ["trippo.resources"])
    .factory('ModalHandler', function (FoodRes,HotelRes,UtilityRes,EntertainmentRes,CultureRes,$stateParams) {
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
        };
        var setDetails = function (value) {
            normalizeHours(value);
            details = value;
        };


        return {
            getDetails: function () {
                return details;
            },
            setFoodDetails: function(id_food) {
                var data;
                FoodRes.details.query({city_name: $stateParams.city_name, id_food: id_food},function(response){
                    data =response;
                    console.log(data[0].name);
                    setDetails(data[0]);
                });
            },
            setHotelDetails : function(id_hotel){
                var data;
                HotelRes.details.query({city_name: $stateParams.city_name, id_hotel: id_hotel},function(response){
                    data =response;
                    console.log(data[0].name);
                    setDetails(data[0]);


                });


            },
            setUtilityDetails : function(id_utility){
                var data;
                UtilityRes.details.query({city_name: $stateParams.city_name, id_utility: id_utility},function(response){
                    data =response;
                    console.log(data[0].name);
                    setDetails(data[0]);


                });


            },
            setEntertainmentDetails : function(id_entertainment){
                var data;
                EntertainmentRes.details.query({city_name: $stateParams.city_name, id_entertainment: id_entertainment},function(response){
                    data =response;
                    console.log(data[0].name);
                    setDetails(data[0]);


                });


            },

            setCultureDetails : function(id_culture){
                var data;
                CultureRes.details.query({city_name: $stateParams.city_name, id_culture: id_culture},function(response){
                    data =response;
                    console.log(data[0].name);
                    setDetails(data[0]);
                });
            }

        };
    })
;


