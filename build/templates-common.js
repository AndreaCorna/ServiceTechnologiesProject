angular.module('templates-common', ['file-upload/file-upload.tpl.html', 'maps/maps-directions.tpl.html', 'maps/maps-markers.tpl.html', 'place-list/place-list-details.tpl.html', 'place-list/place-list-maps.tpl.html']);

angular.module("file-upload/file-upload.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("file-upload/file-upload.tpl.html",
    "<form id=\"fileupload\" action=\"https://trippo.s3.amazonaws.com/\" method=\"POST\" enctype=\"multipart/form-data\" data-ng-app=\"demo\" data-ng-controller=\"FileUploadController\" data-file-upload=\"options\" data-ng-class=\"{'fileupload-processing': processing() || loadingFiles}\">\n" +
    "    <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->\n" +
    "    <div class=\"row fileupload-buttonbar\">\n" +
    "        <div class=\"col-lg-7\">\n" +
    "            <!-- The fileinput-button span is used to style the file input field as button -->\n" +
    "                <span class=\"btn btn-success fileinput-button\" ng-class=\"{disabled: disabled}\">\n" +
    "                    <i class=\"glyphicon glyphicon-plus\"></i>\n" +
    "                    <span>Add Guide Picture</span>\n" +
    "                    <input type=\"file\" name=\"files[]\" multiple ng-disabled=\"disabled\">\n" +
    "                </span>\n" +
    "\n" +
    "            <!-- The global file processing state -->\n" +
    "            <span class=\"fileupload-process\"></span>\n" +
    "        </div>\n" +
    "        <!-- The global progress state -->\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- The table listing the files available for upload/download -->\n" +
    "        <div style=\"margin-top: 10px\" class=\"row well\" data-ng-repeat=\"file in queue\" data-ng-class=\"{'processing': file.$processing()}\">\n" +
    "            <div class=\"col-md-3\" data-ng-switch data-on=\"!!file.thumbnailUrl\" ng-show=\"file.thumbnailUrl\">\n" +
    "                <div class=\"preview\" data-ng-switch-when=\"true\">\n" +
    "                    <a data-ng-href=\"{{file.url}}\" title=\"{{file.name}}\" download=\"{{file.name}}\" data-gallery><img style=\"height: 100px\" data-ng-src=\"{{file.thumbnailUrl}}\" alt=\"\"></a>\n" +
    "                </div>\n" +
    "                <div class=\"preview\" data-ng-switch-default data-file-upload-preview=\"file\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-5\">\n" +
    "                <p class=\"name center-text\" data-ng-switch data-on=\"!!file.url\">\n" +
    "                        <span data-ng-switch-when=\"true\" data-ng-switch data-on=\"!!file.thumbnailUrl\">\n" +
    "                            <a data-ng-switch-when=\"true\" data-ng-href=\"{{file.url}}\" title=\"{{file.name}}\" download=\"{{file.name}}\" data-gallery>{{file.name}}</a>\n" +
    "                            <a data-ng-switch-default data-ng-href=\"{{file.url}}\" title=\"{{file.name}}\" download=\"{{file.name}}\">{{file.name}}</a>\n" +
    "                        </span>\n" +
    "                    <span data-ng-switch-default>{{file.name}}</span>\n" +
    "                </p>\n" +
    "                <strong data-ng-show=\"file.error\" class=\"error text-danger\">{{file.error}}</strong>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-12\" ng-show=\"file.$state()\">\n" +
    "\n" +
    "                <div class=\"progress progress-striped active fade\" data-ng-class=\"{pending: 'in'}[file.$state()]\" data-file-upload-progress=\"file.$progress()\" ><div class=\"progress-bar progress-bar-success\" data-ng-style=\"{width: num + '%'}\"></div></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary start\" data-ng-click=\"file.$submit()\" data-ng-hide=\"!file.$submit || options.autoUpload\" data-ng-disabled=\"file.$state() == 'pending' || file.$state() == 'rejected'\">\n" +
    "                    <i class=\"glyphicon glyphicon-upload\"></i>\n" +
    "                    <span>Start</span>\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-warning cancel\" data-ng-click=\"file.$cancel()\" data-ng-hide=\"!file.$cancel\">\n" +
    "                    <i class=\"glyphicon glyphicon-ban-circle\"></i>\n" +
    "                    <span>Cancel</span>\n" +
    "                </button>\n" +
    "\n" +
    "            </div>\n" +
    "          </div>\n" +
    "</form>\n" +
    "");
}]);

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
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Message body -->\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-md-2 control-label\" for=\"distance\" style=\"font-size: 18px\">Distance</label>\n" +
    "            <div class=\"col-md-10\">\n" +
    "                <p class=\"form-control\"  id=\"distance\" >{{distance}}</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <!-- Form actions -->\n" +
    "        <div class=\"form-group\">\n" +
    "\n" +
    "            <label class=\"col-md-2 control-label\" for=\"duration\" style=\"font-size: 18px\">Duration</label>\n" +
    "\n" +
    "            <div class=\"col-md-10\">\n" +
    "                <p class=\"form-control\"  id=\"duration\" >{{duration}}</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"{{mapId}}\" class=\"theMap\"> </div>\n" +
    "\n" +
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
    "\n" +
    "                        <div ng-if=\"item.photos[0] !== undefined\">\n" +
    "                            <img style=\"height: 220px;  width:100%;\" ng-src=\"{{item.photos[0].image}}\" >\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"item.image !== undefined && item.photos[0] === undefined\">\n" +
    "                            <img style=\"height: 220px;  width:100%;\" ng-src=\"{{item.image}}\" >\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"item.image === undefined && item.photos[0] === undefined\">\n" +
    "                            <img style=\"height: 220px;  width:100%;\" ng-src=\"assets/images/empty_photo.png\">\n" +
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
    "                                <button class=\"btn btn-primary btn-outlined z-up\" style=\";margin-left: 4px;margin-bottom: 5px\"  ng-click=\"setDetails(item)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">MORE</button>\n" +
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
