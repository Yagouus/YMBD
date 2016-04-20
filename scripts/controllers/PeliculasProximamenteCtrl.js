angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl", ["$scope", "Peliculas", "ApiService", "$location", "$filter" ,function ($scope, Peliculas, ApiService, $location, $filter){

    $scope.peliculas = $filter("orderBy")(Peliculas.data.results, "release_date");

    $scope.rutaImagen = function (imagen) {
        return ApiService.obtenerRutaImagen(45, imagen)
    };
    
    $scope.verDetalle = function (id) {
        $location.path("/peliculas/detalles").search({
            idPelicula: id
        });
    };

}]);