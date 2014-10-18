angular.module('templates-app', ['about/about.tpl.html', 'city/city.tpl.html', 'city/culture.tpl.html', 'city/entertainment.tpl.html', 'city/food.tpl.html', 'city/guide.tpl.html', 'city/guides.tpl.html', 'city/hotel.tpl.html', 'city/utility.tpl.html', 'home/home.tpl.html', 'log_in/log_in.tpl.html', 'log_in/profile.tpl.html', 'plan_trip/createtrip.tpl.html', 'plan_trip/planning.tpl.html', 'plan_trip/trip_dates.tpl.html', 'sign_up/sign_up.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("city/city.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/city.tpl.html",
    "<div class=\"top-view\">\n" +
    "    <div class=\"container \" >\n" +
    "        <h3 class=\"text-capitalize text-center\" style=\"font-family: Capriola;\">Welcome to {{city.name}}</h3>\n" +
    "        <div ng-if=\"isGuides()\">\n" +
    "            <div class=\"row background-carousel\">\n" +
    "                <carousel interval=\"intervalImages\" class=\"carousel-fixed-height col-md-8 col-md-offset-2\" style=\"padding: 0px\">\n" +
    "                    <slide ng-repeat=\"image in images\" active=\"image.active\" style=\" height:100%;width:100%;\">\n" +
    "                        <img ng-src=\"{{image.url}}\" style=\" height:100%;width:100%;\" >\n" +
    "                    </slide>\n" +
    "                </carousel>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-if=\"!isGuides()\"  >\n" +
    "            <map-markers marker-array-selected=\"markerArraySelected\" init-position=\"getCityName()\" marker-array-list=\"markerArrayList\" map-id=\"cityMap\"  type=\"roadmap\" class=\"mapContainer\" ></map-markers>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div id='cssmenu'>\n" +
    "    <ul>\n" +
    "        <li><a ui-sref=\"guides\"  data-target=\"#\" data-toggle=\"pill\"><span>Guides</span></a></li>\n" +
    "        <li><a ui-sref=\"culture\" ng-click=\"setCurrentList('culture')\" data-target=\"#\" data-toggle=\"pill\"><span>Culture</span></a></li>\n" +
    "        <li><a ui-sref=\"entertainment\" ng-click=\"setCurrentList('entertainment')\" data-target=\"#\" data-toggle=\"pill\"><span>Entertainment</span></a></li>\n" +
    "        <li><a ui-sref=\"hotel\" ng-click=\"setCurrentList('hotel')\" data-target=\"#\" data-toggle=\"pill\"><span>Hotel</span></a></li>\n" +
    "        <li><a ui-sref=\"utility\" ng-click=\"setCurrentList('utility')\" data-target=\"#\" data-toggle=\"pill\"><span>Utility</span></a></li>\n" +
    "        <li><a ui-sref=\"food\" ng-click=\"setCurrentList('food')\" data-target=\"#\" data-toggle=\"pill\"><span>Food</span></a></li>\n" +
    "\n" +
    "\n" +
    "        <li class='last'><a ui-sref=\"dates\" data-target=\"#\" data-toggle=\"pill\"><span>Plan Trip</span></a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div ui-view=\"content\" class=\"fill\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"modal fade\" ng-controller=\"ModalCtrl\" id=\"moreInfoModalPlace\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "        <div class=\"modal-dialog\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                    <div ng-show=\"modalEnabled\">\n" +
    "                        <div class=\"modal-header\">\n" +
    "                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"disableModal()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "                            <h4 class=\"modal-title capriola\" id=\"myModalLabel\">More Information about {{moreInfoSelection.name}}</h4>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"modal-body\">\n" +
    "                        <div ng-show=\"modalEnabled\">\n" +
    "                            <div class=\"container-fluid capriola\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-6 col-md-6 capriola\" >\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Rating</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <rating ng-model=\"moreInfoSelection.rating\" readonly=\"true\" max=5></rating>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-6 col-md-6\">\n" +
    "                                    <div ng-show=\"moreInfoSelection.price != null\">\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <b>Price</b>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"row\">\n" +
    "                                            {{moreInfoSelection.price}}\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-6 col-md-6\" >\n" +
    "                                    <div ng-show=\"moreInfoSelection.international_phone != null\">\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <b>Phone</b>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"row\">\n" +
    "                                            {{moreInfoSelection.international_phone}}\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-6 col-md-6\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Address</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        {{moreInfoSelection.formatted_address}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-12 col-md-12\" >\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Web Site</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\" style=\"word-wrap: break-word;\">\n" +
    "                                        <a target=\"_blank\" ng-href=\"{{moreInfoSelection.web_site}}\">{{moreInfoSelection.web_site}}</a>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"moreInfoSelection.open_hours != null\">\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-sm-12 col-md-12\">\n" +
    "                                        <div class=\"text-capitalize text-center\">\n" +
    "                                            <b>Open Hours</b>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div ng-show=\"moreInfoSelection.open_hours[0].hours[0].close != null\">\n" +
    "                                        <div class=\"col-sm-3 col-md-3\" >\n" +
    "                                            <div class=\"panel panel-info\">\n" +
    "                                                <div>\n" +
    "                                                    <div class=\"text-center\">Sunday</div>\n" +
    "                                                    <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[0].hours\">\n" +
    "                                                        {{couple.open}} - {{couple.close}}\n" +
    "                                                    </div>\n" +
    "                                                    <div ng-if=\"moreInfoSelection.open_hours[0] == null\">\n" +
    "                                                        <div class=\"text-center\">\n" +
    "                                                            <b>Closed</b>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-sm-3 col-md-3\" >\n" +
    "                                            <div class=\"panel panel-info\">\n" +
    "                                                <div>\n" +
    "                                                    <div class=\"text-center\">Monday</div>\n" +
    "                                                    <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[1].hours\">\n" +
    "                                                        {{couple.open}} - {{couple.close}}\n" +
    "                                                    </div>\n" +
    "                                                    <div ng-if=\"moreInfoSelection.open_hours[1] == null\">\n" +
    "                                                        <div class=\"text-center\">\n" +
    "                                                            <b>Closed</b>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-sm-3 col-md-3\" >\n" +
    "                                            <div class=\"panel panel-info\">\n" +
    "                                                <div>\n" +
    "                                                    <div class=\"text-center\">Tuesday</div>\n" +
    "                                                    <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[2].hours\">\n" +
    "                                                        {{couple.open}} - {{couple.close}}\n" +
    "                                                    </div>\n" +
    "                                                    <div ng-if=\"moreInfoSelection.open_hours[2] == null\">\n" +
    "                                                        <div class=\"text-center\">\n" +
    "                                                            <b>Closed</b>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-sm-3 col-md-3\" >\n" +
    "                                            <div class=\"panel panel-info\">\n" +
    "                                                <div>\n" +
    "                                                    <div class=\"text-center\">Wednesday</div>\n" +
    "                                                    <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[3].hours\">\n" +
    "                                                        {{couple.open}} - {{couple.close}}\n" +
    "                                                    </div>\n" +
    "                                                    <div ng-if=\"moreInfoSelection.open_hours[3] == null\">\n" +
    "                                                        <div class=\"text-center\">\n" +
    "                                                            <b>Closed</b>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-sm-3 col-md-3\" >\n" +
    "                                            <div class=\"panel panel-info\">\n" +
    "                                                <div>\n" +
    "                                                    <div class=\"text-center\">Thursday</div>\n" +
    "                                                    <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[4].hours\">\n" +
    "                                                        {{couple.open}} - {{couple.close}}\n" +
    "                                                    </div>\n" +
    "                                                    <div ng-if=\"moreInfoSelection.open_hours[4] == null\">\n" +
    "                                                        <div class=\"text-center\">\n" +
    "                                                            <b>Closed</b>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-sm-3 col-md-3\" >\n" +
    "                                            <div class=\"panel panel-info\">\n" +
    "                                                <div>\n" +
    "                                                    <div class=\"text-center\">Friday</div>\n" +
    "                                                    <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[5].hours\">\n" +
    "                                                        {{couple.open}} - {{couple.close}}\n" +
    "                                                    </div>\n" +
    "                                                    <div ng-if=\"moreInfoSelection.open_hours[5] == null\">\n" +
    "                                                        <div class=\"text-center\">\n" +
    "                                                            <b>Closed</b>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-sm-3 col-md-3\" >\n" +
    "                                            <div class=\"panel panel-info\">\n" +
    "                                                <div>\n" +
    "                                                    <div class=\"text-center\">Saturday</div>\n" +
    "                                                    <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[6].hours\">\n" +
    "                                                        {{couple.open}} - {{couple.close}}\n" +
    "                                                    </div>\n" +
    "                                                    <div ng-if=\"moreInfoSelection.open_hours[6] == null\">\n" +
    "                                                        <div class=\"text-center\">\n" +
    "                                                            <b>Closed</b>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div ng-show=\"moreInfoSelection.open_hours[0].hours[0].close == null\">\n" +
    "                                        <div class=\"col-sm-12 col-md-12\">\n" +
    "                                            <div class=\"panel panel-info\">\n" +
    "                                                <h5 class=\"text-center text-capitalize capriola\">Always Open</h5>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-12 col-md-12\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <div class=\"panel-image-modal\">\n" +
    "                                            <carousel interval=\"intervalImages\" >\n" +
    "                                                <slide ng-repeat=\"image in moreInfoSelection.photos\" active=\"image.active\">\n" +
    "                                                    <img class=\"image-modal\" style=\"height: 400px\" ng-src=\"data:image/JPEG;base64,{{image.image}}\" >\n" +
    "                                                </slide>\n" +
    "                                            </carousel>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-12 col-md-12\">\n" +
    "                                    <div ng-show=\"moreInfoSelection.reviews != null\">\n" +
    "                                        <p class=\"text-center\">\n" +
    "                                            <b>Reviews</b>\n" +
    "                                        </p>\n" +
    "                                        <span ng-repeat=\"review in moreInfoSelection.reviews\">\n" +
    "                                            <div class=\"panel-group\" id=\"{{review.author_name}}\">\n" +
    "                                                <div class=\"panel  panel-info\">\n" +
    "                                                    <div class=\"panel-heading\">\n" +
    "                                                        <h4 class=\"panel-title\">\n" +
    "                                                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#{{review.author_name}}\" data-target=\"#{{$index}}\">{{review.author_name}}</a>\n" +
    "                                                        </h4>\n" +
    "                                                    </div>\n" +
    "                                                    <div id=\"{{$index}}\" class=\"panel-collapse collapse\">\n" +
    "                                                        <div class=\"panel-body\">\n" +
    "                                                            <p class=\"text-left\">\n" +
    "                                                                <b>Aspects</b>\n" +
    "                                                            </p>\n" +
    "                                                            <div class=\"star-rating\">\n" +
    "                                                                <span ng-repeat=\"aspect in review.aspects\">\n" +
    "                                                                    <div class=\"row\">\n" +
    "                                                                        <div class=\"col-sm-3 col-md-3\">\n" +
    "                                                                            <b class=\"text-capitalize\">{{aspect.type}}</b>\n" +
    "                                                                        </div>\n" +
    "                                                                        <div class=\"col-sm-8 col-md-8\">\n" +
    "                                                                            <rating ng-model=\"aspect.rating\" readonly=\"true\" max=3></rating>\n" +
    "                                                                        </div>\n" +
    "                                                                    </div>\n" +
    "                                                                </span>\n" +
    "                                                            </div>\n" +
    "                                                            <div class=\"row\">\n" +
    "                                                                <div class=\"col-sm-12 col-md-12\">\n" +
    "                                                                    <div ng-show=\"review.text != ''\">\n" +
    "                                                                        <p class=\"text-left\">\n" +
    "                                                                            <b>Comment</b>\n" +
    "                                                                        </p>\n" +
    "                                                                        {{review.text}}\n" +
    "                                                                    </div>\n" +
    "                                                                </div>\n" +
    "                                                            </div>\n" +
    "                                                            <div class=\"row\">\n" +
    "                                                                <div class=\"col-sm-3 col-md-3\">\n" +
    "                                                                    <b class=\"text-capitalize\">Rating</b>\n" +
    "                                                                </div>\n" +
    "                                                                <div class=\"col-sm-8 col-md-8\">\n" +
    "                                                                    <rating ng-model=\"review.rating\" readonly=\"true\" max=5></rating>\n" +
    "                                                                </div>\n" +
    "                                                            </div>\n" +
    "                                                            <div class=\"col-sm-12 col-md-12\">\n" +
    "                                                                <div class=\"row\">\n" +
    "                                                                    <em>\n" +
    "                                                                        Contact User <a target=\"_blank\" ng-href=\"{{review.author_url}}\">GooglePlus!</a>\n" +
    "                                                                    </em>\n" +
    "                                                                </div>\n" +
    "                                                            </div>\n" +
    "                                                        </div>\n" +
    "\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "\n" +
    "                                       </div>\n" +
    "                                      </span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        </div>\n" +
    "                        <div ng-show=\"loaderEnabled\">\n" +
    "                            <div class=\"container-fluid\">\n" +
    "                                <div class=\"panel-body\">\n" +
    "                                    <div class=\"loader\">\n" +
    "                                    <div class=\"bouncywrap\">\n" +
    "\n" +
    "                                        <div class=\"dotcon dc1\">\n" +
    "                                            <div class=\"dot\"></div>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                        <div class=\"dotcon dc2\">\n" +
    "                                            <div class=\"dot\"></div>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                        <div class=\"dotcon dc3\">\n" +
    "                                            <div class=\"dot\"></div>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"modal-footer capriola\">\n" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default \" data-dismiss=\"modal\"  ng-click=\"disableModal()\">Close</button>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"modal fade\" ng-controller=\"ModalCtrl\" id=\"moreInfoModalHotel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div ng-show=\"modalEnabled\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"disableModal()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "                    <h4 class=\"modal-title capriola\" id=\"myModalLabelHotel\">More Information about {{moreInfoSelection.name}}</h4>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div ng-show=\"modalEnabled\">\n" +
    "                    <div class=\"container-fluid capriola\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-6 col-md-6 capriola\" >\n" +
    "                                <div ng-if=\"hotelShow\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Rating</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <img ng-src=\"{{moreInfoSelection.rating}}\" >\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                            <div class=\"col-sm-6 col-md-6 capriola\" >\n" +
    "                                <div ng-show=\"moreInfoSelection.address != null\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Address</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        {{moreInfoSelection.address}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-12 col-md-12\">\n" +
    "                                <div class=\"row\" style=\"padding-top: 20px\">\n" +
    "                                    <div class=\"panel-image-modal\">\n" +
    "                                        <carousel interval=\"intervalImages\" >\n" +
    "                                            <slide ng-repeat=\"image in moreInfoSelection.photos\" active=\"image.active\">\n" +
    "                                                <img class=\"image-modal\" style=\"height: 400px\" ng-src=\"data:image/JPEG;base64,{{image.image}}\" >\n" +
    "                                            </slide>\n" +
    "                                        </carousel>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\" style=\"padding-top: 20px\">\n" +
    "                            <div class=\"col-sm-11 col-md-11 capriola\" >\n" +
    "                                <div class=\"panel  panel-info\">\n" +
    "                                    <div class=\"panel-heading\">\n" +
    "                                        <h4 class=\"panel-title\">\n" +
    "                                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-target=\"#descriptionInfo\">Information</a>\n" +
    "                                        </h4>\n" +
    "                                    </div>\n" +
    "                                    <div id=\"descriptionInfo\" class=\"panel-collapse collapse\">\n" +
    "                                        <div class=\"panel-body\">\n" +
    "                                            <div class=\"text-justify\">\n" +
    "                                                {{moreInfoSelection.info}}\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"panel  panel-info\">\n" +
    "                                    <div class=\"panel-heading\">\n" +
    "                                        <h4 class=\"panel-title\">\n" +
    "                                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-target=\"#descriptionTab\">Description</a>\n" +
    "                                        </h4>\n" +
    "                                    </div>\n" +
    "                                    <div id=\"descriptionTab\" class=\"panel-collapse collapse\">\n" +
    "                                        <div class=\"panel-body\">\n" +
    "                                            <div class=\"text-justify\">\n" +
    "                                                {{moreInfoSelection.description}}\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"panel  panel-info\">\n" +
    "                                    <div class=\"panel-heading\">\n" +
    "                                        <h4 class=\"panel-title\">\n" +
    "                                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-target=\"#descriptionPolicy\">Policy</a>\n" +
    "                                        </h4>\n" +
    "                                    </div>\n" +
    "                                    <div id=\"descriptionPolicy\" class=\"panel-collapse collapse\">\n" +
    "                                        <div class=\"panel-body\">\n" +
    "                                            <div class=\"text-justify\">\n" +
    "                                                {{moreInfoSelection.policy}}\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-show=\"loaderEnabled\">\n" +
    "                    <div class=\"container-fluid\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            <div class=\"loader\">\n" +
    "                                <div class=\"bouncywrap\">\n" +
    "                                    <div class=\"dotcon dc1\">\n" +
    "                                        <div class=\"dot\"></div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"dotcon dc2\">\n" +
    "                                        <div class=\"dot\"></div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"dotcon dc3\">\n" +
    "                                         <div class=\"dot\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer capriola\">\n" +
    "                <button type=\"button\" class=\"btn btn-default \" data-dismiss=\"modal\"  ng-click=\"disableModal()\">Close</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script>\n" +
    "    $(function () {\n" +
    "        $('#moreInfoModalPlace').on('hidden.bs.modal', function () {\n" +
    "            var scope = angular.element(document.querySelector('#moreInfoModalPlace')).scope();\n" +
    "            scope.disableModal();\n" +
    "        });\n" +
    "    });\n" +
    "</script>\n" +
    "<script>\n" +
    "    $(function () {\n" +
    "        $('#moreInfoModalHotel').on('hidden.bs.modal', function () {\n" +
    "            var scope = angular.element(document.querySelector('#moreInfoModalHotel')).scope();\n" +
    "            scope.disableModal();\n" +
    "        });\n" +
    "    });\n" +
    "</script>\n" +
    "<script>\n" +
    "    $(function(){\n" +
    "        $('#moreInfoModalHotel').on('shown.bs.modal', function () {\n" +
    "            var scope = angular.element(document.querySelector('#moreInfoModalHotel')).scope();\n" +
    "            scope.hotelShow = true;\n" +
    "        });\n" +
    "    });\n" +
    "</script>\n" +
    "");
}]);

