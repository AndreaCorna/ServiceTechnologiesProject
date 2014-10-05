/**
 * Created by Lorenzo on 29/09/14.
 */

var component = angular.module('common.placeListMaps', [
    'common.mapDirections',
    'trippo.modal'
]);

component.directive('placeListMaps', function (ModalHandler,$stateParams) {
    'use strict';

    var placeList = {
        restrict: 'EAC',
        scope: {

            selectedItems :'=' ,      //list of place to show
            mapId : '=' ,
            initPosition : '='

        },
        replace: true,
        templateUrl: 'place-list/place-list-maps.tpl.html',
        link: function (scope, element, attrs) {

            scope.$watch('selectedItems', function(newValue, oldValue) {
                if (newValue) {
                    console.log("updatind selected");
                    console.log(scope.selectedItems);

                    scope.selectedItems = newValue;
                }
            }, true);

            scope.setDetails = function(item) {
                //check if is defined the field city inside the item useful to retrive the data othewise check the stateParameter in the URL
                console.log(item);
                console.log("fdsklnflkds fnsdlnfalskn");
                
                var city;
                if(item.city !==undefined){
                    city =  item.city     ;
                }
                else{
                    city = $stateParams.city_name   ;
                }
                ModalHandler.setDetailsItem(item,city);
            };

            /**
             *MAPS HANDLING
             * current start and destination variable for the map
             */
            console.log(scope.initPosition);

            console.log("map id");
            console.log(scope.mapId);
            scope.mymapid =  "map"+scope.mapId ;
            scope.origin=undefined;
            scope.destination=undefined;
            scope.setMapsDirections = function (start) {
                scope.origin = start;
                var index_dest = scope.selectedItems.indexOf(start)+1;
                scope.destination = (scope.selectedItems[index_dest] === undefined) ? scope.selectedItems[index_dest-1] : scope.selectedItems[index_dest];

                scope.currentMarker =undefined;
                scope.currentSelectedMap  = {place :scope.origin, type:"direction"};
            };

            scope.currentMarker = undefined;
            scope.setMapsMarker = function (item) {
                scope.currentMarker = item  ;
                //making undefined origin and destination because no more available in map.. Important to allow update of the value
                scope.origin = undefined;
                scope.destination =undefined;
                scope.currentSelectedMap  = {place :scope.currentMarker, type:"marker"};


            };

            //keep track of which is the last item pressed which is linked to origin and destination of the map (used to highline this item)
            scope.currentSelectedMap = undefined;
            scope.isCurrentMap= function(value,type){

                if ( scope.currentSelectedMap!== undefined  && value == scope.currentSelectedMap.place && type == scope.currentSelectedMap.type) {
                    return true;
                }
                return false;
            } ;

            scope.getItemClass = function(item){

                switch (item.tag){
                    case "culture" :
                        return "culture-color" ;
                    case "entertainment":
                        return "entertainment-color";
                    case "hotel":
                        return "hotel-color";
                    case "food":
                        return "food-color";
                }
            };


        }

    } ;
    return placeList;

});
