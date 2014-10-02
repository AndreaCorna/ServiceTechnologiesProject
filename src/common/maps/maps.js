/**
 * Created by Lorenzo on 13/09/14.
 */

var component = angular.module('common.maps', []);

component.directive('map', function ($timeout) {
    'use strict';


     var  geocoder = new google.maps.Geocoder(),
          mapObj,
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
            markerArraySelected:'=',   //place where to put a marker (object with lat lng field)
            markerArrayList : '=',
            mapId:'@',
            initPosition : '='  //start position if string will be used geocoding to find lat and lng if object with lat and lng this will be used
        },
        replace: true,
        templateUrl: 'maps/maps.tpl.html',



        link: function (scope, element, attrs) {

            /**
             * Trick in order to be sure that the element MapId has already been rendered (like onload but is triggered every time a directive is created)
             */
            $timeout(function () {
                console.log("init map called by timeout");




            });
            $timeout(function(){
                map = scope.initMap(map);

            }) ;



            scope.initMap= function(map){
                console.log("init position ");
                console.log(scope.initPosition);
                console.log(map);
                console.log(scope.mapId);


                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 15,

                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };
                map = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);



                if  (scope.initPosition){
                    console.log('init position is defined');

                    scope.initializeMapCenter(scope.initPosition, map);
                }
                else{
                    //set on
                    console.log('init position is undefined');
                    var location = new google.maps.LatLng(51.27, 0.11, true);
                    map.setCenter(location);
                    map.setZoom(5);
                }
                return map ;
            }  ;

            scope.initializeMapCenter = function (center, map) {
                console.log("initialize center");
                console.log(center);
                if (center === undefined) {
                    return;
                }
                //checking if passed object with lat and lng field
                if (center.hasOwnProperty('lat') && center.hasOwnProperty('lng')) {
                    console.log(center);

                    var location = new google.maps.LatLng(center.lat, center.lng, true);

                    map.setCenter(location);
                }
                else {  //try to geocode the object (presumebly a string)
                    geocoder.geocode({
                        address: center
                    }, function (results, status) {
                        var location = results[0].geometry.location;
                        if (status === google.maps.GeocoderStatus.OK) {
                            console.log('geocoding center');
                            console.log(location);

                            map.setCenter(location);


                        } else {
                            console.log('Cannot Geocode');
                        }

                    });
                }
            };


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


            scope.updateDirectionMap = function () {
                scope.planTripSelected = true;
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
                scope.startPoint = new google.maps.LatLng(scope.origin.lat, scope.origin.lng, true);
                scope.endPoint = new google.maps.LatLng(scope.destination.lat, scope.destination.lng, true);

                map.setCenter(scope.startPoint);

                /**
                 * Create the marker for the origin and destination and setting info window
                 * @type {google.maps.Marker}
                 */
                addMarker(scope.origin, map, true);
                addMarker(scope.destination, map, true);


                //Avoid fast animation
                setTimeout(function () {
                    scope.getDirections();
                }, 500);


            };

            //Variable to show panel in the map
            scope.planTripSelected = false;

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

            scope.updateMarkerMap = function () {
                //console.log("updating marker map");
                scope.planTripSelected = false;


                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 15,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };
                map = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);
                var place = new google.maps.LatLng(scope.marker.lat, scope.marker.lng, true);
                map.setCenter(place);

                addMarker(scope.marker, map, true);


            };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


            /**
             * Handle a list of dinamically added places to the map  used in City
             */
            //need to keep track of the added and removed markers
            //though the timeout the initMap function is call just when directive is redered so
            //one time for the map of city but when the planning map is rendered the variable map is change and will refer to this map
            //and the change to the map variable will be applied to this map and not to the city one
            var markerMap ;
            var markersArraySelection = [];
            var markerList = [];

            scope.$watch('markerArraySelected', function (newValue, oldValue) {
                if (newValue) {

                    var toRemove = arrayDiff(oldValue, newValue);
                    var toAdd = arrayDiff(newValue, oldValue);


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
                scope.planTripSelected = false;
                console.log("inside method updateArrayMarkerListMap");
                console.log("old marker list");


                console.log(markerList);

                console.log("new marker list");
                
                console.log(scope.markerArrayList);
                

                console.log("current map");
                console.log(markerMap);

                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 15,

                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };

                //first time is rendered so the map initilazed by the timeout is the current one
                if (markerMap === undefined){
                   // markerMap = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);
                   // scope.initializeMapCenter(scope.initPosition,markerMap);
                   // markerMap = scope.initMap(markerMap) ;
                    markerMap = map;
                }



                angular.forEach(markerList, function (value, key) {
                    value.setMap(null);

                });
                markerList = []; //all marker have been cleaned up by the function before
                console.log(" marker list after deletion");
                console.log(markerList);


                //console.log("updating updateArrayMarkerListMap markerArrayList:");
                //console.log(scope.markerArrayList);
                angular.forEach(scope.markerArrayList, function (value, key) {
                    console.log("addin marker");
                    console.log(value);
                    console.log(scope.mapId);


                    markerList.push(addMarker(value, markerMap,false));
                });
                console.log(" marker list after addingMarkers");
                console.log(markerList);


            };

            scope.updateArrayMarkerSelectedMap = function (toAdd, toRemove) {

                scope.planTripSelected = false;

                angular.forEach(toAdd, function (value, key) {
                    markersArraySelection[value.id] = addMarker(value, markerMap, true);


                });

                angular.forEach(toRemove, function (value, key) {
                    markersArraySelection[value.id].setMap(null);
                    delete markersArraySelection[value.id];
                });
                console.log(markersArraySelection);


            };

            //external variable so that whe clicked outside or to another marker the old infowindow disappear
            var infowindow;

            /**
             * add a marker to the map
             * @param obj   object with a lat and a  lng  which represents its latitude and logitude and a name field used in infoWindow
             * @param map    map to attach the marker
             *
             * @returns {google.maps.Marker}
             */
            var addMarker = function (obj, map, selected) {
                var place = new google.maps.LatLng(obj.lat, obj.lng, true);
                //console.log("inside marker map scope place");
                //console.log(place);

                //changing icon based on attribute
                var iconBase = 'assets/images/maps/';
                var icons = {
                    notselected: {
                        icon: iconBase + 'notselectedmarker.png'
                    },
                    food: {
                        icon: iconBase + 'foodmarker.png'
                    },
                    utility: {
                        icon: iconBase + 'utilitymarker.png'
                    },
                    entertainment: {
                        icon: iconBase + 'entertainmentmarker.png'
                    },
                    hotel: {
                        icon: iconBase + 'hotelmarker.png'
                    },
                    culture: {
                        icon: iconBase + 'culturemarker.png'
                    }
                };

                var markerIcon;
                if (!selected) {
                    markerIcon = icons.notselected.icon;
                }
                else {
                    markerIcon = icons[obj.tag].icon;
                }


                var marker = new google.maps.Marker({
                    map: map,
                    position: place,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon
                });

                google.maps.event.addListener(marker, 'click', function () {
                    if (infowindow) {
                        infowindow.close();
                    }
                    infowindow = new google.maps.InfoWindow({
                        content: obj.name !== undefined ? obj.name : ''
                    });
                    return infowindow.open(map, marker);
                });


                return marker;
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