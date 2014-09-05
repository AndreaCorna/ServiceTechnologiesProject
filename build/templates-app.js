angular.module('templates-app', ['about/about.tpl.html', 'city/city.tpl.html', 'city/culture.tpl.html', 'city/entertainment.tpl.html', 'city/food.tpl.html', 'city/hotel.tpl.html', 'city/utility.tpl.html', 'home/home.tpl.html', 'plan_trip/calendar.tpl.html', 'plan_trip/planning.tpl.html', 'plan_trip/trip_dates.tpl.html']);

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
    "<div class=\"container\" style=\"margin-bottom: 30px;\">\n" +
    "    <h3 class=\"text-capitalize text-center\" style=\"font-family: Capriola;\">Welcome to {{city.name}}</h3>\n" +
    "    <carousel interval=\"intervalImages\">\n" +
    "        <slide ng-repeat=\"image in images\" active=\"image.active\">\n" +
    "            <img ng-src=\"{{image.url}}\" style=\"margin:auto;\">\n" +
    "        </slide>\n" +
    "    </carousel>\n" +
    "</div>\n" +
    "\n" +
    "<div id='cssmenu'>\n" +
    "    <ul>\n" +
    "        <li class='active'><a ui-sref=\"culture\" data-target=\"#\" data-toggle=\"pill\"><span>Culture</span></a></li>\n" +
    "        <li><a ui-sref=\"entertainment\" data-target=\"#\" data-toggle=\"pill\"><span>Entertainment</span></a></li>\n" +
    "        <li><a ui-sref=\"hotel\" data-target=\"#\" data-toggle=\"pill\"><span>Hotel</span></a></li>\n" +
    "        <li><a ui-sref=\"utility\" data-target=\"#\" data-toggle=\"pill\"><span>Utility</span></a></li>\n" +
    "        <li><a ui-sref=\"food\" data-target=\"#\" data-toggle=\"pill\"><span>Food</span></a></li>\n" +
    "\n" +
    "\n" +
    "        <li class='last'><a ui-sref=\"dates\" data-target=\"#\" data-toggle=\"pill\"><span>Plan Trip</span></a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div ui-view=\"content\" class=\"fill\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"modal fade\" ng-controller=\"ModalCtrl\" id=\"moreInfoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "        <div class=\"modal-dialog\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                    <div ng-show=\"modalEnabled\">\n" +
    "                        <div class=\"modal-header\">\n" +
    "                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"disableModal()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "                            <h4 class=\"modal-title\" id=\"myModalLabel\">More Information about {{moreInfoSelection.name}}</h4>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"modal-body\">\n" +
    "                        <div ng-show=\"modalEnabled\">\n" +
    "                            <div class=\"container-fluid\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-lg-6\" >\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Rating</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        {{moreInfoSelection.rating || 'Unknown'}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-lg-6\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Price</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        {{moreInfoSelection.price || 'Unknown'}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-lg-6\" >\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Phone</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        {{moreInfoSelection.international_phone}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-lg-6\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Address</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        {{moreInfoSelection.formatted_address}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-lg-12\" >\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Web Site</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        {{moreInfoSelection.web_site}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-lg-12\" >\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <b>Open Hours</b>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <table class=\"table table-hover\">\n" +
    "                                            <thead>\n" +
    "                                                <tr>\n" +
    "                                                    <th></th>\n" +
    "                                                    <th>Sunday</th>\n" +
    "                                                    <th>Monday</th>\n" +
    "                                                    <th>Tuesday</th>\n" +
    "                                                    <th>Wednesday</th>\n" +
    "                                                    <th>Thursday</th>\n" +
    "                                                    <th>Friday</th>\n" +
    "                                                    <th>Saturday</th>\n" +
    "                                                </tr>\n" +
    "                                            </thead>\n" +
    "                                            <tbody>\n" +
    "                                                <tr class=\"info\">\n" +
    "                                                    <td>From</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[0].open.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[1].open.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[2].open.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[3].open.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[4].open.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[5].open.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[6].open.time}}</td>\n" +
    "                                                </tr>\n" +
    "                                                <tr class=\"info\">\n" +
    "                                                    <td>To</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[0].close.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[1].close.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[2].close.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[3].close.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[4].close.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[5].close.time}}</td>\n" +
    "                                                    <td>{{moreInfoSelection.open_hours.periods[6].close.time}}</td>\n" +
    "                                                </tr>\n" +
    "                                            </tbody>\n" +
    "\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-lg-12\">\n" +
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
    "                                <div class=\"col-lg-12\">\n" +
    "                                    <p class=\"text-center\">\n" +
    "                                        <b>Reviews</b>\n" +
    "                                    </p>\n" +
    "                                    <span ng-repeat=\"review in moreInfoSelection.reviews\">\n" +
    "                                        <div class=\"panel-group\" id=\"{{review.author_name}}\">\n" +
    "                                            <div class=\"panel  panel-info\">\n" +
    "                                                <div class=\"panel-heading\">\n" +
    "                                                    <h4 class=\"panel-title\">\n" +
    "                                                        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#{{review.author_name}}\" data-target=\"#{{$index}}\">{{review.author_name}}</a>\n" +
    "                                                    </h4>\n" +
    "                                                </div>\n" +
    "                                                <div id=\"{{$index}}\" class=\"panel-collapse collapse\">\n" +
    "                                                    <div class=\"panel-body\">\n" +
    "                                                        <p class=\"text-left\">\n" +
    "                                                            <b>Ratings</b>\n" +
    "                                                        </p>\n" +
    "                                                        <div class=\"star-rating\">\n" +
    "                                                            <span ng-repeat=\"aspect in review.aspects\">\n" +
    "                                                                <div class=\"row\">\n" +
    "                                                                    <div class=\"col-lg-3\">\n" +
    "                                                                        <b class=\"text-capitalize\">{{aspect.type}}</b>\n" +
    "                                                                    </div>\n" +
    "                                                                    <div class=\"col-lg-8\">\n" +
    "                                                                        <rating ng-model=\"aspect.rating\" readonly=\"true\"></rating>\n" +
    "                                                                    </div>\n" +
    "                                                                </div>\n" +
    "                                                            </span>\n" +
    "                                                        </div>\n" +
    "                                                        <div class=\"row\">\n" +
    "                                                            <div class=\"col-lg-12\">\n" +
    "                                                                <p class=\"text-left\">\n" +
    "                                                                    <b>Comment</b>\n" +
    "                                                                </p>\n" +
    "                                                                {{review.text}}\n" +
    "                                                            </div>\n" +
    "                                                        </div>\n" +
    "                                                        <div class=\"col-lg-12\">\n" +
    "                                                            <div class=\"row\">\n" +
    "                                                                <em>\n" +
    "                                                                    <span>{{review.time | date:'medium'}}</span>\n" +
    "                                                                </em>\n" +
    "                                                            </div>\n" +
    "                                                            <div class=\"row\">\n" +
    "                                                                <em>\n" +
    "                                                                    Contact User <a href=\"{{review.author_url}}\">GooglePlus!</a>\n" +
    "                                                                </em>\n" +
    "                                                            </div>\n" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "\n" +
    "                                   </div>\n" +
    "                                  </span>\n" +
    "\n" +
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
    "                    <div class=\"modal-footer\">\n" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"  ng-click=\"disableModal()\">Close</button>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "");
}]);

