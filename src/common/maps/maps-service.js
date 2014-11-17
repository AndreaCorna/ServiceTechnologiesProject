/**
 * Created by Lorenzo on 03/10/14.
 */

angular.module('common.mapsService',[])
.factory('MapsService', function () {
         var  geocoder = new google.maps.Geocoder();

         var initMap= function(map, initPosition,mapId,zoom,type){
            console.log("init position ");
            console.log(initPosition);
            console.log(map);
            console.log(mapId);


            var mapOptions = {
                zoom: zoom !== undefined ? zoom : 12,

                mapTypeId: type.toLowerCase(),
                streetViewControl: false
            };
            map = new google.maps.Map(document.getElementById(mapId), mapOptions);



            if  (initPosition){
                console.log('init position is defined');

                initializeMapCenter(initPosition, map);
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

        var initializeMapCenter = function (center, map) {
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
                    if (results[0] != null) {
                        var location = results[0].geometry.location;
                        if (status === google.maps.GeocoderStatus.OK) {
                            console.log('geocoding center');
                            console.log(location);

                            map.setCenter(location);


                        } else {
                            console.log('Cannot Geocode');
                        }
                    }

                });
            }
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

        return {
            initMap :initMap ,
            initializeMapCenter : initializeMapCenter,
            addMarker :addMarker
        } ;


    });