var blackShadder = angular.module("blackShadderWeb",
    ['ngRoute', 'ui.bootstrap', 'uiGmapgoogle-maps']
);

blackShadder.config(function($routeProvider, uiGmapGoogleMapApiProvider){
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

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyD_Z0GltWXy-TNKeIdvMqmQ-yScydmlmbA',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
});

blackShadder.controller("estudioController", ["$scope", function($scope){
    $scope.text = "Example text in estudio";
}]);
