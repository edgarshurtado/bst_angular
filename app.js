var blackShadder = angular.module("blackShadderWeb", ['ngRoute']);

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
        templateUrl: 'pages/main.html',
        controller: 'galeriaController'
    })
    .when('/contacto', {
        templateUrl: 'pages/main.html',
        controller: 'contactoController'
    })
})

blackShadder.controller("mainController", ["$scope", function($scope){
    $scope.text = "Example text in main";
}]);

blackShadder.controller("estudioController", ["$scope", function($scope){
    $scope.text = "Example text in estudio";
}]);

blackShadder.controller("galeriaController", ["$scope", function($scope){
    $scope.text = "Example text in galeria";
}]);

blackShadder.controller("contactoController", ["$scope", function($scope){
    $scope.text = "Example text in contacto";
}]);