angular.module("city/culture.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/culture.tpl.html",
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"well\">\n" +
    "            <h1 class=\"text-center\">Culture</h1>\n" +
    "                <div class=\"list-group\">\n" +
    "                    <div ng-show=\"loaderEnabled\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            <div class=\"loader\">\n" +
    "                                <div class=\"bouncywrap\" style=\"margin-top: 700px;\">\n" +
    "\n" +
    "                                    <div class=\"dotcon dc1\">\n" +
    "                                        <div class=\"dot\"></div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"dotcon dc2\">\n" +
    "                                        <div class=\"dot\"></div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"dotcon dc3\">\n" +
    "                                        <div class=\"dot\"></div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span ng-repeat=\"c in cultureSelection | orderBy:'name':false\">\n" +
    "                    <div class=\"list-group-item\">\n" +
    "                        <div class=\"col-md-3\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <img class=\"icon-col-centered\" ng-src=\"{{c.icon}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"row\" style=\"padding-top: 50px\">\n" +
    "                                <button class=\"btn btn-primary\" ng-click=\"setCultureDetails(c.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">\n" +
    "                                    More Info\n" +
    "                                </button>\n" +
    "                                <button  class=\"btn btn-primary \" ng-click=\"removeCultureItem(c)\" >\n" +
    "                                    Remove\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <p>Price {{c.price || 'Free'}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4\">\n" +
    "                                    <p>Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row scrollable\" style=\"max-height: 185px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify\">{{c.description}}</div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 text-center\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "                </div>\n" +
    "                <div class=\"list-group\">\n" +
    "                    <div infinite-scroll=\"infiniteScroll.nextPage(resource,cultureList)\" infinite-scroll-distance=\"2\" infinite-scroll-disabled=\"infiniteScroll.busy\">\n" +
    "                        <span ng-repeat=\"c in infiniteScroll.itemList | orderBy:'name':false\">\n" +
    "                            <div class=\"list-group-item\">\n" +
    "                               <div class=\"col-md-3\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <img class=\"icon-col-centered\" ng-src=\"{{c.icon}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"row\" style=\"padding-top: 50px\">\n" +
    "                                <button class=\"btn btn-primary\" ng-click=\"setCultureDetails(c.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">\n" +
    "                                    More Info\n" +
    "                                </button>\n" +
    "                                <button class=\"btn btn-primary \" ng-click=\"addCultureItem(c)\">\n" +
    "                                    Add\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                                <div class=\"col-md-6\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <p>Price {{c.price || 'Free'}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4\">\n" +
    "                                    <p>Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row scrollable\" style=\"max-height: 185px;overflow-y: auto\">\n" +
    "                                 <div class=\"text-justify\" >{{c.description}}</div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                                <div class=\"col-md-3 text-center\">\n" +
    "                                    <div class=\"panel panel-default\">\n" +
    "                                        <div class=\"panel-body image-panel\">\n" +
    "                                            <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("city/entertainment.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/entertainment.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"well\">\n" +
    "            <h1 class=\"text-center\">Entertainment</h1>\n" +
    "\n" +
    "            <div class=\"list-group\">\n" +
    "                <div ng-show=\"loaderEnabled\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"loader\">\n" +
    "                            <div class=\"bouncywrap\" style=\"margin-top: 700px;\">\n" +
    "\n" +
    "                                <div class=\"dotcon dc1\">\n" +
    "                                    <div class=\"dot\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"dotcon dc2\">\n" +
    "                                    <div class=\"dot\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"dotcon dc3\">\n" +
    "                                    <div class=\"dot\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <span ng-repeat=\"c in entertainmentSelection | orderBy:'name':false\">\n" +
    "                    <div class=\"list-group-item\">\n" +
    "                        <div class=\"col-md-3\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <img class=\"icon-col-centered\" ng-src=\"{{c.icon}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"row\" style=\"padding-top: 50px\">\n" +
    "                                <button class=\"btn btn-primary\" ng-click=\"setEntertainmentDetails(c.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">\n" +
    "                                    More Info\n" +
    "                                </button>\n" +
    "                                <button  class=\"btn btn-primary \" ng-click=\"removeEntertainmentItem(c)\" >\n" +
    "                                    Remove\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <p>Price {{c.price || 'Free'}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4\">\n" +
    "                                    <p>Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row scrollable\" style=\"max-height: 185px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify\">{{c.description}}</div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 text-center\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"list-group\">\n" +
    "                <div infinite-scroll=\"infiniteScroll.nextPage(resource,entertainmentList)\" infinite-scroll-distance=\"2\" infinite-scroll-disabled=\"infiniteScroll.busy\">\n" +
    "\n" +
    "                    <span ng-repeat=\"c in infiniteScroll.itemList | orderBy:'name':false\">\n" +
    "                    <div class=\"list-group-item\">\n" +
    "                        <div class=\"col-md-3\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <img class=\"icon-col-centered\" ng-src=\"{{c.icon}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"row\" style=\"padding-top: 50px\">\n" +
    "                                <button class=\"btn btn-primary\" ng-click=\"setEntertainmentDetails(c.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">\n" +
    "                                    More Info\n" +
    "                                </button>\n" +
    "                                <button class=\"btn btn-primary \" ng-click=\"addEntertainmentItem(c)\">\n" +
    "                                    Add\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <p>Price {{c.price || 'Free'}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4\">\n" +
    "                                    <p>Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row scrollable\" style=\"max-height: 185px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify\">{{c.description}}</div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 text-center\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("city/food.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/food.tpl.html",
    "    <div class=\"row\">\n" +
    "        <div class=\"well\">\n" +
    "            <h1 class=\"text-center\">Food</h1>\n" +
    "\n" +
    "            <div class=\"list-group\">\n" +
    "                <div ng-show=\"loaderEnabled\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"loader\">\n" +
    "                            <div class=\"bouncywrap\" style=\"margin-top: 700px;\">\n" +
    "\n" +
    "                                <div class=\"dotcon dc1\">\n" +
    "                                    <div class=\"dot\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"dotcon dc2\">\n" +
    "                                    <div class=\"dot\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"dotcon dc3\">\n" +
    "                                    <div class=\"dot\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <span ng-repeat=\"c in foodSelection | orderBy:'name':false\">\n" +
    "                    <div class=\"list-group-item\">\n" +
    "                        <div class=\"col-md-3\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <img class=\"icon-col-centered\" ng-src=\"{{c.icon}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"row\" style=\"padding-top: 50px\">\n" +
    "                                <button class=\"btn btn-primary\" ng-click=\"setFoodDetails(c.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">\n" +
    "                                    More Info\n" +
    "                                </button>\n" +
    "                                <button  class=\"btn btn-primary \" ng-click=\"removeFoodItem(c)\" >\n" +
    "                                    Remove\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <p>Price {{c.price || 'Free'}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4\">\n" +
    "                                    <p>Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row scrollable\" style=\"max-height: 185px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify\">{{c.description}}</div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 text-center\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"list-group\">\n" +
    "                <div infinite-scroll=\"infiniteScroll.nextPage(resource,foodList)\" infinite-scroll-distance=\"2\" infinite-scroll-disabled=\"infiniteScroll.busy\">\n" +
    "\n" +
    "                    <span ng-repeat=\"c in foodList | orderBy:'name':false\">\n" +
    "                    <div class=\"list-group-item\">\n" +
    "                        <div class=\"col-md-3\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <img class=\"icon-col-centered\" ng-src=\"{{c.icon}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"row\" style=\"padding-top: 50px\">\n" +
    "                                <button class=\"btn btn-primary\" ng-click=\"setFoodDetails(c.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">\n" +
    "                                    More Info\n" +
    "                                </button>\n" +
    "                                <button class=\"btn btn-primary \" ng-click=\"addFoodItem(c)\">\n" +
    "                                    Add\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <p>Price {{c.price || 'Free'}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4\">\n" +
    "                                    <p>Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row scrollable\" style=\"max-height: 185px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify\">{{c.description}}</div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 text-center\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "");
}]);

