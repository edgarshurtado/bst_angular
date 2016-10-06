var blackShadder = angular.module("blackShadderWeb", ['ngRoute']);

blackShadder.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/estudio', {
        templateUrl: 'pages/estudio.html',
        controller: 'estudioController'
    });
})

blackShadder.controller("mainController", ["$scope", function($scope){
    $scope.text = "Example text in main";
}]);

blackShadder.controller("estudioController", ["$scope", function($scope){
    $scope.text = "Example text in estudio";
}])