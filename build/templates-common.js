angular.module('templates-common', ['maps/maps.tpl.html']);

angular.module("maps/maps.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("maps/maps.tpl.html",
    "<form novalidate name=\"mapContainer\" class=\"mapContainer panel\">\n" +
    "    <div id=\"theMap\"></div>\n" +
    "    <div class=\"directions\" ng-show=\"directions || directions==undefined\">\n" +
    "    </div>\n" +
    "\n" +
    "</form>\n" +
    "");
}]);
