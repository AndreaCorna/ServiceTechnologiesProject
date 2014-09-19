/**
 * Created by Lorenzo on 13/09/14.
 */

var component = angular.module('common.maps', []);

component.directive('map', function () {
    'use strict';

    var directionsDisplay = new google.maps.DirectionsRenderer(),
        directionsService = new google.maps.DirectionsService(),
        geocoder = new google.maps.Geocoder(),
        map,

        mapObj;

    mapObj = {
        restrict: 'EAC',
        scope: {

            origin :'=',       //origin of the direction request (object with lat lng field)
            destination: '=',   //destination of the direction request  (object with lat lng field)
            zoom: '=',
            type: '@',          //type of map
            directions: '@',
            marker:'=',
            markerArray:'=',   //place where to put a marker (object with lat lng field)
            initposition:'=',
            mapId:'@'
        },
        replace: true,
        templateUrl: 'maps/maps.tpl.html',
        link: function (scope, element, attrs) {


            //WATCHERS
            /**
             *
             * Making the origin value and the destination value passed to the directive syncronized with their actual value
             */
            scope.$watch('origin', function(newValue, oldValue) {
                if (newValue) {
                    scope.origin = newValue;
                    scope.updateDirectionMap();
                }
            }, true);

            scope.$watch('destination', function(newValue, oldValue) {
                if (newValue) {
                    scope.destination = newValue;
                    scope.updateDirectionMap();
                }

            }, true);

            scope.$watch('marker', function(newValue, oldValue) {
                if (newValue) {
                    scope.marker = newValue;
                    scope.updateMarkerMap();
                }
            }, true);

            scope.$watch('markerArray', function(newValue, oldValue) {
                if (newValue) {

                    console.log("updating toRemove");
                    var toRemove = arrayDiff(oldValue,newValue);
                    console.log("updating toAdd");

                    var toAdd = arrayDiff(newValue, oldValue);
                    console.log("updating updateArrayMarkerMap");

                    scope.updateArrayMarkerMap(toAdd,toRemove);
                }
            }, true);




            /**
             * When Travel mode is changed the map is recreated with the new directions
             */
            scope.travelModality =google.maps.DirectionsTravelMode.WALKING;
            scope.setTravelMode = function(value){

                scope.travelModality = google.maps.DirectionsTravelMode[value];
                scope.getDirections();

            } ;

            scope.isCurrentTravelMode = function(mode){
                if( scope.travelModality == mode){
                    return true;
                }
                return false;

            };



            scope.updateDirectionMap = function () {
                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 15,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: true
                };



                map = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);

                /**
                 * getting latitude and longitude of the point passed as origin destination
                 * @type {google.maps.LatLng}
                 */
                scope.startPoint = new google.maps.LatLng(scope.origin.lat,scope.origin.lng,true) ;
                scope.endPoint = new google.maps.LatLng(scope.destination.lat,scope.destination.lng,true) ;

                map.setCenter(scope.startPoint);

                /**
                 * Create the marker for the origin and destination and setting info window
                 * @type {google.maps.Marker}
                 */
                addMarker(scope.origin,map,true) ;
                addMarker(scope.destination,map,true) ;


                //Avoid fast animation
                setTimeout(function() {  scope.getDirections(); }, 500);

                /*
                geocoder.geocode({
                    address: scope.endPoint
                }, function (results, status) {
                    var location = results[0].geometry.location;
                    if (status === google.maps.GeocoderStatus.OK) {
                        map.setCenter(location);
                        marker = new google.maps.Marker({
                            map: map,
                            position: location,
                            animation: google.maps.Animation.DROP
                        });
                        infowindow = new google.maps.InfoWindow({
                            content: scope.markerContent !== undefined ? scope.markerContent : 'Google HQ'
                        });
                        google.maps.event.addListener(marker, 'click', function () {
                            return infowindow.open(map, marker);
                        });

                    } else {
                        alert('Cannot Geocode');
                    }

                });*/


            };

            scope.getDirections = function () {
                var request = {
                    origin: scope.startPoint,
                    destination: scope.endPoint,
                    travelMode: scope.travelModality
                };
                directionsService.route(request, function (response, status) {
                    if (status === google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                    directionsDisplay.setMap(map);
                });



            };

            scope.updateMarkerMap = function(){
                console.log("updating marker map");

                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 15,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };
                map = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);
                var place = new google.maps.LatLng(scope.marker.lat,scope.marker.lng,true) ;
                map.setCenter(place);

                addMarker(scope.marker,map,true) ;


            } ;


            /**
             * Handle a list of dinamically added places to the map
             */
            var  markerarraymap;
            var  markersarray = [];

            scope.updateArrayMarkerMap = function(toAdd,toRemove) {
                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 15,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };
                if (markerarraymap === undefined) {
                    console.log("mapid");

                    console.log(scope.mapId);
                    console.log(document.getElementById(scope.mapId));

                    markerarraymap = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);
                    var place = new google.maps.LatLng(45.46,9.18,true) ;

                    markerarraymap.setCenter(place);
                }


                angular.forEach(toAdd, function (value, key) {

                    markersarray[value.id] = addMarker(value,markerarraymap) ;

                });

                angular.forEach(toRemove, function (value, key) {
                    markersarray[value.id].setMap(null);
                    delete markersarray[value.id];
                });

            } ;


            /**
             * add a marker to the map
             * @param obj   object with a lat and a  lng  which represents its latitude and logitude and a name field used in infoWindow
             * @param map    map to attach the marker
             * @param showInfo   boolean value to show infoWindow at initialization of map
             * @returns {google.maps.Marker}
             */
            var addMarker=function(obj,map,showInfo) {
                var place = new google.maps.LatLng(obj.lat,obj.lng,true) ;
                console.log("inside marker map scope place");
                console.log(place);

                var marker = new google.maps.Marker({
                    map: map,
                    position: place,
                    animation: google.maps.Animation.DROP
                });
                var infowindow = new google.maps.InfoWindow({
                    content: obj.name !== undefined ? obj.name : ''
                });
                google.maps.event.addListener(marker, 'click', function () {
                    return infowindow.open(map, marker);
                });
                if(showInfo) {
                    infowindow.open(map, marker);
                }

                return marker;
            }  ;

            //return elements which are in the first array  but not in second based on a id field to compare
            var arrayDiff = function(first,second) {

                var onlyFirst = first.filter(function(current){
                    return second.filter(function(current_b){
                        return current_b.id == current.id;
                    }).length === 0;
                });
                return onlyFirst;
            };



        }
    };

    return mapObj;



});