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
                FoodRes.get({city_name: $stateParams.city_name, id: id_food},function(response){
                    data =response;
                    setDetails(data);
                });
            },
            setHotelDetails : function(id_hotel){
                var data;
                HotelRes.get({city_name: $stateParams.city_name, id: id_hotel},function(response){
                    data =response;
                    setDetails(data);


                });


            },
            setUtilityDetails : function(id_utility){
                var data;
                UtilityRes.get({city_name: $stateParams.city_name, id: id_utility},function(response){
                    data =response;
                    setDetails(data);


                });


            },
            setEntertainmentDetails : function(id_entertainment){
                var data;
                EntertainmentRes.get({city_name: $stateParams.city_name, id: id_entertainment},function(response){
                    data =response;
                    console.log(data.name);
                    setDetails(data);


                });


            },

            setCultureDetails : function(id_culture){
                var data;
                CultureRes.get({city_name: $stateParams.city_name, id: id_culture},function(response){
                    data =response;

                    console.log(data.name);
                    setDetails(data);
                });
            }

        };
    })
    .controller("ModalCtrl",function($scope,ModalHandler){
        $scope.moreInfoSelection = null;
        $scope.modalEnabled = false;
        $scope.loaderEnabled = true;

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
    });


