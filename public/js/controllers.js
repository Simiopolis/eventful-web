var eventfulControllers = angular.module('eventfulControllers', []);

eventfulControllers.controller('PingCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('api/ping').success(function(data) {
    $scope.message = data;
  });
}]);

//eventfulControllers.controller('PingDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
//}]);
