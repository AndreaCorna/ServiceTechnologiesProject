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
            dontShowMore :'=',
            itemList: '='      //list of place to show


        },

        replace: true,
        templateUrl: 'place-list/place-list-details.tpl.html',
        link: function (scope, element, attrs) {
            scope.showMore =true;
            if(scope.dontShowMore===true)  {
                console.log("dontShowMore");
                console.log(scope.dontShowMore);

                 scope.showMore =false;
            }
            //set the details of the modal
            scope.setDetails = function(item) {
                //check if is defined the field city inside the item useful to retrive the data othewise check the stateParameter in the URL
                var city;
                if(item.city !==undefined){
                  city =  item.city     ;
                }
                else{
                    city = $stateParams.city_name   ;
                }
                ModalHandler.setDetailsItem(item,city);
            };
        }

    }   ;
    return placeList;
} );
