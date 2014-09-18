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
            marker:'='                 //place where to put a marker (object with lat lng field)
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
                    console.log("updating map");
                    scope.updateDirectionMap();
                }

            }, true);

            scope.$watch('marker', function(newValue, oldValue) {
                if (newValue) {
                    console.log("markerPoint changed value");

                    scope.marker = newValue;
                    scope.updateMarkerMap();
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
                console.log("-------------- mode");

                console.log("travel mode");
                console.log(scope.travelModality);
                console.log("passed mode");

                console.log(google.maps.DirectionsTravelMode[mode]);

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
                setTimeout(function() {  scope.getDirections(); }, 1000);

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



        }
    };

    return mapObj;



});