/**
 * Created by Lorenzo on 28/07/14.
 */

angular.module("trippo.navModule", [
])

    .controller( "NavBarCtrl",
    function($scope, $location, $log)
    {
        $scope.isActive = function (viewLocation) {
           /*
            $scope.$log = $log;
            $log.log("location  "+$location.path());
            $log.log("viewLocation  "+viewLocation);
            */

            return viewLocation === $location.path();
        };
        $scope.isHidden = function(){


            return "/home" === $location.path();
        };
    },
    function($scope, $auth) {
        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
            };
        }
)

.config(function config( $stateProvider ) {
    $stateProvider.state( 'login', {
        url: '/login',
        views: {
            "main": {
                controller: 'LoginCtrl',
                templateUrl: 'log_in/log_in.tpl.html'
            }
        },
        data:{ pageTitle: 'Log In' }
    });
})

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

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'logout', {
            url: '/logout',
            views: {
                "main": {
                    controller: 'LogoutCtrl',
                    templateUrl: null
                }
            },
            data:{ pageTitle: 'Logout' }
        });
    });








