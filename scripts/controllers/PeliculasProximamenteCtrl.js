angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl", ["$scope", "Peliculas", "$location", "$filter" ,function ($scope, Peliculas, $location, $filter){

    $scope.peliculas = $filter("orderBy")(Peliculas.data.results, "release_date");

    //Routes to detail
    $scope.verDetalle = function (id) {
        $location.path("/peliculas/detalles").search({
            idPelicula: id
        });
    };

}]);