blackShadder.service('ImagesService', function(){

    var allPhotos = [
        "pierna_300_ivan_morant",
        "samurai_dragon_ivan_morant",
        "camara_video_ivan_morant",
        "caraninyo",
        "catrina_ivan_morant",
        "corazon_rosa_ivan_morant",
        "durotan_ivan_morant",
        "eduardo_manos_tijeras_ivan_morant",
        "eminem_ivan_morant",
        "harley_ivan_morant",
        "kase_o_ivan_morant",
        "leon_ivan_morant",
        "lobo_ivan_morant",
        "mascara_gas_ivan_morant",
        "niña_espaldas_ivan_morant",
        "oso_ivan_morant",
        "paloma_ivan_morant",
        "patinete_ivan_morant",
        "pez_ivan_morant",
        "pinup_mustang_ivan_morant",
        "reloj_ivan_morant",
        "retrato2_ivan_morant",
        "retratos_ivan_morant",
        "tigre_ivan_morant"
    ];

    this.getNextBatch = function(startIndex, batchSize){

        var resultArrayLength = startIndex + batchSize;
        resultArrayLenth = resultArrayLength < allPhotos.length ? resultArrayLength : allPhotos.length;

        if(resultArrayLength <= allPhotos.length){
            return allPhotos.slice(startIndex, resultArrayLength);
        }else{
            return [];
        }
    }

    this.getNumberOfImages = function(){
        return allPhotos.length;
    }
})