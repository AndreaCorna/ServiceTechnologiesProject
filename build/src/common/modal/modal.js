/**
 * Created by Lorenzo on 04/09/14.
 */
angular.module('trippo.modal', ["trippo.resources"])
    .factory('ModalHandler', function (FoodRes,HotelRes,UtilityRes,EntertainmentRes,CultureRes,$stateParams) {
        var details;
        /*Modify the format of the opening hour addin a : between numbers 08:00 instead of 0800*/
        var normalizeHours = function (details){
            if(details.open_hours !== null){
                for (var i=0;i<details.open_hours.length;i++){
                    console.log("called function");
                    var day = details.open_hours[i] ;
                    if(day !== null) {
                        for (var j = 0; j < day.hours.length; j++) {
                            couple = day.hours[j];
                            if( details.open_hours[i].hours[0].close != null){
                                details.open_hours[i].hours[j].open = couple.open.substr(0, 2) + ":" + couple.open.substr(2);
                                details.open_hours[i].hours[j].close = couple.close.substr(0, 2) + ":" + couple.close.substr(2);
                            }else{
                                break;
                            }

                        }
                    }
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
            setDetailsByResource: function(resource,id,city) {
                var data;
                resource.get({city_name: city, id: id},function(response){
                    data =response;
                    setDetails(data);
                });
            },

            setDetailsHotel: function(resource,id,city){
                var data;
                resource.get({city_name: city, id: id},function(response){
                    data =response;
                    details = data;
                });
            } ,
            /**
             * wrapper    method which set the modal details through an object which has a field tag
             * representing the resource and a filed id representing th object to be retrived
             */
            setDetailsItem :  function(item,city) {
                //choose the field which identify the place
                var id;
                if (item.google_id !==undefined){
                    id =  item.google_id ;
                }
                else{
                    id = item.id;
                }
                switch (item.tag) {
                    case 'culture' :
                        this.setDetailsByResource(CultureRes, id,city);
                        break;
                    case 'entertainment' :
                        this.setDetailsByResource(EntertainmentRes, id,city);
                        break;
                    case 'food' :
                        this.setDetailsByResource(FoodRes,id,city);
                        break;
                    case 'hotel' :
                        this.setDetailsHotel(HotelRes, id,city);
                        break;

                }
            }


        };
    })
    .controller("ModalCtrl",function($scope,ModalHandler){
        $scope.moreInfoSelection = null;
        $scope.modalEnabled = false;
        $scope.loaderEnabled = true;
        $scope.hotelShow = false;

        /**
         * Added a watch to update scope.moreInfoSelection which is set every time a moreInfo button is pushed
         */
        $scope.$watchCollection(function () { return ModalHandler.getDetails(); }, function (newVal, oldVal) {
            if (typeof newVal !== 'undefined') {
                $scope.loaderEnabled = true;

                $scope.moreInfoSelection = ModalHandler.getDetails();
                $scope.modalEnabled = true;
                $scope.loaderEnabled = false;

            }

        });
        $scope.disableModal = function(){
            $scope.modalEnabled = false;
            $scope.loaderEnabled = true;
            $scope.hotelShow = false;

        };

        $scope.changeDate = function(milliseconds){
            return moment(milliseconds).utc().format('DD/MM/YYYY');
        };
    });


