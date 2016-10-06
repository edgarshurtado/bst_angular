var blackShadder = angular.module("blackShadderWeb", ['ngRoute']);

blackShadder.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'testController'
    })
    .when('/estudio', {
        templateUrl: 'pages/estudio.html',
        controller: 'testController'
    });
})

blackShadder.controller("testController", ["$scope", function($scope){
    $scope.text = "Example text";
}])