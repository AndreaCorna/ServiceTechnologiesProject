angular.module('trippo.signup', [
])

    .controller('SignUpCtrl', function($scope, $auth) {
        $scope.signup = function() {
            $auth.signup({
                displayName: $scope.displayName,
                email: $scope.email,
                password: $scope.password
            });
        };
    });