/**
 * Created by Lorenzo on 03/10/14.
 */

var component = angular.module('common.mapsMarkers', ['common.mapsService']);

component.directive('mapMarkers', function ($timeout,MapsService) {
    'use strict';




    var mapObj = {
        restrict: 'EAC',
        scope: {

            zoom: '=',
            type: '@',          //type of map
            markerArraySelected: '=',   //place where to put a marker (object with lat lng field)
            markerArrayList: '=',
            mapId: '@',
            initPosition: '='  //start position if string will be used geocoding to find lat and lng if object with lat and lng this will be used
        },
        replace: true,
        templateUrl: 'maps/maps-markers.tpl.html',


        link: function (scope, element, attrs) {

            scope.$watch('initPosition', function (newValue, oldValue) {
                console.log(newValue);

                if (newValue) {
                    scope.initPosition = newValue;
                    if (markerMap !== undefined){
                        MapsService.initializeMapCenter(scope.initPosition,markerMap);
                        var zoom = scope.zoom !== undefined ? scope.zoom : 12;
                        markerMap.setZoom(zoom);
                    }
                }
            }, true);








            /**
             * Handle a list of dinamically added places to the map  used in City
             */
            //need to keep track of the added and removed markers
            //though the timeout the initMap function is call just when directive is redered so
            //one time for the map of city but when the planning map is rendered the variable map is change and will refer to this map
            //and the change to the map variable will be applied to this map and not to the city one
            var markerMap ;
            //usefull to know which are the places selected before
            var initialArraySelection = []   ;
            var markersArraySelection = [];
            var markerList = [];



            scope.$watch('markerArraySelected', function (newValue, oldValue) {
                if (newValue) {

                    var toRemove = arrayDiff(oldValue, newValue);
                    var toAdd = arrayDiff(newValue, oldValue);
                    initialArraySelection = newValue;

                    scope.updateArrayMarkerSelectedMap(toAdd, toRemove);
                }
            }, true);

            scope.$watch('markerArrayList', function (newValue, oldValue) {
                if (newValue) {
                    console.log("called watch arrayLisk ");

                    scope.markerArrayList = newValue;
                    scope.updateArrayMarkerListMap();
                }
            }, true);


            scope.updateArrayMarkerListMap = function () {

                //inizializzazione caso in cui ho solo la markerList ma non ho markerArraySelected
                if (markerMap === undefined && scope.markerArraySelected === undefined){
                    console.log("updateArrayMarkerListMap");

                    // markerMap = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);
                    // scope.initializeMapCenter(scope.initPosition,markerMap);
                    markerMap = MapsService.initMap(markerMap,scope.initPosition,scope.mapId,scope.zoom,scope.type,false) ;
                    console.log('selsction '+markersArraySelection);


                }




                angular.forEach(markerList, function (value, key) {
                    value.setMap(null);

                });
                markerList = []; //all marker have been cleaned up by the function before


                angular.forEach(scope.markerArrayList, function (value, key) {
                    markerList.push(MapsService.addMarker(value, markerMap,false));
                });




            };

            /**
             * Add to the map marker dinamically finding difference between current set of markers and the new one
             * @param toAdd     markers to add
             * @param toRemove    markers to remove
             */
            scope.updateArrayMarkerSelectedMap = function (toAdd, toRemove) {

                if (markerMap === undefined){
                    console.log("updateArrayMarkerSelectedMap");
                    toAdd = initialArraySelection;
                    // markerMap = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);
                    // scope.initializeMapCenter(scope.initPosition,markerMap);
                    markerMap = MapsService.initMap(markerMap,scope.initPosition,scope.mapId,scope.zoom,scope.type,false) ;
                    console.log('selsction'+markersArraySelection);


                }

                angular.forEach(toAdd, function (value, key) {
                    markersArraySelection[value.id] = MapsService.addMarker(value, markerMap, true);


                });

                angular.forEach(toRemove, function (value, key) {
                    markersArraySelection[value.id].setMap(null);
                    delete markersArraySelection[value.id];
                });
                console.log(markersArraySelection);


            };



            //return elements which are in the first array  but not in second based on a id field to compare
            var arrayDiff = function (first, second) {

                var onlyFirst = first.filter(function (current) {
                    return second.filter(function (current_b) {
                        return current_b.id == current.id;
                    }).length === 0;
                });
                return onlyFirst;
            };


        }
    };

    return mapObj;



});
