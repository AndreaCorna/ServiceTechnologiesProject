angular.module('templates-common', ['maps/maps.tpl.html']);

angular.module("maps/maps.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("maps/maps.tpl.html",
    "<div  class=\"panel\">\n" +
    "    <div class=\"btn-group btn-group-justified\">\n" +
    "        <div class=\"btn-group\">\n" +
    "            <button type=\"button\" data-target=\"#\"  ng-click=\"setTravelMode('DRIVING');\" class=\"btn btn-default travel-btn\" data-toggle=\"pill\">Driving</button>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group\">\n" +
    "            <button type=\"button\" data-target=\"#\" ng-click=\"setTravelMode('WALKING');\" class=\"btn btn-default travel-btn travel-selected\"  data-toggle=\"pill\">Walking</button>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group\">\n" +
    "            <button type=\"button\" data-target=\"#\" ng-click=\"setTravelMode('TRANSIT');\" class=\"btn btn-default travel-btn\" data-toggle=\"pill\">Public Transport</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div id=\"theMap\">\n" +
    "    </div>\n" +
    "    <div class=\"directions\" ng-show=\"directions || directions==undefined\">\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
