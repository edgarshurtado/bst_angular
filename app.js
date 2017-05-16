var blackShadder = angular.module("blackShadderWeb", ['ngRoute', 'ui.bootstrap']);

blackShadder.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/estudio', {
        templateUrl: 'pages/main.html',
        controller: 'estudioController'
    })
    .when('/galeria', {
        templateUrl: 'pages/galeria.html',
        controller: 'galeriaController'
    })
    .when('/contacto', {
        templateUrl: 'pages/contacto.html',
        controller: 'contactoController'
    })
});

blackShadder.controller("estudioController", ["$scope", function($scope){
    $scope.text = "Example text in estudio";
}]);
