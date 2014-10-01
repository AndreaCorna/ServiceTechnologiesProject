/**
 * Created by motric on 25/09/14.
 */
angular.module('trippo.login', [
    'trippo.navModule'
])

    .controller('LoginCtrl',

   /* function($scope, $auth) {

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    } */
    function($scope) {
        $scope.aut = false;
    })

    .config(function($authProvider) {

        $authProvider.google({
            clientId: '825964482531-hjvdg3mmhqdq2oju9vk7d0ok9um4thpo.apps.googleusercontent.com'
        });

        $authProvider.facebook({
            clientId: '573190749454041'
        });

    })

    .controller('LogoutCtrl', function($auth, $alert) {
        if (!$auth.isAuthenticated()) {
            return;
        }
        $auth.logout()
            .then(function() {
                $alert({
                    content: 'You have been logged out',
                    animation: 'fadeZoomFadeDown',
                    type: 'material',
                    duration: 3
                });
            });
    });

