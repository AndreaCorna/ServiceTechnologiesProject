/**
 * Created by Lorenzo on 04/10/14.
 */
var component = angular.module('common.placeListDetails', [
    'common.mapDirections' ,
    'trippo.modal'
]);

component.directive('placeListDetails', function (ModalHandler,$stateParams) {
    'use strict';

    var placeList = {
        restrict: 'EAC',
        scope: {

            itemList: '='      //list of place to show


        },

        replace: true,
        templateUrl: 'place-list/place-list-details.tpl.html',
        link: function (scope, element, attrs) {

            scope.setDetails = function(item) {
                var city;
                if(item.city !==undefined){
                    console.log("item city defined");

                  city =  item.city     ;
                }
                else{
                    console.log("stateparamcity city defined");

                    city = $stateParams.city_name   ;
                }
                console.log(city);

                ModalHandler.setDetailsItem(item,city);
            };
        }

    }   ;
    return placeList;
} );
