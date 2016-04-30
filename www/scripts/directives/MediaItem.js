angular.module("misPelisSeriesApp").directive("mediaItem", ["ApiService", function (ApiService) {

    return{
        restrict:"AE",
        replace: true,
        templateUrl:"views/MediaItem.html",
        scope:{
            datos: "=",
            alSeleccionar: "&"
        },
        link: function (scope) {

            //Returns image
            scope.rutaImagen = function (imagen) {
                return ApiService.obtenerRutaImagen(45, imagen)
            };

            scope.clickEnMedia = function (id) {
                scope.alSeleccionar({
                    mediaId: id
                })
            }

        }
    };
}]);