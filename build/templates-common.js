angular.module('templates-common', ['map/map.tpl.html']);

angular.module("map/map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("map/map.tpl.html",
    "<form novalidate name=\"mapContainer\" class=\"mapContainer panel\">\n" +
    "    <div id=\"theMap\"></div>\n" +
    "    <div class=\"directions\" ng-show=\"directions || directions==undefined\">\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</form>");
}]);
