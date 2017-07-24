blackShadder.controller("galeriaController", ["$scope", "$interval", "ImagesService", function($scope, $interval, ImagesService){

    var batchSize = 8;
    var numberOfImagesToBeLoaded = ImagesService.getNumberOfImages();

    $scope.photos = [];
    $scope.selected = null;
    $scope.hideLoadImagesBtn = checkAllPhotosAreLoaded();

    $scope.setSelected = function(photoSelected){
        $scope.selected = photoSelected;
    }

    $scope.loadImagesBatch = function(){
        var batchStartIndex = $scope.photos.length;
        var newBatch = ImagesService.getNextBatch(batchStartIndex, batchSize)

        $scope.photos = $scope.photos.concat(newBatch);

        $scope.hideLoadImagesBtn = checkAllPhotosAreLoaded();
    }

    $scope.loadImagesBatch();

    function checkAllPhotosAreLoaded(){
        if( numberOfImagesToBeLoaded === $scope.photos.length ){
            return true;
        }else{
            return false;
        }
    }
}]);
