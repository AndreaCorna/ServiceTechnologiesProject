angular.module('templates-common', ['maps/maps.tpl.html', 'place-list/place-list.tpl.html']);

angular.module("maps/maps.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("maps/maps.tpl.html",
    "<div  class=\"panel\">\n" +
    "    <div ng-show=\"planTripSelected\">\n" +
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
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div id=\"{{mapId}}\" class=\"theMap\">\n" +
    "    </div>\n" +
    "    <div class=\"directions\" ng-show=\"directions || directions==undefined\">\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("place-list/place-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("place-list/place-list.tpl.html",
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
    "        <div ng-show=\"(origin && destination) || currentMarker\" id=\"scrollingMaps\" class=\"col-md-8 \" >\n" +
    "\n" +
    "            <map origin=\"origin\" map-id=\"{{mymapid}}\" destination=\"destination\" marker=\"currentMarker\" type=\"roadmap\" class=\"mapContainer\" ></map>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
