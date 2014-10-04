angular.module('templates-common', ['maps/maps-directions.tpl.html', 'maps/maps-markers.tpl.html', 'place-list/place-list-details.tpl.html', 'place-list/place-list-maps.tpl.html']);

angular.module("maps/maps-directions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("maps/maps-directions.tpl.html",
    "<div  class=\"panel\">\n" +
    "    <div ng-if=\"directionsMode\">\n" +
    "        <div class=\"btn-group btn-group-justified\">\n" +
    "            <div class=\"btn-group\">\n" +
    "                <button type=\"button\"   ng-click=\"setTravelMode('DRIVING');\" class=\"btn btn-primary travel-btn\" ng-class=\"isCurrentTravelMode('DRIVING')? 'active': ''\">Driving</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group\">\n" +
    "                <button type=\"button\"  ng-click=\"setTravelMode('WALKING');\" class=\"btn btn-primary travel-btn \" ng-class=\"isCurrentTravelMode('WALKING')? 'active': ''\">Walking</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group\">\n" +
    "                <button type=\"button\"  ng-click=\"setTravelMode('TRANSIT');\" class=\"btn btn-primary travel-btn\" ng-class=\"isCurrentTravelMode('TRANSIT')? 'active': ''\">Public Transport</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div id=\"{{mapId}}\" class=\"theMap\">\n" +
    "    </div>\n" +
    "    <div class=\"directions\" ng-show=\"directions || directions==undefined\">\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("maps/maps-markers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("maps/maps-markers.tpl.html",
    "<div  class=\"panel\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div id=\"{{mapId}}\" class=\"theMap\">\n" +
    "    </div>\n" +
    "    <div class=\"directions\" ng-show=\"directions || directions==undefined\">\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("place-list/place-list-details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("place-list/place-list-details.tpl.html",
    "<div class=\"row\" ng-repeat=\"item in itemList\" >\n" +
    "\n" +
    "    <div class=\"col-md-12\" >\n" +
    "        <div class=\"row\" style=\"margin-left: 4px;margin-right: 4px\">\n" +
    "\n" +
    "            <div class=\"brdr bgc-fff pad-10 box-shad property-listing\">\n" +
    "                <div class=\"media\">\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                        <div ng-if=\"item.photos.length==0\">\n" +
    "                            <img style=\"height: 220px;  width:100%;\" ng-src=\"assets/images/empty_photo.png\">\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"item.photos.length>0\">\n" +
    "                            <img style=\"height: 220px;  width:100%;\" ng-src=\"{{item.photos[0].image}}\" >\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"clearfix visible-sm\"></div>\n" +
    "\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"media-body fnt-smaller\">\n" +
    "\n" +
    "                            <h4 class=\"media-heading\">\n" +
    "                                <a href=\"#\" target=\"_parent\">{{item.name}} </a>\n" +
    "                                <button class=\"btn btn-primary btn-outlined pull-right\" style=\"margin-top: 3px\"  ng-click=\"setDetails(item)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">MORE INFO</button>\n" +
    "\n" +
    "                            </h4>\n" +
    "\n" +
    "\n" +
    "                            <div ng-if=\"!item.description\">\n" +
    "                                <p class=\"hidden-xs\">No description available</p>\n" +
    "                            </div>\n" +
    "                            <div ng-if=\"item.description\">\n" +
    "                                <div class=\"panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto;margin-top: 13px;\">\n" +
    "                                    <div class=\"hidden-xs text-justify \" >{{item.description}}</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <br><br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("place-list/place-list-maps.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("place-list/place-list-maps.tpl.html",
    "<div  class=\" timeline-centered\"  >\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"timeline-list col-md-4\">\n" +
    "            <div ng-repeat=\"item in selectedItems\"  >\n" +
    "                <div class=\"row\" >\n" +
    "                    <div ng-click=\"setMapsMarker(item)\" ng-class=\"isCurrentMap(item,'marker')? 'selected-color' : getItemClass(item) \" class=\" timeline-item \" >\n" +
    "                        <div class=\"row\" style=\"height: 48px;\">\n" +
    "\n" +
    "                            <h1 class=\"item-name\">{{item.name}}</h1>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"btn-group\">\n" +
    "\n" +
    "                                <button class=\"btn btn-primary btn-outlined z-up\" style=\";margin-left: 4px;margin-bottom: 5px\"  ng-click=\"setCultureDetails(item.id)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">MORE</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <article class=\"timeline-entry\" >\n" +
    "                        <div class=\"timeline-entry-inner\">\n" +
    "\n" +
    "                            <div ng-click=\"setMapsDirections(item,date)\"  class=\"timeline-icon \" ng-class=\"isCurrentMap(item,'direction')? 'icon-selected' : 'icon-not-selected' \">\n" +
    "                                <i class=\"entypo-feather\"></i>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "                        </div>\n" +
    "\n" +
    "                    </article>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div  id=\"scrollingMaps\" class=\"col-md-8 \" >\n" +
    "\n" +
    "            <map-directions origin=\"origin\" map-id=\"{{mymapid}}\" init-position=\"initPosition\"  destination=\"destination\" marker=\"currentMarker\" type=\"roadmap\" class=\"mapContainer\" ></map-directions>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
