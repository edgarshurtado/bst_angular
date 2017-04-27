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
        templateUrl: 'pages/main.html',
        controller: 'contactoController'
    })
});

blackShadder.controller('CollapseMenuCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
});

blackShadder.controller("mainController", [
    "$scope", "$interval", "ScheduleService" ,function($scope, $interval, ScheduleService){

    $scope.schedule = {};

    $scope.schedule.list = [
        {dayName:"Lunes", hours:"9:00 - 14:00"},
        {dayName:"Martes", hours:"9:00 - 14:00"},
        {dayName:"Miércoles", hours:"9:00 - 14:00"},
        {dayName:"Jueves", hours:"9:00 - 14:00"},
        {dayName:"Viernes", hours:"9:00 - 14:00"},
        {dayName:"Sábado", hours:"9:00 - 14:00"},
        {dayName:"Domingo", hours:"9:00 - 14:00"},
    ]

    $scope.schedule.show = false;

    $scope.toogleSchedule = function(){
        $scope.schedule.show = !$scope.schedule.show;
    }

    $scope.currentStatus = ScheduleService.isOpen() ? "Abierto" : "Cerrado";

    $interval(function(){
        $scope.currentStatus = ScheduleService.isOpen() ? "Abierto" : "Cerrado";
    }, 1000);
}]);

blackShadder.controller("estudioController", ["$scope", function($scope){
    $scope.text = "Example text in estudio";
}]);

blackShadder.controller("galeriaController", ["$scope", "$interval", function($scope, $interval){

    $scope.photos = [
        "leon.jpg",
        "marilyn.jpg",
        "reloj_rosa.jpg",
        "foto_tattoorealista.jpg",
        "egipcio_esfinge.jpg",
        "gladiador.jpg",
        "mapa_brujula.jpg",
        "fenix.jpg",
        "catrina.jpg",
        "delfines.jpg"
    ];

    $scope.selected = null;

    $scope.setSelected = function(photoSelected){
        $scope.selected = photoSelected;
    }

    $scope.$watch(function(){
        console.log($scope.selected);
    })
}]);

blackShadder.controller("contactoController", ["$scope", function($scope){
    $scope.text = "Example text in contacto";
}]);