angular.module("city/culture.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/culture.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"well\">\n" +
    "        <h1 class=\"text-center capriola\">Culture</h1>\n" +
    "        <div class=\"list-group\">\n" +
    "        <div ng-show=\"cultureSelection != undefined && cultureSelection.length != 0\">\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <div class=\"col-sm-4 col-md-4\" style=\"display: inline\">\n" +
    "                        <div class=\"capriola\">Search\n" +
    "                            <input type=\"text\"  placeholder=\"Name\" data-ng-model=\"elementSelectionName\" />\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-4 col-md-4\">\n" +
    "                        <div class=\"text-capitalize item-filter\">Order by:</div>\n" +
    "                        <select data-ng-model=\"elementSelectionOrder\" class=\"item-filter\">\n" +
    "                            <option value=\"name\" selected>Name</option>\n" +
    "                            <option value=\"rating\">Rating</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <span ng-repeat=\"c in cultureSelection | filter:{name:elementSelectionName} | orderBy:elementSelectionOrder\">\n" +
    "            <div class=\"list-group-item list-culture\" style=\"background-color: #ffeeaa\">\n" +
    "                <div class=\" bgc-fff pad-10 property-listing\">\n" +
    "                    <div class=\"media\">\n" +
    "                        <div class=\"col-sm-3 col-md-3\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"assets/images/empty_photo.png\" >\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-7 col-md-7\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row capriola\">\n" +
    "                                <div class=\"col-sm-9 col-md-9\">\n" +
    "                                    <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-4 col-md-4\">\n" +
    "                                    <p class=\"capriola\">Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-3 col-md-3\">\n" +
    "                                    <div ng-show=\"c.price != null\">\n" +
    "                                        <p class=\"capriola\">Price {{c.price}}</p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"c.description != null\" style=\"display: block\">\n" +
    "                                <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                    <div class=\"text-justify capriola\" >{{c.description}}</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-2 col-md-2\">\n" +
    "                            <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <button class=\"btn btn-primary btn-sm capriola button-item\" ng-click=\"setCultureDetails(c.id)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">\n" +
    "                                        Details <span class=\"glyphicon glyphicon-info-sign \"></span>\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12\" style=\"padding-top: 10px\">\n" +
    "                                    <button class=\"btn btn-danger btn-sm capriola button-item\" ng-click=\"removeCultureItem(c)\">\n" +
    "                                        Remove <span class=\"glyphicon glyphicon-minus-sign \"></span>\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </span>\n" +
    "        </div>\n" +
    "        <div class=\"list-group\">\n" +
    "            <div ng-show=\"infiniteScroll.itemList != null && infiniteScroll.itemList.length !=0\">\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"col-sm-4 col-md-4\" style=\"display: inline\">\n" +
    "                            <div class=\"capriola\">Search\n" +
    "                                <input type=\"text\"  placeholder=\"Name\" data-ng-model=\"elementListName\" />\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-4 col-md-4\">\n" +
    "                            <div class=\"text-capitalize item-filter\">Order by:</div>\n" +
    "                            <select data-ng-model=\"elementListOrder\" class=\"item-filter\">\n" +
    "                                <option value=\"name\" selected>Name</option>\n" +
    "                                <option value=\"rating\">Rating</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div infinite-scroll=\"infiniteScroll.nextPage(resource,setLoader)\" infinite-scroll-distance=\"2\" infinite-scroll-disabled=\"infiniteScroll.busy\">\n" +
    "                <span ng-repeat=\"c in infiniteScroll.itemList | filter:{name:elementListName} | orderBy:elementListOrder\">\n" +
    "                    <div class=\"list-group-item list-culture\">\n" +
    "                       <div class=\"col-sm-3 col-md-3\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                       </div>\n" +
    "                    <div class=\"col-sm-7 col-md-7\" style=\"height:230px\">\n" +
    "                        <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row capriola\">\n" +
    "                                <div class=\"col-sm-9 col-md-9\">\n" +
    "                                    <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-4 col-md-4\">\n" +
    "                                    <p class=\"capriola\">Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-3 col-md-3\">\n" +
    "                                    <div ng-show=\"c.price != null\">\n" +
    "                                        <p class=\"capriola\">Price {{c.price}}</p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"c.description != null\" style=\"display: block\">\n" +
    "                                <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                     <div class=\"text-justify capriola\" >{{c.description}}</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-2 col-md-2\">\n" +
    "                        <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-primary btn-sm capriola button-item\" ng-click=\"setCultureDetails(c.id)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">\n" +
    "                                   Details <span class=\"glyphicon glyphicon-info-sign \"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-12\" style=\"padding-top: 10px\">\n" +
    "                                <button class=\"btn btn-success btn-sm capriola button-item\" ng-click=\"addCultureItem(c)\">\n" +
    "                                   Add <span class=\"glyphicon glyphicon-plus-sign \"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-show=\"loaderEnabled\">\n" +
    "    <div class=\"row loader-wait\">\n" +
    "        <div class=\"loader\">\n" +
    "            <div class=\"bouncywrap\">\n" +
    "                <div class=\"dotcon dc1\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"dotcon dc2\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"dotcon dc3\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("city/entertainment.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/entertainment.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"well\">\n" +
    "        <h1 class=\"text-center capriola\">Entertainment</h1>\n" +
    "            <div class=\"list-group\">\n" +
    "                <div ng-show=\"entertainmentSelection != undefined && entertainmentSelection.length !=  0\">\n" +
    "                    <div class=\"panel panel-default\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            <div class=\"col-sm-4 col-md-4\" style=\"display: inline\">\n" +
    "                                <div class=\"capriola\">Search\n" +
    "                                    <input type=\"text\"  placeholder=\"Name\" data-ng-model=\"elementSelectionName\" />\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-4 col-md-4\">\n" +
    "                                <div class=\"text-capitalize item-filter\">Order by:</div>\n" +
    "                                <select data-ng-model=\"elementSelectionOrder\" class=\"item-filter\">\n" +
    "                                    <option value=\"name\" selected>Name</option>\n" +
    "                                    <option value=\"rating\">Rating</option>\n" +
    "                                </select>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span ng-repeat=\"c in entertainmentSelection | filter:{name:elementSelectionName} | orderBy:elementSelectionOrder\">\n" +
    "                    <div class=\"list-group-item list-entertainment\" style=\"background-color: #ffeeaa\">\n" +
    "                        <div class=\"col-sm-3 col-md-3\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-7 col-md-7\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row capriola\">\n" +
    "                                <div class=\"col-sm-9 col-md-9\">\n" +
    "                                    <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-4 col-md-4\">\n" +
    "                                    <p class=\"capriola\">Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-3 col-md-3\">\n" +
    "                                    <div ng-show=\"c.price != null\">\n" +
    "                                        <p class=\"capriola\">Price {{c.price}}</p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"c.description != null\" style=\"display: block\">\n" +
    "                                <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                    <div class=\"text-justify capriola\" >{{c.description}}</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-2 col-md-2\">\n" +
    "                            <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <button class=\"btn btn-primary btn-sm capriola button-item\" ng-click=\"setEntertainmentDetails(c.id)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">\n" +
    "                                        Details <span class=\"glyphicon glyphicon-info-sign \"></span>\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-12\" style=\"padding-top: 10px\">\n" +
    "                                    <button class=\"btn btn-danger btn-sm capriola button-item\" ng-click=\"removeEntertainmentItem(c)\">\n" +
    "                                        Remove <span class=\"glyphicon glyphicon-minus-sign \"></span>\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "        <div class=\"list-group\">\n" +
    "            <div ng-show=\"infiniteScroll.itemList != null && infiniteScroll.itemList.length !=0\">\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"col-sm-4 col-md-4\" style=\"display: inline\">\n" +
    "                            <div class=\"capriola\">Search\n" +
    "                                <input type=\"text\"  placeholder=\"Name\" data-ng-model=\"elementListName\" />\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-4 col-md-4\">\n" +
    "                            <div class=\"text-capitalize item-filter\">Order by:</div>\n" +
    "                            <select data-ng-model=\"elementListOrder\" class=\"item-filter\">\n" +
    "                                <option value=\"name\" selected>Name</option>\n" +
    "                                <option value=\"rating\">Rating</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div infinite-scroll=\"infiniteScroll.nextPage(resource,setLoader)\" infinite-scroll-distance=\"2\" infinite-scroll-disabled=\"infiniteScroll.busy\">\n" +
    "                    <span ng-repeat=\"c in infiniteScroll.itemList | filter:{name:elementListName} | orderBy:elementListOrder\">\n" +
    "                        <div class=\"list-group-item list-entertainment\">\n" +
    "                            <div class=\"col-sm-3 col-md-3\">\n" +
    "                                <div class=\"panel panel-default\">\n" +
    "                                    <div class=\"panel-body image-panel\">\n" +
    "                                        <carousel interval=\"intervalImages\">\n" +
    "                                            <div ng-if=\"c.photos.length==0\">\n" +
    "                                                <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "                                            </div>\n" +
    "                                            <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                                <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                            </slide>\n" +
    "                                        </carousel>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-7 col-md-7\" style=\"height:230px\">\n" +
    "                                <p class=\"list-group-item-text\">\n" +
    "                                <div class=\"row capriola\">\n" +
    "                                    <div class=\"col-sm-9 col-md-9\">\n" +
    "                                        <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-sm-4 col-md-4\">\n" +
    "                                        <p class=\"capriola\">Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-3 col-md-3\">\n" +
    "                                        <div ng-show=\"c.price != null\">\n" +
    "                                            <p class=\"capriola\">Price {{c.price}}</p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"c.description != null\" style=\"display: block\">\n" +
    "                                    <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                        <div class=\"text-justify capriola\" >{{c.description}}</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-2 col-md-2\">\n" +
    "                                <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <button class=\"btn btn-primary btn-sm capriola button-item\" ng-click=\"setEntertainmentDetails(c.id)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">\n" +
    "                                            Details <span class=\"glyphicon glyphicon-info-sign \"></span>\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-12\" style=\"padding-top: 10px\">\n" +
    "                                        <button class=\"btn btn-success btn-sm capriola button-item\" ng-click=\"addEntertainmentItem(c)\">\n" +
    "                                            Add <span class=\"glyphicon glyphicon-plus-sign \"></span>\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-show=\"loaderEnabled\">\n" +
    "    <div class=\"row loader-wait\">\n" +
    "        <div class=\"loader\">\n" +
    "            <div class=\"bouncywrap\">\n" +
    "                <div class=\"dotcon dc1\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"dotcon dc2\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"dotcon dc3\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("city/food.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/food.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"well\">\n" +
    "        <h1 class=\"text-center capriola\">Food</h1>\n" +
    "        <div class=\"list-group\">\n" +
    "            <div ng-show=\"foodSelection != undefined && foodSelection.length != 0\">\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"col-sm-4 col-md-4\" style=\"display: inline\">\n" +
    "                            <div class=\"capriola\">Search\n" +
    "                                <input type=\"text\"  placeholder=\"Name\" data-ng-model=\"elementSelectionName\" />\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-4 col-md-4\">\n" +
    "                            <div class=\"text-capitalize item-filter\">Order by:</div>\n" +
    "                            <select data-ng-model=\"elementSelectionOrder\" class=\"item-filter\">\n" +
    "                                <option value=\"name\" selected>Name</option>\n" +
    "                                <option value=\"rating\">Rating</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <span ng-repeat=\"c in foodSelection | filter:{name:elementSelectionName} | orderBy:elementSelectionOrder\">\n" +
    "                <div class=\"list-group-item list-food\" style=\"background-color: #ffeeaa\">\n" +
    "                    <div class=\"col-sm-3 col-md-3\">\n" +
    "                        <div class=\"panel panel-default\">\n" +
    "                            <div class=\"panel-body image-panel\">\n" +
    "                                <carousel interval=\"intervalImages\">\n" +
    "                                    <div ng-if=\"c.photos.length==0\">\n" +
    "                                        <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "                                    </div>\n" +
    "                                    <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                        <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                    </slide>\n" +
    "                                </carousel>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-7 col-md-7\" style=\"height:230px\">\n" +
    "                        <p class=\"list-group-item-text\">\n" +
    "                        <div class=\"row capriola\">\n" +
    "                            <div class=\"col-sm-9 col-md-9\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-4 col-md-4\">\n" +
    "                                <p class=\"capriola\">Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-3 col-md-3\">\n" +
    "                                <div ng-show=\"c.price != null\">\n" +
    "                                    <p class=\"capriola\">Price {{c.price}}</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-show=\"c.description != null\" style=\"display: block\">\n" +
    "                            <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify capriola\" >{{c.description}}</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-2 col-md-2\">\n" +
    "                        <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-primary btn-sm capriola button-item\" ng-click=\"setFoodDetails(c.id)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">\n" +
    "                                    Details <span class=\"glyphicon glyphicon-info-sign \"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-12\" style=\"padding-top: 10px\">\n" +
    "                                <button class=\"btn btn-danger btn-sm capriola button-item\" ng-click=\"removeFoodItem(c)\">\n" +
    "                                    Remove <span class=\"glyphicon glyphicon-minus-sign \"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"list-group\">\n" +
    "            <div ng-show=\"infiniteScroll.itemList != null && infiniteScroll.itemList.length !=0\">\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"col-sm-4 col-md-4\" style=\"display: inline\">\n" +
    "                            <div class=\"capriola\">Search\n" +
    "                                <input type=\"text\"  placeholder=\"Name\" data-ng-model=\"elementListName\" />\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-4 col-md-4\">\n" +
    "                            <div class=\"text-capitalize item-filter\">Order by:</div>\n" +
    "                            <select data-ng-model=\"elementListOrder\" class=\"item-filter\">\n" +
    "                                <option value=\"name\" selected>Name</option>\n" +
    "                                <option value=\"rating\">Rating</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div infinite-scroll=\"infiniteScroll.nextPage(resource,setLoader)\" infinite-scroll-distance=\"2\" infinite-scroll-disabled=\"infiniteScroll.busy\">\n" +
    "                    <span ng-repeat=\"c in infiniteScroll.itemList | filter:{name:elementListName} | orderBy:elementListOrder\">\n" +
    "                        <div class=\"list-group-item list-food\">\n" +
    "                            <div class=\"col-sm-3 col-md-3\">\n" +
    "                                <div class=\"panel panel-default\">\n" +
    "                                    <div class=\"panel-body image-panel\">\n" +
    "                                        <carousel interval=\"intervalImages\">\n" +
    "                                            <div ng-if=\"c.photos.length==0\">\n" +
    "                                                <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "                                            </div>\n" +
    "                                            <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                                <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                            </slide>\n" +
    "                                        </carousel>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-7 col-md-7\" style=\"height:230px\">\n" +
    "                                <p class=\"list-group-item-text\">\n" +
    "                                <div class=\"row capriola\">\n" +
    "                                    <div class=\"col-sm-9 col-md-9\">\n" +
    "                                        <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-sm-4 col-md-4\">\n" +
    "                                        <p class=\"capriola\">Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-3 col-md-3\">\n" +
    "                                        <div ng-show=\"c.price != null\">\n" +
    "                                            <p class=\"capriola\">Price {{c.price}}</p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"c.description != null\" style=\"display: block\">\n" +
    "                                    <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                        <div class=\"text-justify capriola\" >{{c.description}}</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-2 col-md-2\">\n" +
    "                                <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <button class=\"btn btn-primary btn-sm capriola button-item\" ng-click=\"setFoodDetails(c.id)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">\n" +
    "                                            Details <span class=\"glyphicon glyphicon-info-sign \"></span>\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-12\" style=\"padding-top: 10px\">\n" +
    "                                        <button class=\"btn btn-success btn-sm capriola button-item\" ng-click=\"addFoodItem(c)\">\n" +
    "                                            Add <span class=\"glyphicon glyphicon-plus-sign \"></span>\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-show=\"loaderEnabled\">\n" +
    "    <div class=\"row loader-wait\">\n" +
    "        <div class=\"loader\">\n" +
    "            <div class=\"bouncywrap\">\n" +
    "                <div class=\"dotcon dc1\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"dotcon dc2\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"dotcon dc3\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("city/guide.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/guide.tpl.html",
    "<div class=\"top-view\">\n" +
    "    <div class=\"page-header\" style=\"margin-top: 0px\">\n" +
    "        <div class=\"vertical-container\">\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <h1 class=\"text-center subtitle\">{{guide.name}}</h1>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container \" >\n" +
    "        <div class=\"row\">\n" +
    "            <a ui-sref=\"guides({city_name:guide.city})\" class=\"btn btn-primary btn-large btn-outlined big-button back-button col-md-2\"><i class=\"glyphicon glyphicon-chevron-left pull-left\"></i>Guides</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <map-markers  marker-array-selected=\"markerArraySelected\" init-position=\"guide.city\" map-id=\"guideMap\"  type=\"roadmap\" class=\"mapContainer\" style=\"margin-top: 20px\" ></map-markers>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-10 col-md-offset-1\">\n" +
    "        <div class=\"well well-sm\">\n" +
    "            <fieldset>\n" +
    "                <legend>Trip Details</legend>\n" +
    "\n" +
    "\n" +
    "                <!-- Message body -->\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-md-2 control-label\" for=\"message\" style=\"font-size: 18px\">Description</label>\n" +
    "                    <div class=\"col-md-10\">\n" +
    "                        <p class=\"form-control\"  id=\"message\" >{{guide.description}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                <!-- Form actions -->\n" +
    "                <div class=\"form-group\">\n" +
    "\n" +
    "                    <label class=\"col-md-2 control-label\" for=\"message\" style=\"font-size: 18px\">Rating</label>\n" +
    "\n" +
    "                    <div class=\"col-md-10\">\n" +
    "                        <rating ng-model=\"guide.rating\" readonly=\"true\" ></rating>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </fieldset>\n" +
    "            <legend>Trip Summary</legend>\n" +
    "            <div class=\"row\" style=\"margin-bottom: 6px\">\n" +
    "                <button class=\"btn btn-primary btn-outlined z-up\" style=\"font-size: 17px;margin-left: 15px;\" ng-click=\"changeView()\">{{currentView}}</button>\n" +
    "            </div>\n" +
    "            <div id=\"{{makeMoment(date.day).format('DD-MM-YYYY')}}\" class=\"panel-group\" ng-repeat=\"date in guide.days\">\n" +
    "                <div class=\"panel  panel-primary no-radius\">\n" +
    "                    <div class=\"panel-heading no-radius  bigger-accordition \" data-toggle=\"collapse\" data-parent=\"#{{makeMoment(date.day).format('DD-MM-YYYY')}}\" data-target=\"#{{makeMoment(date.day).format('DD-MM-YYYY')}}List\">\n" +
    "                        <h4 class=\"panel-title bigger-title\">\n" +
    "                            <a class=\"accordion-toggle bigger-title\" >{{makeMoment(date.day).format('DD  MMMM YYYY')}}</a>\n" +
    "                        </h4>\n" +
    "                    </div>\n" +
    "                    <div id=\"{{makeMoment(date.day).format('DD-MM-YYYY')}}List\" class=\"panel-collapse in\">\n" +
    "\n" +
    "                        <div class=\"panel-body\" style=\"background-color:#e8e8e8\">\n" +
    "\n" +
    "\n" +
    "                            <div ng-show=\"currentView == 'MAPS VIEW'\">\n" +
    "                              <place-list-details  item-list=\"getPlaces(date)\"  ></place-list-details>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <place-list-maps ng-show=\"currentView == 'DETAILS VIEW'\" init-position=\"guide.city\" selected-items=\"getPlaces(date)\" map-id=\"date.day\"></place-list-maps>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"modal fade\" ng-controller=\"ModalCtrl\" id=\"moreInfoModalPlace\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "<div class=\"modal-dialog\">\n" +
    "<div class=\"modal-content\">\n" +
    "<div ng-show=\"modalEnabled\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"disableModal()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "        <h4 class=\"modal-title capriola\" id=\"myModalLabel\">More Information about {{moreInfoSelection.name}}</h4>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "<div ng-show=\"modalEnabled\">\n" +
    "<div class=\"container-fluid capriola\">\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6 col-md-6 capriola\" >\n" +
    "        <div class=\"row\">\n" +
    "            <b>Rating</b>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <rating ng-model=\"moreInfoSelection.rating\" readonly=\"true\" max=5></rating>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div ng-show=\"moreInfoSelection.price != null\">\n" +
    "            <div class=\"row\">\n" +
    "                <b>Price</b>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                {{moreInfoSelection.price}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6 col-md-6\" >\n" +
    "        <div ng-show=\"moreInfoSelection.international_phone != null\">\n" +
    "            <div class=\"row\">\n" +
    "                <b>Phone</b>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                {{moreInfoSelection.international_phone}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"row\">\n" +
    "            <b>Address</b>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            {{moreInfoSelection.formatted_address}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-12 col-md-12\" >\n" +
    "        <div class=\"row\">\n" +
    "            <b>Web Site</b>\n" +
    "        </div>\n" +
    "        <div class=\"row\" style=\"word-wrap: break-word;\">\n" +
    "            <a target=\"_blank\" ng-href=\"{{moreInfoSelection.web_site}}\">{{moreInfoSelection.web_site}}</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-show=\"moreInfoSelection.open_hours != null\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12\">\n" +
    "            <div class=\"text-capitalize text-center\">\n" +
    "                <b>Open Hours</b>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"moreInfoSelection.open_hours[0].hours[0].close != null\">\n" +
    "            <div class=\"col-sm-3 col-md-3\" >\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <div>\n" +
    "                        <div class=\"text-center\">Sunday</div>\n" +
    "                        <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[0].hours\">\n" +
    "                            {{couple.open}} - {{couple.close}}\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"moreInfoSelection.open_hours[0] == null\">\n" +
    "                            <div class=\"text-center\">\n" +
    "                                <b>Closed</b>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 col-md-3\" >\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <div>\n" +
    "                        <div class=\"text-center\">Monday</div>\n" +
    "                        <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[1].hours\">\n" +
    "                            {{couple.open}} - {{couple.close}}\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"moreInfoSelection.open_hours[1] == null\">\n" +
    "                            <div class=\"text-center\">\n" +
    "                                <b>Closed</b>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 col-md-3\" >\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <div>\n" +
    "                        <div class=\"text-center\">Tuesday</div>\n" +
    "                        <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[2].hours\">\n" +
    "                            {{couple.open}} - {{couple.close}}\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"moreInfoSelection.open_hours[2] == null\">\n" +
    "                            <div class=\"text-center\">\n" +
    "                                <b>Closed</b>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 col-md-3\" >\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <div>\n" +
    "                        <div class=\"text-center\">Wednesday</div>\n" +
    "                        <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[3].hours\">\n" +
    "                            {{couple.open}} - {{couple.close}}\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"moreInfoSelection.open_hours[3] == null\">\n" +
    "                            <div class=\"text-center\">\n" +
    "                                <b>Closed</b>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 col-md-3\" >\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <div>\n" +
    "                        <div class=\"text-center\">Thursday</div>\n" +
    "                        <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[4].hours\">\n" +
    "                            {{couple.open}} - {{couple.close}}\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"moreInfoSelection.open_hours[4] == null\">\n" +
    "                            <div class=\"text-center\">\n" +
    "                                <b>Closed</b>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 col-md-3\" >\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <div>\n" +
    "                        <div class=\"text-center\">Friday</div>\n" +
    "                        <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[5].hours\">\n" +
    "                            {{couple.open}} - {{couple.close}}\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"moreInfoSelection.open_hours[5] == null\">\n" +
    "                            <div class=\"text-center\">\n" +
    "                                <b>Closed</b>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 col-md-3\" >\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <div>\n" +
    "                        <div class=\"text-center\">Saturday</div>\n" +
    "                        <div class=\"text-center\" ng-repeat=\"couple in moreInfoSelection.open_hours[6].hours\">\n" +
    "                            {{couple.open}} - {{couple.close}}\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"moreInfoSelection.open_hours[6] == null\">\n" +
    "                            <div class=\"text-center\">\n" +
    "                                <b>Closed</b>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"moreInfoSelection.open_hours[0].hours[0].close == null\">\n" +
    "            <div class=\"col-sm-12 col-md-12\">\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <h5 class=\"text-center text-capitalize capriola\">Always Open</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"panel-image-modal\">\n" +
    "                <carousel interval=\"intervalImages\" >\n" +
    "                    <slide ng-repeat=\"image in moreInfoSelection.photos\" active=\"image.active\">\n" +
    "                        <img class=\"image-modal\" style=\"height: 400px\" ng-src=\"data:image/JPEG;base64,{{image.image}}\" >\n" +
    "                    </slide>\n" +
    "                </carousel>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div ng-show=\"moreInfoSelection.reviews != null\">\n" +
    "            <p class=\"text-center\">\n" +
    "                <b>Reviews</b>\n" +
    "            </p>\n" +
    "                                        <span ng-repeat=\"review in moreInfoSelection.reviews\">\n" +
    "                                            <div class=\"panel-group\" id=\"{{review.author_name}}\">\n" +
    "                                                <div class=\"panel  panel-info\">\n" +
    "                                                    <div class=\"panel-heading\">\n" +
    "                                                        <h4 class=\"panel-title\">\n" +
    "                                                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#{{review.author_name}}\" data-target=\"#{{$index}}\">{{review.author_name}}</a>\n" +
    "                                                        </h4>\n" +
    "                                                    </div>\n" +
    "                                                    <div id=\"{{$index}}\" class=\"panel-collapse collapse\">\n" +
    "                                                        <div class=\"panel-body\">\n" +
    "                                                            <p class=\"text-left\">\n" +
    "                                                                <b>Aspects</b>\n" +
    "                                                            </p>\n" +
    "                                                            <div class=\"star-rating\">\n" +
    "                                                                <span ng-repeat=\"aspect in review.aspects\">\n" +
    "                                                                    <div class=\"row\">\n" +
    "                                                                        <div class=\"col-sm-3 col-md-3\">\n" +
    "                                                                            <b class=\"text-capitalize\">{{aspect.type}}</b>\n" +
    "                                                                        </div>\n" +
    "                                                                        <div class=\"col-sm-8 col-md-8\">\n" +
    "                                                                            <rating ng-model=\"aspect.rating\" readonly=\"true\" max=3></rating>\n" +
    "                                                                        </div>\n" +
    "                                                                    </div>\n" +
    "                                                                </span>\n" +
    "                                                            </div>\n" +
    "                                                            <div class=\"row\">\n" +
    "                                                                <div class=\"col-sm-12 col-md-12\">\n" +
    "                                                                    <div ng-show=\"review.text != ''\">\n" +
    "                                                                        <p class=\"text-left\">\n" +
    "                                                                            <b>Comment</b>\n" +
    "                                                                        </p>\n" +
    "                                                                        {{review.text}}\n" +
    "                                                                    </div>\n" +
    "                                                                </div>\n" +
    "                                                            </div>\n" +
    "                                                            <div class=\"row\">\n" +
    "                                                                <div class=\"col-sm-3 col-md-3\">\n" +
    "                                                                    <b class=\"text-capitalize\">Rating</b>\n" +
    "                                                                </div>\n" +
    "                                                                <div class=\"col-sm-8 col-md-8\">\n" +
    "                                                                    <rating ng-model=\"review.rating\" readonly=\"true\" max=5></rating>\n" +
    "                                                                </div>\n" +
    "                                                            </div>\n" +
    "                                                            <div class=\"col-sm-12 col-md-12\">\n" +
    "                                                                <div class=\"row\">\n" +
    "                                                                    <em>\n" +
    "                                                                        Contact User <a target=\"_blank\" ng-href=\"{{review.author_url}}\">GooglePlus!</a>\n" +
    "                                                                    </em>\n" +
    "                                                                </div>\n" +
    "                                                            </div>\n" +
    "                                                        </div>\n" +
    "\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "\n" +
    "                                            </div>\n" +
    "                                      </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-show=\"loaderEnabled\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            <div class=\"loader\">\n" +
    "                <div class=\"bouncywrap\">\n" +
    "\n" +
    "                    <div class=\"dotcon dc1\">\n" +
    "                        <div class=\"dot\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"dotcon dc2\">\n" +
    "                        <div class=\"dot\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"dotcon dc3\">\n" +
    "                        <div class=\"dot\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer capriola\">\n" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-default \" data-dismiss=\"modal\"  ng-click=\"disableModal()\">Close</button>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"modal fade\" ng-controller=\"ModalCtrl\" id=\"moreInfoModalHotel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div ng-show=\"modalEnabled\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"disableModal()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "                    <h4 class=\"modal-title capriola\" id=\"myModalLabelHotel\">More Information about {{moreInfoSelection.name}}</h4>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div ng-show=\"modalEnabled\">\n" +
    "                    <div class=\"container-fluid capriola\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-6 col-md-6 capriola\" >\n" +
    "                                <div ng-if=\"hotelShow\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Rating</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <img ng-src=\"{{moreInfoSelection.rating}}\" >\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-6 col-md-6 capriola\" >\n" +
    "                                <div ng-show=\"moreInfoSelection.address != null\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Address</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        {{moreInfoSelection.address}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-12 col-md-12\">\n" +
    "                                <div class=\"row\" style=\"padding-top: 20px\">\n" +
    "                                    <div class=\"panel-image-modal\">\n" +
    "                                        <carousel interval=\"intervalImages\" >\n" +
    "                                            <slide ng-repeat=\"image in moreInfoSelection.photos\" active=\"image.active\">\n" +
    "                                                <img class=\"image-modal\" style=\"height: 400px\" ng-src=\"data:image/JPEG;base64,{{image.image}}\" >\n" +
    "                                            </slide>\n" +
    "                                        </carousel>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\" style=\"padding-top: 20px\">\n" +
    "                            <div class=\"col-sm-11 col-md-11 capriola\" >\n" +
    "                                <div class=\"panel  panel-info\">\n" +
    "                                    <div class=\"panel-heading\">\n" +
    "                                        <h4 class=\"panel-title\">\n" +
    "                                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-target=\"#descriptionInfo\">Information</a>\n" +
    "                                        </h4>\n" +
    "                                    </div>\n" +
    "                                    <div id=\"descriptionInfo\" class=\"panel-collapse collapse\">\n" +
    "                                        <div class=\"panel-body\">\n" +
    "                                            <div class=\"text-justify\">\n" +
    "                                                {{moreInfoSelection.info}}\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"panel  panel-info\">\n" +
    "                                    <div class=\"panel-heading\">\n" +
    "                                        <h4 class=\"panel-title\">\n" +
    "                                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-target=\"#descriptionTab\">Description</a>\n" +
    "                                        </h4>\n" +
    "                                    </div>\n" +
    "                                    <div id=\"descriptionTab\" class=\"panel-collapse collapse\">\n" +
    "                                        <div class=\"panel-body\">\n" +
    "                                            <div class=\"text-justify\">\n" +
    "                                                {{moreInfoSelection.description}}\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"panel  panel-info\">\n" +
    "                                    <div class=\"panel-heading\">\n" +
    "                                        <h4 class=\"panel-title\">\n" +
    "                                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-target=\"#descriptionPolicy\">Policy</a>\n" +
    "                                        </h4>\n" +
    "                                    </div>\n" +
    "                                    <div id=\"descriptionPolicy\" class=\"panel-collapse collapse\">\n" +
    "                                        <div class=\"panel-body\">\n" +
    "                                            <div class=\"text-justify\">\n" +
    "                                                {{moreInfoSelection.policy}}\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-show=\"loaderEnabled\">\n" +
    "                    <div class=\"container-fluid\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            <div class=\"loader\">\n" +
    "                                <div class=\"bouncywrap\">\n" +
    "                                    <div class=\"dotcon dc1\">\n" +
    "                                        <div class=\"dot\"></div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"dotcon dc2\">\n" +
    "                                        <div class=\"dot\"></div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"dotcon dc3\">\n" +
    "                                        <div class=\"dot\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer capriola\">\n" +
    "                <button type=\"button\" class=\"btn btn-default \" data-dismiss=\"modal\"  ng-click=\"disableModal()\">Close</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script>\n" +
    "    $(function () {\n" +
    "        $('#moreInfoModalPlace').on('hidden.bs.modal', function () {\n" +
    "            var scope = angular.element(document.querySelector('#moreInfoModalPlace')).scope();\n" +
    "            scope.disableModal();\n" +
    "        });\n" +
    "    });\n" +
    "</script>\n" +
    "<script>\n" +
    "    $(function () {\n" +
    "        $('#moreInfoModalHotel').on('hidden.bs.modal', function () {\n" +
    "            var scope = angular.element(document.querySelector('#moreInfoModalHotel')).scope();\n" +
    "            scope.disableModal();\n" +
    "        });\n" +
    "    });\n" +
    "</script>\n" +
    "<script>\n" +
    "    $(function(){\n" +
    "        $('#moreInfoModalHotel').on('shown.bs.modal', function () {\n" +
    "            var scope = angular.element(document.querySelector('#moreInfoModalHotel')).scope();\n" +
    "            scope.hotelShow = true;\n" +
    "        });\n" +
    "    });\n" +
    "</script>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("city/guides.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/guides.tpl.html",
    "<div class=\"page-header\">\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"well\">\n" +
    "        <h1 class=\"text-center capriola\" >Shared Guides</h1>\n" +
    "            <div class=\"list-group\">\n" +
    "                <div  ng-repeat=\"item in guides\" >\n" +
    "                    <div class=\"list-group-item list-guides\">\n" +
    "                        <div class=\" bgc-fff pad-10 property-listing\">\n" +
    "                            <div class=\"media\">\n" +
    "                                <div class=\"col-sm-3 col-md-3\">\n" +
    "                                    <div class=\"panel panel-default\">\n" +
    "                                        <div class=\"panel-body image-panel\">\n" +
    "                                            <carousel interval=\"intervalImages\">\n" +
    "                                                <div ng-if=\"!item.photos\">\n" +
    "                                                    <img class=\"image-item\" ng-src=\"assets/images/empty_photo.png\">\n" +
    "                                                </div>\n" +
    "                                                <div ng-if=\"item.photos.length>0\">\n" +
    "                                                    <img style=\"height: 220px;  width:100%;\" ng-src=\"{{item.photos[0].image}}\" >\n" +
    "                                                </div>\n" +
    "                                            </carousel>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"clearfix visible-sm\"></div>\n" +
    "                                <div class=\"col-md-7 capriola\" style=\"height:230px\">\n" +
    "                                    <p class=\"list-group-item-text\">\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <b class=\"text-capitalize\">{{item.name}}</b>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"row\" style=\"margin-top: 5px\">\n" +
    "                                                <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                                    <div class=\"text-justify capriola\" >\n" +
    "                                                        <div ng-if=\"!item.description\">\n" +
    "                                                            <p>No description available</p>\n" +
    "                                                        </div>\n" +
    "                                                        <div ng-if=\"item.description\">\n" +
    "                                                            <div class=\"text-justify \" >{{item.description}}</div>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                        </div>\n" +
    "                                    </p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-2 col-md-2\">\n" +
    "                                    <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                                        <div class=\"col-md-12\">\n" +
    "                                            <button class=\"btn btn-primary pull-right\"   ng-click=\"moreInfo(item.id)\" >MORE INFO</button>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("city/hotel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/hotel.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"well\">\n" +
    "        <h1 class=\"text-center capriola\" >Hotel</h1>\n" +
    "        <div class=\"list-group\">\n" +
    "            <div ng-show=\"hotelSelection != undefined && hotelSelection.length != 0\">\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"col-sm-4 col-md-4\" style=\"display: inline\">\n" +
    "                            <div class=\"capriola\">Search\n" +
    "                                <input type=\"text\"  placeholder=\"Name\" data-ng-model=\"elementSelectionName\" />\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-4 col-md-4\">\n" +
    "                            <div class=\"text-capitalize item-filter\">Order by:</div>\n" +
    "                            <select data-ng-model=\"elementSelectionOrder\" class=\"item-filter\">\n" +
    "                                <option value=\"name\" selected>Name</option>\n" +
    "                                <option value=\"rating\">Rating</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <span ng-repeat=\"c in hotelSelection | filter:{name:elementSelectionName} | orderBy:elementSelectionOrder\">\n" +
    "                <div class=\"list-group-item list-hotel\" style=\"background-color: #ffeeaa\">\n" +
    "                    <div class=\"col-sm-3 col-md-3\">\n" +
    "                        <div class=\"panel panel-default\">\n" +
    "                            <div class=\"panel-body image-panel\">\n" +
    "                                <carousel interval=\"intervalImages\">\n" +
    "                                    <div ng-if=\"c.photos.length==0\">\n" +
    "                                        <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "                                    </div>\n" +
    "                                    <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                        <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                    </slide>\n" +
    "                                </carousel>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-7 col-md-7\" style=\"height:230px\">\n" +
    "                        <p class=\"list-group-item-text\">\n" +
    "                        <div class=\"row capriola\">\n" +
    "                            <div class=\"col-sm-9 col-md-9\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-4 col-md-4\">\n" +
    "                                <p class=\"capriola\">Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-3 col-md-3\">\n" +
    "                                <div ng-show=\"c.price != null\">\n" +
    "                                    <p class=\"capriola\">Price {{c.price}}</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-show=\"c.description != null\" style=\"display: block\">\n" +
    "                            <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify capriola\" >{{c.description}}</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-2 col-md-2\">\n" +
    "                        <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-primary btn-sm capriola button-item\" ng-click=\"setHotelDetails(c.id)\" href=\"#moreInfoModalHotel\" data-toggle=\"modal\">\n" +
    "                                    Details <span class=\"glyphicon glyphicon-info-sign \"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-12\" style=\"padding-top: 10px\">\n" +
    "                                <button class=\"btn btn-danger btn-sm capriola button-item\" ng-click=\"removeHotelItem(c)\">\n" +
    "                                    Remove <span class=\"glyphicon glyphicon-minus-sign \"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </span>\n" +
    "    </div>\n" +
    "        <div class=\"list-group\">\n" +
    "            <div ng-show=\"infiniteScroll.itemList != null && infiniteScroll.itemList.length !=0\">\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"col-sm-4 col-md-4\" style=\"display: inline\">\n" +
    "                            <div class=\"capriola\">Search\n" +
    "                                <input type=\"text\"  placeholder=\"Name\" data-ng-model=\"elementListName\" />\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-4 col-md-4\">\n" +
    "                            <div class=\"text-capitalize item-filter\">Order by:</div>\n" +
    "                            <select data-ng-model=\"elementListOrder\" class=\"item-filter\">\n" +
    "                                <option value=\"name\" selected>Name</option>\n" +
    "                                <option value=\"rating\">Rating</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div infinite-scroll=\"infiniteScroll.nextPage(resource,setLoader)\" infinite-scroll-distance=\"2\" infinite-scroll-disabled=\"infiniteScroll.busy\">\n" +
    "                    <span ng-repeat=\"c in infiniteScroll.itemList | filter:{name:elementListName} | orderBy:elementListOrder\">\n" +
    "                        <div class=\"list-group-item list-hotel\">\n" +
    "                            <div class=\"col-sm-3 col-md-3\">\n" +
    "                                <div class=\"panel panel-default\">\n" +
    "                                    <div class=\"panel-body image-panel\">\n" +
    "                                        <carousel interval=\"intervalImages\">\n" +
    "                                            <div ng-if=\"c.photos.length==0\">\n" +
    "                                                <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "                                            </div>\n" +
    "                                            <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                                <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                            </slide>\n" +
    "                                        </carousel>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-7 col-md-7\" style=\"height:230px\">\n" +
    "                                <p class=\"list-group-item-text\">\n" +
    "                                <div class=\"row capriola\">\n" +
    "                                    <div class=\"col-sm-9 col-md-9\">\n" +
    "                                        <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-sm-4 col-md-4\">\n" +
    "                                        <p class=\"capriola\">Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-3 col-md-3\">\n" +
    "                                        <div ng-show=\"c.price != null\">\n" +
    "                                            <p class=\"capriola\">Price {{c.price}}</p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"c.description != null\" style=\"display: block\">\n" +
    "                                    <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                        <div class=\"text-justify capriola\" >{{c.description}}</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-2 col-md-2\">\n" +
    "                                <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <button class=\"btn btn-primary btn-sm capriola button-item\" ng-click=\"setHotelDetails(c.id)\" href=\"#moreInfoModalHotel\" data-toggle=\"modal\">\n" +
    "                                            Details <span class=\"glyphicon glyphicon-info-sign \"></span>\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-12\" style=\"padding-top: 10px\">\n" +
    "                                        <button class=\"btn btn-success btn-sm capriola button-item\" ng-click=\"addHotelItem(c)\">\n" +
    "                                            Add <span class=\"glyphicon glyphicon-plus-sign \"></span>\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-show=\"loaderEnabled\">\n" +
    "    <div class=\"row loader-wait\">\n" +
    "        <div class=\"loader\">\n" +
    "            <div class=\"bouncywrap\">\n" +
    "                <div class=\"dotcon dc1\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"dotcon dc2\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"dotcon dc3\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("city/utility.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/utility.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"well\">\n" +
    "        <h1 class=\"text-center capriola\">Utility</h1>\n" +
    "        <div class=\"list-group\">\n" +
    "            <div ng-show=\"utilitySelection != undefined && utilitySelection.length != 0\">\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"col-sm-4 col-md-4\" style=\"display: inline\">\n" +
    "                            <div class=\"capriola\">Search\n" +
    "                                <input type=\"text\"  placeholder=\"Name\" data-ng-model=\"elementSelectionName\" />\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-4 col-md-4\">\n" +
    "                            <div class=\"text-capitalize item-filter\">Order by:</div>\n" +
    "                            <select data-ng-model=\"elementSelectionOrder\" class=\"item-filter\">\n" +
    "                                <option value=\"name\" selected>Name</option>\n" +
    "                                <option value=\"rating\">Rating</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <span ng-repeat=\"c in utilitySelection | filter:{name:elementSelectionName} | orderBy:elementSelectionOrder\">\n" +
    "                <div class=\"list-group-item list-utility\" style=\"background-color: #ffeeaa\">\n" +
    "                    <div class=\"col-sm-3 col-md-3\">\n" +
    "                        <div class=\"panel panel-default\">\n" +
    "                            <div class=\"panel-body image-panel\">\n" +
    "                                <carousel interval=\"intervalImages\">\n" +
    "                                    <div ng-if=\"c.photos.length==0\">\n" +
    "                                        <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "                                    </div>\n" +
    "                                    <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                        <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                    </slide>\n" +
    "                                </carousel>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-7 col-md-7\" style=\"height:230px\">\n" +
    "                        <p class=\"list-group-item-text\">\n" +
    "                        <div class=\"row capriola\">\n" +
    "                            <div class=\"col-sm-9 col-md-9\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-4 col-md-4\">\n" +
    "                                <p class=\"capriola\">Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-3 col-md-3\">\n" +
    "                                <div ng-show=\"c.price != null\">\n" +
    "                                    <p class=\"capriola\">Price {{c.price}}</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-show=\"c.description != null\" style=\"display: block\">\n" +
    "                            <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify capriola\" >{{c.description}}</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-2 col-md-2\">\n" +
    "                        <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-primary btn-sm capriola button-item\" ng-click=\"setUtilityDetails(c.id)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">\n" +
    "                                    Details <span class=\"glyphicon glyphicon-info-sign \"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-12\" style=\"padding-top: 10px\">\n" +
    "                                <button class=\"btn btn-danger btn-sm capriola button-item\" ng-click=\"removeUtilityItem(c)\">\n" +
    "                                    Remove <span class=\"glyphicon glyphicon-minus-sign \"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"list-group\">\n" +
    "            <div ng-show=\"infiniteScroll.itemList != null && infiniteScroll.itemList.length !=0\">\n" +
    "                <div class=\"panel panel-default\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"col-sm-4 col-md-4\" style=\"display: inline\">\n" +
    "                            <div class=\"capriola\">Search\n" +
    "                                <input type=\"text\"  placeholder=\"Name\" data-ng-model=\"elementListName\" />\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-4 col-md-4\">\n" +
    "                            <div class=\"text-capitalize item-filter\">Order by:</div>\n" +
    "                            <select data-ng-model=\"elementListOrder\" class=\"item-filter\">\n" +
    "                                <option value=\"name\" selected>Name</option>\n" +
    "                                <option value=\"rating\">Rating</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div infinite-scroll=\"infiniteScroll.nextPage(resource,setLoader)\" infinite-scroll-distance=\"2\" infinite-scroll-disabled=\"infiniteScroll.busy\">\n" +
    "                    <span ng-repeat=\"c in infiniteScroll.itemList | filter:{name:elementListName} | orderBy:elementListOrder\">\n" +
    "                        <div class=\"list-group-item list-utility\">\n" +
    "                            <div class=\"col-sm-3 col-md-3\">\n" +
    "                                <div class=\"panel panel-default\">\n" +
    "                                    <div class=\"panel-body image-panel\">\n" +
    "                                        <carousel interval=\"intervalImages\">\n" +
    "                                            <div ng-if=\"c.photos.length==0\">\n" +
    "                                                <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "                                            </div>\n" +
    "                                            <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                                <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                            </slide>\n" +
    "                                        </carousel>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-7 col-md-7\" style=\"height:230px\">\n" +
    "                                <p class=\"list-group-item-text\">\n" +
    "                                <div class=\"row capriola\">\n" +
    "                                    <div class=\"col-sm-9 col-md-9\">\n" +
    "                                        <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-sm-4 col-md-4\">\n" +
    "                                        <p class=\"capriola\">Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-3 col-md-3\">\n" +
    "                                        <div ng-show=\"c.price != null\">\n" +
    "                                            <p class=\"capriola\">Price {{c.price}}</p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"c.description != null\" style=\"display: block\">\n" +
    "                                    <div class=\"col-sm-12 col-md-12 panel panel-default scrollable\" style=\"max-height: 165px;overflow-y: auto\">\n" +
    "                                        <div class=\"text-justify capriola\" >{{c.description}}</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-2 col-md-2\">\n" +
    "                                <div class=\"row text-center\" style=\"padding-top: 50%;padding-bottom: 50%\">\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <button class=\"btn btn-primary btn-sm capriola button-item\" ng-click=\"setUtilityDetails(c.id)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">\n" +
    "                                            Details <span class=\"glyphicon glyphicon-info-sign \"></span>\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-12\" style=\"padding-top: 10px\">\n" +
    "                                        <button class=\"btn btn-success btn-sm capriola button-item\" ng-click=\"addUtilityItem(c)\">\n" +
    "                                            Add <span class=\"glyphicon glyphicon-plus-sign \"></span>\n" +
    "                                        </button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-show=\"loaderEnabled\">\n" +
    "    <div class=\"row loader-wait\">\n" +
    "        <div class=\"loader\">\n" +
    "            <div class=\"bouncywrap\">\n" +
    "                <div class=\"dotcon dc1\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"dotcon dc2\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"dotcon dc3\">\n" +
    "                    <div class=\"dot\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<script type=\"text/ng-template\" id=\"customTemplate.html\">\n" +
    "    <a class=\"col-md-12 text-capitalize\">\n" +
    "        <span bind-html-unsafe=\"match.label| typeaheadHighlight:query\"></span>\n" +
    "       <i>({{match.model.state}})</i>\n" +
    "    </a>\n" +
    "</script>\n" +
    "\n" +
    "\n" +
    "<div class=\"home_back fill\" >\n" +
    "    <div class=\"home\">\n" +
    "        <img src=\"assets/images/trippo.png\" class=\"center\" />\n" +
    "        <form name=\"'city-form\" class=\"form-wrapper  cf\" autocomplete=\"off\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <input id=\"city\" name=\"city\"  type=\"text\" placeholder=\"Search here...\" class=\"form-control col-md-12 text-capitalize typeahead\"\n" +
    "                   ng-model=\"selected_city\"\n" +
    "                   typeahead=\"city as city.name for city in cities | filter:{name:$viewValue}:startsWith | limitTo:8\"\n" +
    "                   typeahead-template-url=\"customTemplate.html\">\n" +
    "            <button id=\"submit\" type=\"submit\" ng-click=\"search()\">Search</button>\n" +
    "        </form>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("log_in/log_in.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("log_in/log_in.tpl.html",
    "<div class=\"bodyAuth\" >\n" +
    "\n" +
    "    <form name=\"loginForm\">\n" +
    "\n" +
    "        <div class=\"title\">\n" +
    "            <h1>Login</h1>\n" +
    "            <hr/>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"loginBody\">\n" +
    "            <div class=\"emailBody\">\n" +
    "                <input class=\"form-control\" type=\"email\" name=\"email\" ng-model=\"credentials.email\" placeholder=\"Email\" required/>\n" +
    "            </div>\n" +
    "            <div class=\"errorBody\">\n" +
    "                <span class=\"help-inline\" ng-show=\"loginForm.email.$error.required\">Required</span>\n" +
    "                <span class=\"help-inline\" ng-show=\"loginForm.email.$error.email\">Invalid email</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"passwordBody\">\n" +
    "                <input class=\"form-control\" type=\"password\" name=\"password\" ng-model=\"credentials.password\" placeholder=\"Password\" required/>\n" +
    "            </div>\n" +
    "            <div class=\"errorBody\">\n" +
    "                <span class=\"help-inline\" ng-show=\"loginForm.password.$error.required\">Required</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"buttons\">\n" +
    "                <button ng-click=\"login()\" class=\"btn btn-block btn-success\" >Login</button>\n" +
    "                <!--\n" +
    "                <button ng-click=\"logout()\" class=\"btn btn-primary\" >Logout</button>\n" +
    "                <button ng-click=\"password_reset()\" class=\"btn btn-primary\" >Reset Password</button>\n" +
    "                <button ng-click=\"unlock()\" class=\"btn btn-primary\" >Unlock</button>\n" +
    "                <button ng-click=\"confirm()\" class=\"btn btn-primary\" >Confirm</button>\n" +
    "                <button ng-click=\"showCurrentUser()\" class=\"btn btn-primary\" >Show</button>\n" +
    "                -->\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"socialButtons\">\n" +
    "                <a class=\"btn btn-block btn-facebook\" href=\"http://localhost:3000/users/auth/facebook\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "                <a class=\"btn btn-block btn-google\" href=\"http://localhost:3000/users/auth/google_oauth2\"><i class=\"fa fa-google-plus\"></i></a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "                <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("log_in/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("log_in/profile.tpl.html",
    "<div>\n" +
    "   Ciao {{email}}, come va?\n" +
    "</div>\n" +
    "");
}]);

