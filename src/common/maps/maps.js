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
            markerArraySelected:'=',   //place where to put a marker (object with lat lng field)
            markerArrayList : '=',
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

            scope.$watch('markerArraySelected', function(newValue, oldValue) {
                if (newValue) {
                    console.log('odl');

                    console.log(oldValue);

                    console.log(newValue);
                    console.log('change');
                    console.log(scope.markerArraySelected);
                    var toRemove = arrayDiff(oldValue,newValue);
                    var toAdd = arrayDiff(newValue, oldValue);
                    console.log('to remove');
                    console.log(toRemove);
                    console.log('to add');
                    console.log(toAdd);

                    scope.updateArrayMarkerSelectedMap(toAdd,toRemove);
                }
            }, true);

            scope.$watch('markerArrayList', function(newValue, oldValue) {
                if (newValue) {
                    scope.markerArrayList = newValue;
                    scope.updateArrayMarkerListMap();
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

            scope.updateMarkerMap = function(){
                //console.log("updating marker map");
                scope.planTripSelected = false;


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
            var  markersArraySelection = [];
            var  markerList = [];

            scope.updateArrayMarkerListMap = function() {
                scope.planTripSelected = false;

                var mapOptions = {
                    zoom: 13,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };
                if (markerarraymap === undefined) {

                    markerarraymap = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);

                }
                angular.forEach(markerList, function (value, key) {
                    value.setMap(null);
                    delete markerList[value];
                });

                //console.log("updating updateArrayMarkerListMap markerArrayList:");
                //console.log(scope.markerArrayList);
                angular.forEach(scope.markerArrayList, function (value, key) {
                    markerList.push(addMarker(value,markerarraymap));
                    var place = new google.maps.LatLng(value.lat,value.lng,true) ;
                    markerarraymap.setCenter(place);
                });

            } ;

            scope.updateArrayMarkerSelectedMap = function(toAdd,toRemove) {

                scope.planTripSelected = false;

                angular.forEach(toAdd, function (value, key) {
                    markersArraySelection[value.id] = addMarker(value,markerarraymap,true) ;



                });

                angular.forEach(toRemove, function (value, key) {
                    markersArraySelection[value.id].setMap(null);
                    delete markersArraySelection[value.id];
                });
                console.log(markersArraySelection);


            } ;


            /**
             * add a marker to the map
             * @param obj   object with a lat and a  lng  which represents its latitude and logitude and a name field used in infoWindow
             * @param map    map to attach the marker
             * @param showInfo   boolean value to show infoWindow at initialization of map
             * @returns {google.maps.Marker}
             */
            var addMarker=function(obj,map,selected,showInfo) {
                var place = new google.maps.LatLng(obj.lat,obj.lng,true) ;
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
                    } ,
                    entertainment: {
                        icon: iconBase + 'entertainmentmarker.png'
                    },
                    hotel: {
                        icon:  iconBase + 'hotelmarker.png'
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
                    markerIcon = icons[obj.tag].icon  ;
                }


                var marker = new google.maps.Marker({
                    map: map,
                    position: place,
                    animation: google.maps.Animation.DROP ,
                    icon :markerIcon
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