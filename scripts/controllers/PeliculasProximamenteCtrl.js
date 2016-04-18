angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl", ["$scope", "Peliculas", "ApiService","$filter" ,function ($scope, Peliculas, ApiService, $filter){

    $scope.peliculas = $filter("orderBy")(Peliculas.data.results, "release_date");

    $scope.rutaImagen = function (imagen) {
        return ApiService.obtenerRutaImagen(45, imagen)
    }

}]);