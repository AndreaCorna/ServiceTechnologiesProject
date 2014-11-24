angular.module( 'trippo', [
  'templates-app',
  'templates-common',
  'trippo.home',
  'trippo.city',
  'trippo.plan',
  'ui.router',
  'trippo.login',
  'trippo.signup',
  'common.navModule',
  'LocalStorageModule',
  'trippo.profile'
])

.config( function myAppConfig ( $locationProvider,$stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/home' );

       $locationProvider.html5Mode(true);
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle  ;
    }
      if ( angular.isDefined( toState.data.description ) ) {
          $scope.metadescription = toState.data.description  ;
      }
  });
})

;