angular.module("city/hotel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/hotel.tpl.html",
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"well\">\n" +
    "        <h1 class=\"text-center\">Hotel</h1>\n" +
    "        <div class=\"list-group\">\n" +
    "            <div ng-show=\"loaderEnabled\">\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <div class=\"loader\">\n" +
    "                        <div class=\"bouncywrap\" style=\"margin-top: 700px;\">\n" +
    "\n" +
    "                            <div class=\"dotcon dc1\">\n" +
    "                                <div class=\"dot\"></div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"dotcon dc2\">\n" +
    "                                <div class=\"dot\"></div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"dotcon dc3\">\n" +
    "                                <div class=\"dot\"></div>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "                    <span ng-repeat=\"c in hotelSelection | orderBy:'name':false\">\n" +
    "                    <div class=\"list-group-item\">\n" +
    "                        <div class=\"col-md-3\">\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"panel-image-hotel\">\n" +
    "                                    <div class=\"panel-body\">\n" +
    "                                        <carousel interval=\"intervalImages\">\n" +
    "                                            <div ng-if=\"c.photos.length==0\">\n" +
    "                                                <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                            </div>\n" +
    "                                            <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                                <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                            </slide>\n" +
    "                                        </carousel>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row center-block\" style=\"padding-top: 50px\">\n" +
    "                                <button class=\"btn btn-primary\" ng-click=\"setHotelDetails(c.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">\n" +
    "                                    More Info\n" +
    "                                </button>\n" +
    "                                <button class=\"btn btn-primary \" ng-click=\"addHotelItem(c)\">\n" +
    "                                    Add\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <p>Address {{c.address}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <p>Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                            </div>\n" +
    "                            <div class=\"row scrollable\" style=\"max-height: 185px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify\">{{c.description}}</div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 text-center\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "        </div>\n" +
    "        <div class=\"list-group\">\n" +
    "                <span ng-repeat=\"c in hotelList | orderBy:'name':false\">\n" +
    "                    <div class=\"list-group-item\">\n" +
    "                        <div class=\"col-md-3\">\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"panel-image-hotel\">\n" +
    "                                    <div class=\"panel-body\">\n" +
    "                                        <carousel interval=\"intervalImages\">\n" +
    "                                            <div ng-if=\"c.photos.length==0\">\n" +
    "                                                <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                            </div>\n" +
    "                                            <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                                <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                            </slide>\n" +
    "                                        </carousel>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row center-block\" style=\"padding-top: 50px\">\n" +
    "                                <button class=\"btn btn-primary\" ng-click=\"setHotelDetails(c.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">\n" +
    "                                    More Info\n" +
    "                                </button>\n" +
    "                                <button class=\"btn btn-primary \" ng-click=\"addHotelItem(c)\">\n" +
    "                                    Add\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <p>Address {{c.address}}</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <p>Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                            </div>\n" +
    "                            <div class=\"row scrollable\" style=\"max-height: 185px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify\" >{{c.description}}</div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 text-center\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("city/utility.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("city/utility.tpl.html",
    "    <div class=\"row\">\n" +
    "        <div class=\"well\">\n" +
    "            <h1 class=\"text-center\">Utility</h1>\n" +
    "            <div class=\"list-group\">\n" +
    "                <div ng-show=\"loaderEnabled\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"loader\">\n" +
    "                            <div class=\"bouncywrap\" style=\"margin-top: 700px;\">\n" +
    "\n" +
    "                                <div class=\"dotcon dc1\">\n" +
    "                                    <div class=\"dot\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"dotcon dc2\">\n" +
    "                                    <div class=\"dot\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"dotcon dc3\">\n" +
    "                                    <div class=\"dot\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <span ng-repeat=\"c in utilitySelection | orderBy:'name':false\">\n" +
    "                    <div class=\"list-group-item\">\n" +
    "                        <div class=\"col-md-3\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <img class=\"icon-col-centered\" ng-src=\"{{c.icon}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"row\" style=\"padding-top: 50px\">\n" +
    "                                <button class=\"btn btn-primary\" ng-click=\"setUtilityDetails(c.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">\n" +
    "                                    More Info\n" +
    "                                </button>\n" +
    "                                <button  class=\"btn btn-primary \" ng-click=\"removeUtilityItem(c)\" >\n" +
    "                                    Remove\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <p>Price {{c.price || 'Free'}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4\">\n" +
    "                                    <p>Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row scrollable\" style=\"max-height: 185px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify\">{{c.description}}</div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 text-center\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"list-group\">\n" +
    "                <div infinite-scroll=\"infiniteScroll.nextPage(resource,utilityList)\" infinite-scroll-distance=\"2\" infinite-scroll-disabled=\"infiniteScroll.busy\">\n" +
    "\n" +
    "                    <span ng-repeat=\"c in utilityList | orderBy:'name':false\">\n" +
    "                        <div class=\"list-group-item\">\n" +
    "                            <div class=\"col-md-3\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <img class=\"icon-col-centered\" ng-src=\"{{c.icon}}\">\n" +
    "                            </div>\n" +
    "                            <div class=\"row\" style=\"padding-top: 50px\">\n" +
    "                                <button class=\"btn btn-primary\" ng-click=\"setUtilityDetails(c.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">\n" +
    "                                    More Info\n" +
    "                                </button>\n" +
    "                                <button class=\"btn btn-primary \" ng-click=\"addUtilityItem(c)\">\n" +
    "                                    Add\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                            <div class=\"col-md-6\" style=\"height:230px\">\n" +
    "                            <p class=\"list-group-item-text\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <b class=\"text-capitalize\">{{c.name}}</b>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-3\">\n" +
    "                                    <p>Price {{c.price || 'Free'}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4\">\n" +
    "                                    <p>Rating <rating ng-model=\"c.rating\" readonly=\"true\" ></rating></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row scrollable\" style=\"max-height: 185px;overflow-y: auto\">\n" +
    "                                <div class=\"text-justify\">{{c.description}}</div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                            <div class=\"col-md-3 text-center\">\n" +
    "                            <div class=\"panel panel-default\">\n" +
    "                                <div class=\"panel-body image-panel\">\n" +
    "                                    <carousel interval=\"intervalImages\">\n" +
    "                                        <div ng-if=\"c.photos.length==0\">\n" +
    "                                            <img ng-src=\"assets/images/empty_photo.png\" style=\"position: center\">\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <slide ng-repeat=\"image in c.photos\" active=\"image.active\">\n" +
    "                                            <img class=\"image-item\" ng-src=\"{{image.image}}\" >\n" +
    "                                        </slide>\n" +
    "                                    </carousel>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<script type=\"text/ng-template\" id=\"customTemplate.html\">\n" +
    "    <a class=\"col-md-12\">\n" +
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
    "            <input id=\"city\" name=\"city\"  type=\"text\" placeholder=\"Search here...\" class=\"form-control col-md-12 typeahead\"\n" +
    "                   ng-model=\"selected_city\"\n" +
    "                   typeahead=\"city as city.name for city in cities | filter:$viewValue | limitTo:8\"\n" +
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

angular.module("plan_trip/calendar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("plan_trip/calendar.tpl.html",
    "    <div class=\"row\">\n" +
    "        <form novalidate name=\"form\" ng-submit=\"next(form)\">\n" +
    "            <h1 class=\"text-center\">Choose the period</h1>\n" +
    "            <div ng-show=\"submitted  && (form.end.$error.required || form.start.$error.required)\" class=\"alert alert-danger\">\n" +
    "                Field <strong>start date</strong> and <strong>end date</strong> are required\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <h2>Start date:<span ng-show=\"dtstart\">{{dtstart | date:'dd/MM/yyyy'}}</span></h2>\n" +
    "                <datepicker ng-model=\"dtstart\" max-date=\"dtend\"  show-weeks=\"false\" name=\"start\" class=\"well well-sm\" required></datepicker>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <h2>End date:<span ng-show=\"dtend\">{{dtend | date:'dd/MM/yyyy'}}</span></h2>\n" +
    "                <datepicker ng-model=\"dtend\" min-date=\"dtstart\" show-weeks=\"false\" name=\"end\" class=\"well well-sm\" required></datepicker>\n" +
    "\n" +
    "            </div>\n" +
    "            <button class=\"btn btn-primary pull-right\"   >Next</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "");
}]);

