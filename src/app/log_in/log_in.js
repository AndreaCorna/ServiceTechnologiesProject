/**
 * Created by motric on 25/09/14.
 */
angular.module('trippo.login', [
    'satellizer'
])

    .controller('LoginCtrl', function($scope, $auth) {

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    })

    .config(function($authProvider) {

        $authProvider.google({
            clientId: '825964482531-hjvdg3mmhqdq2oju9vk7d0ok9um4thpo.apps.googleusercontent.com'
        });
    });

