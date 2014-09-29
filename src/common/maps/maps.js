/**
 * Created by Lorenzo on 13/09/14.
 */

var component = angular.module('common.maps', []);

component.directive('map', function () {
    'use strict';


     var  geocoder = new google.maps.Geocoder(),
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
            mapId:'@',
            initPosition : '='  //start position if string will be used geocoding to find lat and lng if object with lat and lng this will be used
        },
        replace: true,
        templateUrl: 'maps/maps.tpl.html',
        link: function (scope, element, attrs) {









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

             scope.initializeMapCenter= function(center, map){
                 console.log("initialize center");
                 console.log(center);

                 //checking if passed object with lat and lng field
                if (center.hasOwnProperty('lat') && center.hasOwnProperty('lng')){
                    map.setCenter(location);
                }
                else{  //try to geocode the object (presumebly a string)
                    geocoder.geocode({
                        address: center
                    }, function (results, status) {
                        var location = results[0].geometry.location;
                        if (status === google.maps.GeocoderStatus.OK) {
                            map.setCenter(location);




                        } else {
                            console.log('Cannot Geocode');
                        }

                    });
                }
             } ;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /**
             * Hanle the map where are shown directions and single markers (Planning)
             * @type {google.maps.DirectionsRenderer}
             */
            var directionsDisplay = new google.maps.DirectionsRenderer(),
                directionsService = new google.maps.DirectionsService(),
                map;
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

            scope.initMap= function(){
                var mapOptions = {
                    zoom: scope.zoom !== undefined ? scope.zoom : 15,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };
                console.log("map");
                console.log(document.getElementById(scope.mapId));

                map = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);
                scope.initializeMapCenter(scope.initPosition, map)    ;

            } ;

            //scope.initMap();

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



            /**
             * Handle a list of dinamically added places to the map  used in City
             */
            var  markerarraymap;
            var  markersArraySelection = [];
            var  markerList = [];

            scope.$watch('markerArraySelected', function(newValue, oldValue) {
                if (newValue) {

                    var toRemove = arrayDiff(oldValue,newValue);
                    var toAdd = arrayDiff(newValue, oldValue);


                    scope.updateArrayMarkerSelectedMap(toAdd,toRemove);
                }
            }, true);

            scope.$watch('markerArrayList', function(newValue, oldValue) {
                if (newValue) {
                    scope.markerArrayList = newValue;
                    scope.updateArrayMarkerListMap();
                }
            }, true);




            scope.updateArrayMarkerListMap = function() {
                scope.planTripSelected = false;

                var mapOptions = {
                    zoom: 13,
                    mapTypeId: scope.type.toLowerCase(),
                    streetViewControl: false
                };
                if (markerarraymap === undefined) {

                    markerarraymap = new google.maps.Map(document.getElementById(scope.mapId), mapOptions);
                    scope.initializeMapCenter(scope.initPosition,markerarraymap)  ;

                    console.log("arraymarker map");
                    console.log(document.getElementById(scope.mapId));

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