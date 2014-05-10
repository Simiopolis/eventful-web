var eventfulApp = angular.module('eventfulApp', [
  'ngRoute',
  'eventfulControllers'
]);

eventfulApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partial/index',
        controller: 'PingCtrl'
      }).
      when('/name', {
        templateUrl: 'partial/name',
        controller: 'PingCtrl'
      }).
      otherwise({
        redirectTo: '/home' 
      });
  }
]);
