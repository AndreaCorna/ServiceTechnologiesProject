/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'trippo.home', [
  'ui.router',
  'trippo.city',
  'trippo.plan'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 *Home controller implements search and get the list of cities from a rest call to the cityResource
 */
.controller( 'HomeCtrl', function HomeController($scope,$log,$location , CityRes,$http ) {


        $scope.cities = CityRes.query();
        $scope.selected_city = undefined;

        $scope.search = function() {
            $log.log("city passed " + $scope.selected_city);
            if ($scope.selected_city !== undefined) {

                if ($scope.selected_city.name === undefined) {
                    $location.path('/city/' + $scope.selected_city.toLowerCase() + "/culture");
                }
                else {
                    $location.path('/city/' + $scope.selected_city.name + "/culture");
                }
            }

        };
        /**
         * Unused but leaved in order to test how works if no list city but get from the Google Maps Api
         */
        $scope.getLocation = function(val) {
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function(res){
                var addresses = [];
                angular.forEach(res.data.results, function(item){
                    addresses.push(item.formatted_address);
                });
                return addresses;
            });
        };

        $scope.startsWith = function(name, viewValue) {
            return name.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
        };


    })


;

/**
 * jquery function to handle the typeahead in mobile devices
 */
$(function() {
    $("#city").click(function() {
        console.log("clicked");
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('html, body').animate({
                scrollTop: $("#city").offset().top
            }, 500);
        }

    });
});