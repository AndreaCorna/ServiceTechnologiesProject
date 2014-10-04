/**
 * Created by Lorenzo on 28/07/14.
 */

angular.module("common.navModule", [
])
.controller( "navCtrl",[  "$scope","$location","$log",
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
    }
    ]
);
