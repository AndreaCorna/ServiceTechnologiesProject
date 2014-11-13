
angular.module( 'trippo.signup', [
])


    .config(function config( $stateProvider ) {
        $stateProvider.state( 'signup', {
            url: '/signup',
            views: {
                "main": {
                    controller: 'SignupCtrl',
                    templateUrl: 'sign_up/sign_up.tpl.html'
                }
            },
            data:{ pageTitle: 'Registrati' }
        });
    })


    .controller( 'SignupCtrl', function SignupController( $scope, $http, Auth ) {
        $scope.register_user = {email: null, password: null, password_confirmation: null};
        $scope.register_error = {message: null, errors: {}};
        $scope.credentials = {email: null, password: null, password_confirmation: null};

        /*
        $scope.register = function() {
            $scope.submit({method: 'POST',
                url: '../users.json',
                data: {user: {email: $scope.register_user.email,
                    password: $scope.register_user.password,
                    password_confirmation: $scope.register_user.password_confirmation}},
                success_message: "You have been registered and logged in.  A confirmation e-mail has been sent to your e-mail address, your access will terminate in 2 days if you do not use the link in that e-mail.",
                error_entity: $scope.register_error});
        };
        */

        $scope.register = function() {
            Auth.register($scope.credentials).then(function(registeredUser) {
                console.log(registeredUser); // => {id: 1, ect: '...'}
            }, function(error) {
                // Registration failed...
            });

            $scope.$on('devise:new-registration', function(event, user) {
                $scope.alerts = [
                    { type: 'success', msg: "Yep, you're succesfully register" }
                ];
            });

            $scope.$on('devise:unauthorized', function(){
                console.log("ok");
                $scope.alerts = [
                    { type: 'danger', msg: 'Something wrong! Retry' }
                ];

            });

            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };

        };


        $scope.change_password = function() {
            $scope.submit({method: 'PUT',
                url: '../users/password.json',
                data: {user: {email: $scope.register_user.email,
                    password: $scope.register_user.password,
                    password_confirmation: $scope.register_user.password_confirmation}},
                success_message: "Your password has been updated.",
                error_entity: $scope.register_error});
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
            $scope.register_error.message = null;
            $scope.register_error.errors = {};
        };

        $scope.reset_users = function() {
            $scope.register_user.email = null;
            $scope.register_user.password = null;
            $scope.register_user.password_confirmation = null;
        };
    })

    .directive('pwCheck', function() {
        return {
                require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            $(elem).add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    var v = elem.val()===$(firstPassword).val();
                    ctrl.$setValidity('pwcheck', v);
                });
            });
        }
    };
});