angular.module("plan_trip/planning.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("plan_trip/planning.tpl.html",
    "\n" +
    "<div class=\"page-header\">\n" +
    "    <h1>Planning</h1>\n" +
    "</div>\n" +
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
    "                            <div class=\"not-selected\">\n" +
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
    "                                    <button class=\"btn btn-primary btn-outlined \">Add</button>\n" +
    "                                    <button class=\"btn btn-primary btn-outlined \" ng-click=\"setCultureDetails(cult.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">More</button>\n" +
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
    "                            <div class=\"not-selected\">\n" +
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
    "                                    <button class=\"btn btn-primary btn-outlined \">Add</button>\n" +
    "                                    <button class=\"btn btn-primary btn-outlined \" ng-click=\"setEntertainmentDetails(ent.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">More</button>\n" +
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
    "                            <div class=\"not-selected\">\n" +
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
    "                                    <button class=\"btn btn-primary btn-outlined \">Add</button>\n" +
    "                                    <button class=\"btn btn-primary btn-outlined \" ng-click=\"setHotelDetails(hot.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">More</button>\n" +
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
    "                            <div class=\"not-selected\">\n" +
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
    "                                    <button class=\"btn btn-primary btn-outlined \">Add</button>\n" +
    "                                    <button class=\"btn btn-primary btn-outlined \" ng-click=\"setFoodDetails(food.id)\" href=\"#moreInfoModal\" data-toggle=\"modal\">More</button>\n" +
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
    "</div>\n" +
    "<div class=\"sortable-container\" sv-root sv-part=\"selectedItems\">\n" +
    "    <div ng-repeat=\"item in selectedItems\" sv-element=\"opts\" class=\"well\">\n" +
    "        {{item}}\n" +
    "    </div>\n" +
    "</div>\n" +
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
    "                <button id=\"singlefrfbutton\" name=\"singlebutton\" class=\"btn btn-primary\">Confirm</button>\n" +
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
    "                    <button href=\"#infoDate\" data-toggle=\"modal\" class=\"btn btn-primary btn-outlined\">More</button>\n" +
    "                    <a class=\"btn btn-primary btn-outlined\" ui-sref=\"planning({date:curDate.format(dateFormat)})\">Edit</a>\n" +
    "                </time>\n" +
    "            </li>\n" +
    "        </div>\n" +
    "    </ul>\n" +
    "\n" +
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
