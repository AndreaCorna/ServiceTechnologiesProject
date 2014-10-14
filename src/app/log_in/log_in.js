
angular.module( 'trippo.profile', [
    'Devise'
])


    .config(function config( $stateProvider ) {
        $stateProvider.state( 'login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'LoginCtrl',
                    templateUrl: 'log_in/log_in.tpl.html'
                }
            },
            data:{ pageTitle: 'Login' }
        });
    })



    .config([
        '$httpProvider',
        function($httpProvider) {
            $httpProvider.defaults.withCredentials = true;
        }
    ])

    .controller( 'LoginCtrl', function LoginController( $scope, $http, $location, Auth, localStorageService, $rootScope ) {
        $scope.login_user = {email: null, password: null};
        $scope.login_error = {message: null, errors: {}};
        $scope.credentials = {email: null, password: null};

        /*
        $scope.login = function() {
            $scope.submit({method: 'POST',
                url: '../users/sign_in.json',
                data: {user: {email: $scope.login_user.email, password: $scope.login_user.password}},
                success_message: "You have been logged in.",
                error_entity: $scope.login_error});
        };
        */

        $scope.login = function(){
            Auth.login($scope.credentials).then(function(user) {
                console.log(user); // => {id: 1, ect: '...'}
            }, function(error) {
                // Authentication failed...
            });

            $scope.$on('devise:login', function(event, currentUser) {
                // after a login, a hard refresh, a new tab
                localStorageService.set('auto', true);
                $rootScope.auto = localStorageService.get('auto');
                $scope.alerts = [
                    { type: 'success', msg: "you're logged in!! Yeeeee" }
                ];
            });

            $scope.$on('devise:new-session', function(event, currentUser) {
                // user logged in by Auth.login({...})
            });

            $scope.$on('devise:unauthorized', function(){
                $scope.alerts = [
                    { type: 'danger', msg: 'Incorrect Username or Password!! Try Again' }
                ];

            });

            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };
        };

        $scope.showCurrentUser = function(){
            Auth.currentUser().then(function(user){
               console.log(user);
            }, function(error) {
                }
            );
        };

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
                localStorageService.set('auto', false);
                $rootScope.auto = localStorageService.get('auto');
            });
        };

        /*
        $scope.logout = function() {
            $scope.submit({method: 'DELETE',
                url: '../users/sign_out.json',
                success_message: "You have been logged out.",
                error_entity: $scope.login_error});
        };
        */

        $scope.logout = function() {
            Auth.logout().then(function(oldUser) {
                // alert(oldUser.name + "you're signed out now.");
            }, function(error) {
                // An error occurred logging out.
            });

            $scope.$on('devise:logout', function(event, oldCurrentUser) {
                // ...
                localStorageService.set('auto', false);
                $rootScope.auto = localStorageService.get('auto');
            });
        };

        $scope.password_reset = function () {
            $scope.submit({method: 'POST',
                url: '../users/password.json',
                data: {user: {email: $scope.login_user.email}},
                success_message: "Reset instructions have been sent to your e-mail address.",
                error_entity: $scope.login_error});
        };

        $scope.unlock = function () {
            $scope.submit({method: 'POST',
                url: '../users/unlock.json',
                data: {user: {email: $scope.login_user.email}},
                success_message: "An unlock e-mail has been sent to your e-mail address.",
                error_entity: $scope.login_error});
        };

        $scope.confirm = function () {
            $scope.submit({method: 'POST',
                url: '../users/confirmation.json',
                data: {user: {email: $scope.login_user.email}},
                success_message: "A new confirmation link has been sent to your e-mail address.",
                error_entity: $scope.login_error});
        };

        $scope.submit = function(parameters) {
            $scope.reset_messages();

            $http({method: parameters.method,
                url: parameters.url,
                data: parameters.data})
                .success(function(data, status){
                    if (status == 201 || status == 204){
                        parameters.error_entity.message = parameters.success_message;
                        $scope.reset_users();
                    } else {
                        if (data.error) {
                            parameters.error_entity.message = data.error;
                        } else {
                            // note that JSON.stringify is not supported in some older browsers, we're ignoring that
                            parameters.error_entity.message = "Success, but with an unexpected success code, potentially a server error, please report via support channels as this indicates a code defect.  Server response was: " + JSON.stringify(data);
                        }
                    }
                })
                .error(function(data, status){
                    if (status == 422) {
                        parameters.error_entity.errors = data.errors;
                    } else {
                        if (data.error) {
                            parameters.error_entity.message = data.error;
                        } else {
                            // note that JSON.stringify is not supported in some older browsers, we're ignoring that
                            parameters.error_entity.message = "Unexplained error, potentially a server error, please report via support channels as this indicates a code defect.  Server response was: " + JSON.stringify(data);
                        }
                    }
                });
        };

        $scope.reset_messages = function() {
            $scope.login_error.message = null;
            $scope.login_error.errors = {};
        };

        $scope.reset_users = function() {
            $scope.login_user.email = null;
            $scope.login_user.password = null;
        };
    })
;