angular.module("plan_trip/createtrip.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("plan_trip/createtrip.tpl.html",
    "<div class=\"page-header\">\n" +
    "    <div class=\"vertical-container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-2\">\n" +
    "                <a ui-sref=\"dates\" class=\"btn btn-primary btn-large btn-outlined big-button back-button\"><i class=\"glyphicon glyphicon-chevron-left\"></i> Dates</a>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-8\">\n" +
    "                <h1 class=\"text-center subtitle\">Create your Trip</h1>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-2\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-10 col-md-offset-1\">\n" +
    "        <div class=\"well well-sm\">\n" +
    "            <form  novalidate class=\"form-horizontal\" name=\"form\" ng-submit=\"createTrip(form)\" method=\"post\">\n" +
    "            <div ng-show=\"submitted  && (form.name.$error.required )\" class=\"alert alert-danger\">\n" +
    "                The field <strong>Trip Name</strong> is required\n" +
    "            </div>\n" +
    "                <fieldset>\n" +
    "                    <legend>Trip Details</legend>\n" +
    "                    <!-- Name input-->\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"col-md-2 control-label \" for=\"name\" style=\"font-size: 18px\">Trip Name</label>\n" +
    "                        <div class=\"col-md-10\">\n" +
    "                            <input id=\"name\" name=\"name\" ng-model=\"name\" type=\"text\" placeholder=\"Holiday 2014\" class=\"form-control\" required>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <!-- Message body -->\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"col-md-2 control-label\" for=\"message\" style=\"font-size: 18px\">Description</label>\n" +
    "                        <div class=\"col-md-10\">\n" +
    "                            <textarea class=\"form-control\" ng-model=\"description\" id=\"message\" name=\"message\" placeholder=\"Please enter your description here...\" rows=\"5\"></textarea>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                    <!-- Form actions -->\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div class=\"col-md-12 text-right\">\n" +
    "                            <button type=\"submit\" class=\"btn btn-primary btn-lg btn-outlined\">Submit</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </fieldset>\n" +
    "            </form>\n" +
    "            <legend>Trip Summary</legend>\n" +
    "            <div class=\"row\" style=\"margin-bottom: 6px\">\n" +
    "                <button class=\"btn btn-primary btn-outlined z-up\" style=\"font-size: 17px;margin-left: 15px;\" ng-click=\"changeView()\">{{currentView}}</button>\n" +
    "            </div>\n" +
    "            <div id=\"{{date.format('DD-MM-YYYY')}}\" class=\"panel-group\" ng-repeat=\"date in dates\">\n" +
    "                <div class=\"panel  panel-primary no-radius\">\n" +
    "                    <div class=\"panel-heading no-radius  bigger-accordition\" data-toggle=\"collapse\" data-parent=\"#{{date.format('DD-MM-YYYY')}}\" data-target=\"#{{date.format('DD-MM-YYYY')}}List\">\n" +
    "                        <h4 class=\"panel-title bigger-title\">\n" +
    "                            <a class=\"accordion-toggle bigger-title\" >{{date.format('DD  MMMM YYYY')}}</a>\n" +
    "                            <button class=\"btn btn-primary btn-outlined z-up\" style=\"float: right;font-size: 17px;margin-right: 5px;\" ui-sref=\"planning({date:date.format(dateFormat)})\">EDIT</button>\n" +
    "                        </h4>\n" +
    "                    </div>\n" +
    "                    <div id=\"{{date.format('DD-MM-YYYY')}}List\" class=\"panel-collapse in\">\n" +
    "                        <div class=\"panel-body\" style=\"background-color:#e8e8e8\">\n" +
    "                            <div ng-show=\"currentView == 'MAPS VIEW'\">\n" +
    "                                <place-list-details item-list=\"getDayProgram(date)\"  ></place-list-details>\n" +
    "                            </div>\n" +
    "                            <place-list-maps ng-show=\"currentView == 'DETAILS VIEW'\" init-position=\"getCityName()\" selected-items=\"getDayProgram(date)\" map-id=\"date\"></place-list-maps>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("plan_trip/planning.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("plan_trip/planning.tpl.html",
    "<div class=\"planning\">\n" +
    "<div class=\"page-header\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\">\n" +
    "            <a ui-sref=\"dates\" class=\"btn btn-primary btn-large btn-outlined big-button back-button\"><i class=\"glyphicon glyphicon-chevron-left\"></i> Dates</a>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <h1 class=\"text-center subtitle\">{{current_day.format('dddd DD  MMMM YYYY')}}</h1>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"panel-group\" id=\"Culture\">\n" +
    "    <div class=\"panel  panel-primary no-radius\">\n" +
    "        <div class=\"panel-heading no-radius  bigger-accordition\" data-toggle=\"collapse\" data-parent=\"#Culture\" data-target=\"#cultureList\">\n" +
    "            <h4 class=\"panel-title bigger-title\">\n" +
    "                <a class=\"accordion-toggle bigger-title\" >Culture</a>\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "        <div id=\"cultureList\" class=\"panel-collapse collapse\">\n" +
    "            <div class=\"panel-body\">\n" +
    "                <ul>\n" +
    "                    <div ng-repeat=\"cult in culture\" class=\"event-list col-md-4\">\n" +
    "                        <li>\n" +
    "                            <div ng-class=\"isScheduled(cult) ? 'selected-item culture-color' :'not-selected'\">\n" +
    "                                <div class=\"row\" style=\"height: 48px;\">\n" +
    "\n" +
    "                                    <h1 class=\"item-name\">{{cult.name}}</h1>\n" +
    "                                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                <div class=\"row\">\n" +
    "                                      <div ng-if=\"cult.photos.length==0\">\n" +
    "                                        <img class=\"fixed-size-image\" ng-src=\"assets/images/empty_photo.png\">\n" +
    "                                      </div>\n" +
    "                                      <div ng-if=\"cult.photos.length>0\">\n" +
    "                                          <img class=\"fixed-size-image\" ng-src=\"{{cult.photos[0].image}}\" >\n" +
    "                                      </div>\n" +
    "                                 </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"btn-group\">\n" +
    "\n" +
    "                                        <button ng-show=\"isScheduled(cult)\" style=\"margin-right: 2px;\" class=\"btn btn-primary btn-outlined \" style=\"display: inline-block;\" ng-click=\"removeFromSchedule(cult)\">REMOVE</button>\n" +
    "\n" +
    "\n" +
    "                                        <button ng-show=\"!isScheduled(cult)\" style=\"margin-right: 2px\"  class=\"btn btn-primary btn-outlined \" style=\"display: inline-block;\" ng-click=\"addToSchedule(cult)\">ADD</button>\n" +
    "\n" +
    "                                        <button class=\"btn btn-primary btn-outlined \" style=\"margin-left: 4px;margin-bottom: 5px\"  ng-click=\"setDetails(cult)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">MORE</button>\n" +
    "                                    </div>\n" +
    "                                  </div>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                    </div>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"panel-group\" id=\"Entertainment\">\n" +
    "    <div class=\"panel  panel-primary no-radius\">\n" +
    "        <div class=\"panel-heading no-radius  bigger-accordition\" data-toggle=\"collapse\" data-parent=\"#Entertainment\" data-target=\"#entertainmentList\">\n" +
    "            <h4 class=\"panel-title bigger-title\">\n" +
    "                <a class=\"accordion-toggle bigger-title\" >Entertainment</a>\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "        <div id=\"entertainmentList\" class=\"panel-collapse collapse\">\n" +
    "            <div class=\"panel-body\">\n" +
    "                <ul>\n" +
    "                    <div ng-repeat=\"ent in entertainment\" class=\"event-list col-md-4\">\n" +
    "                        <li>\n" +
    "                            <div ng-class=\"isScheduled(ent) ? 'selected-item  entertainment-color' :'not-selected'\">\n" +
    "                                <div class=\"row\" style=\"height: 48px;\">\n" +
    "\n" +
    "                                    <h1 class=\"item-name\">{{ent.name}}</h1>\n" +
    "                                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div ng-if=\"ent.photos.length==0\">\n" +
    "                                        <img class=\"fixed-size-image\" ng-src=\"assets/images/empty_photo.png\">\n" +
    "                                    </div>\n" +
    "                                    <div ng-if=\"ent.photos.length>0\">\n" +
    "                                        <img class=\"fixed-size-image\" ng-src=\"{{ent.photos[0].image}}\" >\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"btn-group\">\n" +
    "\n" +
    "                                        <button ng-show=\"isScheduled(ent)\" style=\"margin-right: 2px;\" class=\"btn btn-primary btn-outlined \" style=\"display: inline-block;\" ng-click=\"removeFromSchedule(ent)\">REMOVE</button>\n" +
    "\n" +
    "\n" +
    "                                        <button ng-show=\"!isScheduled(ent)\" style=\"margin-right: 2px\"  class=\"btn btn-primary btn-outlined \" style=\"display: inline-block;\" ng-click=\"addToSchedule(ent)\">ADD</button>\n" +
    "\n" +
    "                                        <button class=\"btn btn-primary btn-outlined \" style=\"margin-left: 4px;margin-bottom: 5px\"  ng-click=\"setDetails(ent)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">MORE</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                    </div>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"panel-group\" id=\"Hotel\">\n" +
    "    <div class=\"panel  panel-primary no-radius\">\n" +
    "        <div class=\"panel-heading no-radius  bigger-accordition\" data-toggle=\"collapse\" data-parent=\"#Hotel\" data-target=\"#hotelList\">\n" +
    "            <h4 class=\"panel-title bigger-title\">\n" +
    "                <a class=\"accordion-toggle bigger-title\" >Hotels</a>\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "        <div id=\"hotelList\" class=\"panel-collapse collapse\">\n" +
    "            <div class=\"panel-body\">\n" +
    "                <ul>\n" +
    "                    <div ng-repeat=\"hot in hotels\" class=\"event-list col-md-4\">\n" +
    "                        <li>\n" +
    "                            <div ng-class=\"isScheduled(hot) ? 'selected-item  hotel-color' :'not-selected'\">\n" +
    "                                <div class=\"row\" style=\"height: 48px;\">\n" +
    "\n" +
    "                                    <h1 class=\"item-name\">{{hot.name}}</h1>\n" +
    "                                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div ng-if=\"hot.photos.length==0\">\n" +
    "                                        <img class=\"fixed-size-image\" ng-src=\"assets/images/empty_photo.png\">\n" +
    "                                    </div>\n" +
    "                                    <div ng-if=\"hot.photos.length>0\">\n" +
    "                                        <img class=\"fixed-size-image\" ng-src=\"{{hot.photos[0].image}}\" >\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"btn-group\">\n" +
    "\n" +
    "                                        <button ng-show=\"isScheduled(hot)\" style=\"margin-right: 2px;\" class=\"btn btn-primary btn-outlined \" style=\"display: inline-block;\" ng-click=\"removeFromSchedule(hot)\">REMOVE</button>\n" +
    "\n" +
    "\n" +
    "                                        <button ng-show=\"!isScheduled(hot)\" style=\"margin-right: 2px\"  class=\"btn btn-primary btn-outlined \" style=\"display: inline-block;\" ng-click=\"addToSchedule(hot)\">ADD</button>\n" +
    "\n" +
    "                                        <button class=\"btn btn-primary btn-outlined \" style=\"margin-left: 4px;margin-bottom: 5px\"  ng-click=\"setDetails(hot)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">MORE</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                    </div>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"panel-group\" id=\"Food\">\n" +
    "    <div class=\"panel  panel-primary no-radius\">\n" +
    "        <div class=\"panel-heading no-radius  bigger-accordition\" data-toggle=\"collapse\" data-parent=\"#Food\" data-target=\"#foodList\">\n" +
    "            <h4 class=\"panel-title bigger-title\">\n" +
    "                <a class=\"accordion-toggle bigger-title\" >Food</a>\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "        <div id=\"foodList\" class=\"panel-collapse collapse\">\n" +
    "            <div class=\"panel-body\">\n" +
    "                <ul>\n" +
    "                    <div ng-repeat=\"food in foods\" class=\"event-list col-md-4\">\n" +
    "                        <li>\n" +
    "                            <div ng-class=\"isScheduled(food) ? 'selected-item food-color' :'not-selected'\">\n" +
    "                                <div class=\"row\" style=\"height: 48px;\">\n" +
    "\n" +
    "                                    <h1 class=\"item-name\">{{food.name}}</h1>\n" +
    "                                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div ng-if=\"food.photos.length==0\">\n" +
    "                                        <img class=\"fixed-size-image\" ng-src=\"assets/images/empty_photo.png\">\n" +
    "                                    </div>\n" +
    "                                    <div ng-if=\"food.photos.length>0\">\n" +
    "                                        <img class=\"fixed-size-image\" ng-src=\"{{food.photos[0].image}}\" >\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"btn-group\">\n" +
    "\n" +
    "                                        <button ng-show=\"isScheduled(food)\" style=\"margin-right: 2px;\" class=\"btn btn-primary btn-outlined \" style=\"display: inline-block;\" ng-click=\"removeFromSchedule(food)\">REMOVE</button>\n" +
    "\n" +
    "\n" +
    "                                        <button ng-show=\"!isScheduled(food)\" style=\"margin-right: 2px\"  class=\"btn btn-primary btn-outlined \" style=\"display: inline-block;\" ng-click=\"addToSchedule(food)\">ADD</button>\n" +
    "\n" +
    "                                        <button class=\"btn btn-primary btn-outlined \" style=\"margin-left: 4px;margin-bottom: 5px\"  ng-click=\"setDetails(food)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">MORE</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                    </div>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "    <h1 id=\"planning\" class=\"text-center subtitle\">Planning</h1>\n" +
    "    <div  class=\"sortable-container timeline-centered\" sv-root sv-part=\"selectedItems\" >\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"timeline-list col-md-4\">\n" +
    "                <div ng-repeat=\"item in selectedItems\"  sv-element=\"opts\">\n" +
    "                    <div class=\"row\" >\n" +
    "                            <div ng-click=\"setMapsMarker(item)\" ng-class=\"isCurrentMap(item,'marker')? 'selected-color' : getItemClass(item) \" class=\" timeline-item \" >\n" +
    "                                <div class=\"row\" style=\"height: 48px;\">\n" +
    "\n" +
    "                                    <h1 class=\"item-name\">{{item.name}}</h1>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"btn-group\">\n" +
    "\n" +
    "                                        <button  style=\"margin-right: 2px;\" class=\"btn btn-primary btn-outlined z-up\" style=\"display: inline-block;\" ng-click=\"removeFromSchedule(item)\">REMOVE</button>\n" +
    "                                        <button class=\"btn btn-primary btn-outlined z-up\" style=\";margin-left: 4px;margin-bottom: 5px\"  ng-click=\"setDetails(item)\" href=\"#moreInfoModalPlace\" data-toggle=\"modal\">MORE</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <article class=\"timeline-entry\" >\n" +
    "                                <div class=\"timeline-entry-inner\">\n" +
    "\n" +
    "                                    <div ng-click=\"setMapsDirections(item)\"  class=\"timeline-icon \" ng-class=\"isCurrentMap(item,'direction')? 'icon-selected' : 'icon-not-selected' \">\n" +
    "                                        <i class=\"entypo-feather\"></i>\n" +
    "                                    </div>\n" +
    "\n" +
    "\n" +
    "                                </div>\n" +
    "\n" +
    "                            </article>\n" +
    "\n" +
    "              </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div  id=\"scrollingMaps\" class=\"col-md-8 \" >\n" +
    "\n" +
    "               <map-directions origin=\"origin\" map-id=\"planningMap\" init-position=\"getCityName()\" destination=\"destination\" marker=\"currentMarker\" type=\"roadmap\" class=\"mapContainer\" ></map-directions>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<script>\n" +
    "\n" +
    "//mantaining the maps on the top of the page when scrolling\n" +
    "$().ready(function() {\n" +
    "        $(window).scroll(function () {\n" +
    "            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {\n" +
    "\n" +
    "                if ($(\"#planning\").offset() !== undefined) {\n" +
    "\n" +
    "                    if ($(window).scrollTop() > $(\"#planning\").offset().top) {\n" +
    "                        $(\"#scrollingMaps\").stop().animate({\"marginTop\": ($(window).scrollTop() - $(\"#planning\").offset().top) + \"px\"}, \"slow\");\n" +
    "                    }\n" +
    "                }\n" +
    "            }\n" +
    "        });\n" +
    "\n" +
    "});\n" +
    "</script>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("plan_trip/trip_dates.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("plan_trip/trip_dates.tpl.html",
    "<div class=\"page-header\">\n" +
    "    <h1>Choose your dates</h1>\n" +
    "</div>\n" +
    "\n" +
    "    <form novalidate name=\"form\" ng-submit=\"next(form)\">\n" +
    "        <div ng-show=\"submitted  && (form.end.$error.required || form.start.$error.required)\" class=\"alert alert-danger\">\n" +
    "            Field <strong>start date</strong> and <strong>end date</strong> are required\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4 col-md-offset-2\">\n" +
    "                <h2>Start date:<span ng-show=\"dtstart\">{{dtstart | date:'dd/MM/yyyy'}}</span></h2>\n" +
    "                <p class=\"input-group\">\n" +
    "                    <input readonly=\"readonly\" type=\"text\" class=\"form-control well well-sm\" show-weeks=\"false\" datepicker-popup=\"{{datePickerFormat}}\"  show-button-bar=\"false\" is-open=\"startOpened\"  ng-model=\"dtstart\" max-date=\"dtend\"   name=\"start\"  required />\n" +
    "                  <span class=\"input-group-btn\">\n" +
    "                    <button id=\"startbtn\"   type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "                  </span>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h2>End date:<span ng-show=\"dtend\">{{dtend | date:'dd/MM/yyyy'}}</span></h2>\n" +
    "                <p class=\"input-group\">\n" +
    "                    <input readonly=\"readonly\" type=\"text\" class=\"form-control well well-sm\" show-weeks=\"false\" datepicker-popup=\"{{datePickerFormat}}\"  show-button-bar=\"false\" is-open=\"endOpened\"   ng-model=\"dtend\" min-date=\"dtstart\"   name=\"end\"  required />\n" +
    "                  <span class=\"input-group-btn\">\n" +
    "                    <button  id=\"endbtn\" type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "                  </span>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12 text-center\">\n" +
    "                <button id=\"singlefrfbutton\" name=\"singlebutton\" class=\"btn btn-primary btn-outlined\">Confirm</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <ul style=\"padding: 0px\">\n" +
    "        <div ng-repeat=\"curDate in dates\" class=\"event-list col-md-4\">\n" +
    "\n" +
    "            <li>\n" +
    "\n" +
    "                <time datetime=\"{{curDate.format(dateFormat)}}\">\n" +
    "                    <span class=\"day\">{{curDate.format(dayFormat)}}</span>\n" +
    "                    <span class=\"month\">{{curDate.format(monthFormat)}}</span>\n" +
    "                    <span class=\"year\">{{curDate.format(yearFormat)}}</span>\n" +
    "                    <span class=\"time\">ALL DAY</span>\n" +
    "                    <button href=\"#infoDate\" data-toggle=\"modal\" class=\"btn btn-primary btn-outlined\">MORE</button>\n" +
    "                    <a class=\"btn btn-primary btn-outlined\" ui-sref=\"planning({date:curDate.format(dateFormat)})\">EDIT</a>\n" +
    "                </time>\n" +
    "            </li>\n" +
    "        </div>\n" +
    "    </ul>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"col-md-12 text-center\" ng-show=\"dates.length\">\n" +
    "    <button name=\"createbutton\" ui-sref=\"createtrip\" class=\"btn btn-primary btn-outlined big-button\" style=\"margin-bottom: 30px\">CREATE MY TRIP</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"infoDate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "                <h4 class=\"modal-title\" id=\"myModalLabel\">More Information</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"column\" >\n" +
    "                        gtrgtr\n" +
    "                    </div>\n" +
    "                    <div class=\"column\">\n" +
    "                        gtrgtr\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("sign_up/sign_up.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sign_up/sign_up.tpl.html",
    "<form name=\"signupForm\">\n" +
    "\n" +
    "    <div class=\"title\">\n" +
    "        <h1>Register</h1>\n" +
    "        <hr/>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bodyAuth\">\n" +
    "\n" +
    "        <div class=\"emailBody\">\n" +
    "            <input class=\"form-control\" type=\"email\" name=\"email\" ng-model=\"credentials.email\" placeholder=\"Email\" required/>\n" +
    "        </div>\n" +
    "        <div class=\"errorBody\">\n" +
    "            <span class=\"help-inline\" data-ng-show=\"signupForm.email.$error.required\">This is required</span>\n" +
    "            <span class=\"help-inline\" data-ng-show=\"signupForm.email.$error.email\">Invalid email</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"passwordBody\">\n" +
    "            <input class=\"form-control\" type=\"password\" name=\"password\" id=\"password\" ng-model=\"credentials.password\" placeholder=\"Password\" ng-minlength=\"8\" required/>\n" +
    "        </div>\n" +
    "        <div class=\"errorBody\">\n" +
    "            <span class=\"help-inline\" data-ng-show=\"signupForm.password.$error.required\">This is required</span>\n" +
    "            <span class=\"help-inline\" data-ng-show=\"signupForm.password.$error.minlength\">Too short. Min length is 8</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"passwordCBody\">\n" +
    "            <input class=\"form-control\" type=\"password\" name=\"password_confirmation\" ng-model=\"credentials.password_confirmation\" pw-check=\"password\" placeholder=\"Confirm Password\" required/>\n" +
    "        </div>\n" +
    "        <div class=\"errorBody\">\n" +
    "            <span class=\"help-inline\" data-ng-show=\"signupForm.password_confirmation.$error.required\">This is required</span>\n" +
    "            <span class=\"help-inline\" ng-show=\"signupForm.password_confirmation.$error.pwcheck\">Your passwords don't match</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"registerButtons\">\n" +
    "            <button ng-click=\"register()\" class=\"btn btn-block btn-success\" >Register</button>\n" +
    "            <!-- <button ng-click=\"change_password()\" class=\"btn btn-primary\" >Change Password</button> -->\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "        </div>\n" +
    "    </div>\n" +
    " </form>");
}]);
