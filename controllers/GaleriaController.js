blackShadder.controller("galeriaController", ["$scope", "$interval", function($scope, $interval){

    // TODO: Have a backend to serve the images
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

}]);
