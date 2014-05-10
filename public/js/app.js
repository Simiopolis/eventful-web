var eventfulApp = angular.module('eventfulApp', [
  'ngRoute',
  'eventfulControllers'
]);

eventfulApp.config(['$routeProvider','$locationProvider', 
  function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.
      when('/home', {
        templateUrl: 'partial/index',
        controller: 'PingCtrl'
      }).
      when('/name', {
        templateUrl: 'partial/name',
        controller: 'PingCtrl'
      }).
      when('/contact', {
        templateUrl: 'partial/contact_us',
        controller: 'PingCtrl'
      }).
      otherwise({
        redirectTo: '/home' 
      });
  }
]);
