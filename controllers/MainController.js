blackShadder.controller("mainController", [
    "$scope", "$interval", "ScheduleService" ,function($scope, $interval, ScheduleService){

    $scope.schedule = {};

    $scope.schedule.list = [
        {dayName:"Lunes", hours:"Cerrado"},
        {dayName:"Martes", hours:"11:00 - 20:00"},
        {dayName:"Miércoles", hours:"11:00 - 20:00"},
        {dayName:"Jueves", hours:"11:00 - 20:00"},
        {dayName:"Viernes", hours:"11:00 - 20:00"},
        {dayName:"Sábado", hours:"10:30 - 13:30"},
        {dayName:"Domingo", hours:"Cerrado"},
    ]

    $scope.schedule.show = false;

    $scope.toogleSchedule = function(){
        $scope.schedule.show = !$scope.schedule.show;
    }

    $scope.currentStatus = ScheduleService.isOpen() ? "Abierto" : "Cerrado";

}]);
