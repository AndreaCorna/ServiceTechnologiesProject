/**
 * Created by Lorenzo on 28/07/14.
 */

angular.module("common.navModule", [
])
.controller( "navCtrl",[  "$scope","$location","$log", "Auth", "localStorageService", "$rootScope", 'SelectionService' ,
    function($scope, $location, $log, Auth, localStorageService, $rootScope, SelectionService)
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

        $scope.$watchCollection(function () { return SelectionService.getCities(); }, function (newVal, oldVal) {
            $scope.curTrips= SelectionService.getCities();
            if(!$scope.$$phase) {
                $scope.$apply();
            }

        });

        $scope.showAuth = function(){
            Auth.currentUser().then(function(user){
                    console.log(user);
                    console.log(Auth.isAuthenticated());
                    localStorageService.set('auto', true);
                    $rootScope.auto = localStorageService.get('auto');
                }, function(error) {
                }
            );
            $scope.$on('devise:unauthorized', function(){
                console.log('tutttto bene');
                localStorageService.set('auto', false);
                $rootScope.auto = localStorageService.get('auto');
            });
        };
    }

    ]
);
