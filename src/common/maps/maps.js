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
            markerarray:'=',   //place where to put a marker (object with lat lng field)
            initposition:'='
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

            scope.$watch('markerarray', function(newValue, oldValue) {
                if (newValue) {
                    console.log("newValeu");
                    console.log(newValue);


                    console.log("oldVal");
                    console.log(oldValue);


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
                map = new google.maps.Map(document.getElementById('theMap'), mapOptions);

                /**
                 * getting latitude and longitude of the point passed as origin destination
                 * @type {google.maps.LatLng}
                 */
                scope.startPoint = new google.maps.LatLng(scope.origin.lat,scope.origin.lng,true) ;
                scope.endPoint = new google.maps.LatLng(scope.destination.lat,scope.destination.lng,true) ;

                console.log("start");
                console.log(scope.origin);
                console.log("end");
                console.log(scope.destination);

                map.setCenter(scope.startPoint);

                /**
                 * Create the marker for the origign and setting info window
                 * @type {google.maps.Marker}
                 */
                var markerStart = new google.maps.Marker({
                    map: map,
                    position: scope.startPoint,
                    animation: google.maps.Animation.DROP
                });
                var infowindowStart = new google.maps.InfoWindow({
                    content: scope.origin.name !== undefined ? scope.origin.name : ''
                });
                google.maps.event.addListener(markerStart, 'click', function () {
                    return infowindowStart.open(map, markerStart);
                });
                infowindowStart.open(map, markerStart);


                /**
                 * Create the marker for the destination and setting info window
                 * @type {google.maps.Marker}
                 */
                var markerEnd = new google.maps.Marker({
                    map: map,
                    position: scope.endPoint,
                    animation: google.maps.Animation.DROP
                });
                var infowindowEnd = new google.maps.InfoWindow({
                    content: scope.destination.name !== undefined ? scope.destination.name : ''
                });
                google.maps.event.addListener(markerEnd, 'click', function () {
                    return infowindowEnd.open(map, markerEnd);
                });
                infowindowEnd.open(map, markerEnd);

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
                });
                directionsDisplay.setMap(map);


            };

            scope.updateMarkerMap = function(){
                console.log("updating marker map");

                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 15,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };
                var mymap = new google.maps.Map(document.getElementById('theMap'), mapOptions);
                console.log("inside marker map scope marker");
                console.log(scope.marker);

                var place = new google.maps.LatLng(scope.marker.lat,scope.marker.lng,true) ;
                console.log("inside marker map scope place");
                console.log(place);
                mymap.setCenter(place);

                var marker = new google.maps.Marker({
                    map: mymap,
                    position: place,
                    animation: google.maps.Animation.DROP
                });
                var infowindow = new google.maps.InfoWindow({
                    content: scope.marker.name !== undefined ? scope.marker.name : ''
                });
                google.maps.event.addListener(marker, 'click', function () {
                    return infowindow.open(mymap, marker);
                });
                infowindow.open(mymap, marker);

            } ;


            var  markerarraymap;
            var markersarray = [];


            var arrayDiff = function(first,second) {
                console.log("in array diff");
                console.log("first");
                console.log(first);
                console.log("second");
                console.log(second);

                var onlyFirst = first.filter(function(current){
                    return second.filter(function(current_b){
                        return current_b.id == current.id;
                    }).length === 0;
                });





                console.log("result");
                console.log(onlyFirst);
                return onlyFirst;
            };

            var addMarker=function(obj,map) {
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
                infowindow.open(map, marker);
                return marker;
            }  ;


            scope.updateArrayMarkerMap = function(toAdd,toRemove) {
                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 15,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };
                if (markerarraymap === undefined) {

                    markerarraymap = new google.maps.Map(document.getElementById('theMap'), mapOptions);
                    var place = new google.maps.LatLng(45.46,9.18,true) ;

                    markerarraymap.setCenter(place);
                }



                console.log("to add array:");
                console.log(toAdd);

                console.log("to remove array:");
                console.log(toRemove);

                angular.forEach(toAdd, function (value, key) {
                    console.log("to add");
                    console.log(value);

                    markersarray[value] = addMarker(value,markerarraymap) ;

                });

                angular.forEach(toRemove, function (value, key) {
                    markersarray[value].setMap(null);
                    delete markersarray[value];
                });

            } ;



        }
    };

    return mapObj;



});