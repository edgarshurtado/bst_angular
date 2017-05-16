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

}]);
