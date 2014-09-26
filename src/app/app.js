angular.module( 'trippo', [
  'templates-app',
  'templates-common',
  'trippo.home',
  'trippo.city',
  'trippo.plan',
  'ui.router',
  'trippo.navModule',
  'trippo.login'
])

.config(function  myAppConfig($urlRouterProvider){
    $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });

})

;

