/**
 * Created by Lorenzo on 29/09/14.
 */

var component = angular.module('common.placeList', [
    'common.maps'
]);

component.directive('placeList', function () {
    'use strict';

    var placeList = {
        restrict: 'EAC',
        scope: {

            selectedItems :'=' ,      //list of place to show
            mapId : '='

        },
        replace: true,
        templateUrl: 'place-list/place-list.tpl.html',
        link: function (scope, element, attrs) {

            scope.$watch('selectedItems', function(newValue, oldValue) {
                if (newValue) {
                    console.log("updatind selected");
                    console.log(scope.selectedItems);

                    scope.selectedItems = newValue;
                }
            }, true);

            /**
             *MAPS HANDLING
             * current start and destination variable for the map
             */
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
