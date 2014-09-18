angular.module('templates-common', ['maps/maps.tpl.html']);

angular.module("maps/maps.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("maps/maps.tpl.html",
    "<div  class=\"panel\">\n" +
    "    <form id=\"mode\">\n" +
    "        <input type=\"button\" ng-click=\"setTravelMode('DRIVING');\" value=\"DRIVING\"/>\n" +
    "        <input type=\"button\" ng-click=\"setTravelMode('WALKING');\"  value=\"WALKING\" />\n" +
    "        <input type=\"button\" ng-click=\"setTravelMode('TRANSIT');\"   value=\"TRANSIT\"/>\n" +
    "    </form>\n" +
    "    <div id=\"theMap\">\n" +
    "    </div>\n" +
    "    <div class=\"directions\" ng-show=\"directions || directions==undefined\">\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
