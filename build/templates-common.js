angular.module('templates-common', ['maps/maps.tpl.html', 'navbar/nav.tpl.html']);

angular.module("maps/maps.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("maps/maps.tpl.html",
    "<div  class=\"panel\">\n" +
    "    <div class=\"btn-group btn-group-justified\">\n" +
    "        <div class=\"btn-group\">\n" +
    "            <button type=\"button\"   ng-click=\"setTravelMode('DRIVING');\" class=\"btn btn-primary travel-btn\" ng-class=\"isCurrentTravelMode('DRIVING')? 'active': ''\">Driving</button>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group\">\n" +
    "            <button type=\"button\"  ng-click=\"setTravelMode('WALKING');\" class=\"btn btn-primary travel-btn \" ng-class=\"isCurrentTravelMode('WALKING')? 'active': ''\">Walking</button>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group\">\n" +
    "            <button type=\"button\"  ng-click=\"setTravelMode('TRANSIT');\" class=\"btn btn-primary travel-btn\" ng-class=\"isCurrentTravelMode('TRANSIT')? 'active': ''\">Public Transport</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
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

angular.module("navbar/nav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("navbar/nav.tpl.html",
    "<div ng-controller=\"NavBarCtrl\" class=\"navbar navbar-default navbar-static-top\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <a class=\"navbar-brand\" href=\"/\"><i class=\"ion-ios7-pulse-strong\"></i> Trippo</a>\n" +
    "    </div>\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "        <li><a href=\"/\">Home</a></li>\n" +
    "        <li ng-if=\"isAuthenticated()\"><a href=\"/#/profile\">Profile</a></li>\n" +
    "    </ul>\n" +
    "    <ul ng-if=\"!isAuthenticated()\" class=\"nav navbar-nav pull-right\">\n" +
    "        <li><a href=\"/#/login\">Login</a></li>\n" +
    "        <li><a href=\"/#/signup\">Sign up</a></li>\n" +
    "    </ul>\n" +
    "    <ul ng-if=\"isAuthenticated()\" class=\"nav navbar-nav pull-right\">\n" +
    "        <li><a href=\"/#/logout\">Logout</a></li>\n" +
    "    </ul>\n" +
    "</div>");
}]);
