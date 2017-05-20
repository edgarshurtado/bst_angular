blackShadder.controller("galeriaController", ["$scope", "$interval", function($scope, $interval){

    // TODO: Have a backend to serve the images
    $scope.photos = [
        "leon_ivan_morant",
        "caraninyo",
        "durotan_ivan_morant",
        "harley_ivan_morant",
        "retrato2_ivan_morant",
        "eduardo_manos_tijeras_ivan_morant",
        "lobo_ivan_morant",
        "catrina_ivan_morant"
        // "brujula_reloj_mapa_ivan_morant.jpg",
        // "mascara_gas_ivan_morant.jpg",
        // "pierna_300_ivan_morant.jpg",
        // "samurai_dragon_ivan_morant.jpg"
    ];

    $scope.selected = null;

    $scope.setSelected = function(photoSelected){
        $scope.selected = photoSelected;
    }

}]);
