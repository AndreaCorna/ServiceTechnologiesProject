angular.module( 'trippo.login', [
    'Devise'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'profile', {
            url: '/profile',
            views: {
                "main": {
                    controller: 'ProfileCtrl',
                    templateUrl: 'log_in/profile.tpl.html'
                }
            },
            data:{ pageTitle: 'Profile' }
        });
    })

    .controller('ProfileCtrl', function ProfileController($scope, Auth){

        Auth.currentUser().then(function(user){
            $scope.email = user.email;
        });

    });