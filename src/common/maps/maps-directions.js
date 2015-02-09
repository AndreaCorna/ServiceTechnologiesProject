/**
 * Created by Lorenzo on 13/09/14.
 */

var component = angular.module('common.mapDirections', ['common.mapsService']);

component.directive('mapDirections', function ($timeout,MapsService) {
    'use strict';



     var    mapObj,
            map ;

    mapObj = {
        restrict: 'EAC',
        scope: {

            origin :'=',       //origin of the direction request (object with lat lng field)
            destination: '=',   //destination of the direction request  (object with lat lng field)
            zoom: '=',
            type: '@',          //type of map
            directions: '@',
            marker:'=',
            fixedmarkers:'=',
            mapId:'@',
            initPosition : '='  //start position if string will be used geocoding to find lat and lng if object with lat and lng this will be used
        },
        replace: true,
        templateUrl: 'maps/maps-directions.tpl.html',



        link: function (scope, element, attrs) {

            var toHHMMSS = function (value) {
                var sec_num = parseInt(value, 10); // don't forget the second param
                var hours   = Math.floor(sec_num / 3600);
                var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                var seconds = sec_num - (hours * 3600) - (minutes * 60);

                if (hours   < 10) {hours   = "0"+hours;}
                if (minutes < 10) {minutes = "0"+minutes;}
                if (seconds < 10) {seconds = "0"+seconds;}
                var time    = hours+':'+minutes+':'+seconds;
                return time;
            } ;

            var toKM = function(value){
                var meters = parseInt(value,10);
                if  ( meters < 1000 ){
                    return  meters+' m';
                }
                else {
                    var km =  meters/1000;
                    return (Math.round( km * 10 ) / 10)+' Km';
                }


            }  ;


            /**
             * Trick in order to be sure that the element MapId has already been rendered (like onload but is triggered every time a directive is created)
              DON'T NEED IT ANY MORE THE  updateFixedMarkers take care of initializing the map if is not already defined
             SELECTED_ITEMS Update -> Watch on fixedmarkers (to which we pass selected_items) is fired -> updateFixedMarkers  is called
             and map initialized


            $timeout(function(){

                //check I am not in the markerMap case because in this case markerMap is setted
                    map = MapsService.initMap(map,scope.initPosition,scope.mapId,scope.zoom,scope.type);



            }) ;
             */




             scope.directionsMode =false;
            /**
             * When Travel mode is changed the map is recreated with the new directions
             */
            scope.travelModality = google.maps.DirectionsTravelMode.WALKING;
            scope.setTravelMode = function (value) {

                scope.travelModality = google.maps.DirectionsTravelMode[value];
                scope.getDirections();

            };

            scope.isCurrentTravelMode = function (mode) {
                if (scope.travelModality == mode) {
                    return true;
                }
                return false;

            };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Hanle the map where are shown directions and single markers (Planning)
             * @type {google.maps.DirectionsRenderer}
             */
            var directionsDisplay = new google.maps.DirectionsRenderer(),
                directionsService = new google.maps.DirectionsService();
            var markerList = [];

            //WATCHERS
            /**
             *
             * Making the origin value and the destination value passed to the directive syncronized with their actual value
             */
            scope.$watch('origin', function (newValue, oldValue) {
                if (newValue) {
                    scope.origin = newValue;
                    scope.updateDirectionMap();
                }
            });

            scope.$watch('destination', function (newValue, oldValue) {
                if (newValue) {
                    scope.destination = newValue;
                    scope.updateDirectionMap();
                }

            });

            scope.$watch('marker', function (newValue, oldValue) {
                if (newValue) {
                    scope.marker = newValue;
                    scope.updateMarkerMap();
                }
            });
            scope.$watch('fixedmarkers', function (newValue, oldValue) {
                if (newValue) {
                    console.log("called fixedmarkers ");
                    console.log(newValue);
                    

                    scope.fixedmarkers = newValue;
                    scope.updateFixedMarkers();
                }
            },true);

            /*
            Update fixed point in the map
             */
            scope.updateFixedMarkers= function(markerMap){

                if (markerMap === undefined) {

                    markerMap = MapsService.initMap(markerMap,scope.initPosition,scope.mapId,scope.zoom,scope.type) ;

                }

                angular.forEach(markerList, function (value, key) {
                    value.setMap(null);

                });
                markerList = []; //all marker have been cleaned up by the function before



                angular.forEach(scope.fixedmarkers, function (value, key) {

                    markerList.push(MapsService.addMarker(value, markerMap,false));
                });

            }  ;

            scope.updateDirectionMap = function () {
                scope.directionsMode =true;

                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 13,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: true
                };


                map = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);

                /**
                 * getting latitude and longitude of the point passed as origin destination
                 * @type {google.maps.LatLng}
                 */
                scope.startPoint = new google.maps.LatLng(scope.origin.lat, scope.origin.lng, true);
                scope.endPoint = new google.maps.LatLng(scope.destination.lat, scope.destination.lng, true);

                map.setCenter(scope.startPoint);

                scope.updateFixedMarkers(map);// readding fixed points

                /**
                 * Create the marker for the origin and destination and setting info window
                 * @type {google.maps.Marker}
                 */
                MapsService.addMarker(scope.origin, map, true);
                MapsService.addMarker(scope.destination, map, true);


                //Avoid fast animation
                setTimeout(function () {
                    scope.getDirections();
                }, 500);


            };



            scope.getDirections = function () {


                var request = {
                    origin: scope.startPoint,
                    destination: scope.endPoint,
                    travelMode: scope.travelModality
                };
                directionsService.route(request, function (response, status) {
                    if (status === google.maps.DirectionsStatus.OK) {
                        // Display the distance:
                        console.log(response);


                        console.log(response.routes[0].legs[0].distance.value);
                        console.log("duration");
                        console.log(response.routes[0].legs[0].duration.value );


                        scope.distance = toKM(response.routes[0].legs[0].distance.value);
                        console.log("dis");
                        console.log(scope.distance);

                        // Display the duration:
                         scope.duration = toHHMMSS (response.routes[0].legs[0].duration.value );
                        console.log("dur");
                        console.log(scope.duration);
                        console.log(element);

                        directionsDisplay.setDirections(response);
                        scope.$apply();

                    }
                    directionsDisplay.setMap(map);

                });


            };

            scope.updateMarkerMap = function () {
                scope.directionsMode =false;

                //console.log("updating marker map");


                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 12,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };
                map = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);
                var place = new google.maps.LatLng(scope.marker.lat, scope.marker.lng, true);
                map.setCenter(place);

                scope.updateFixedMarkers(map);// readding fixed points


                MapsService.addMarker(scope.marker, map, true);


            };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






        }


    };

    return mapObj;



});