var blackShadder = angular.module("blackShadderWeb", []);

blackShadder.controller("testController", ["$scope", function($scope){
    $scope.text = "Example text";
}])