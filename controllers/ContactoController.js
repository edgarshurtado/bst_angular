blackShadder.controller("contactoController", [
    "$scope", "uiGmapGoogleMapApi",
function($scope, uiGmapGoogleMapApi){
    $scope.map = {
        center: {
            latitude: 38.966022,
            longitude: -0.1924245
        },
        zoom: 17
    };

    $scope.circles = [
        {
            id: 1,
            center: {
                latitude: 38.966022,
                longitude: -0.1924245
            },
            radius: 15,
            stroke: {
                color: 'black',
                weight: 4,
                opacity: 1
            },
            fill: {
                color: 'red',
                opacity: 0.5
            },
            geodesic: true, // optional: defaults to false
            draggable: false, // optional: defaults to false
            clickable: true, // optional: defaults to true
            editable: false, // optional: defaults to false
            visible: true, // optional: defaults to true
            control: {}
        }
    ];
}]);