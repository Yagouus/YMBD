angular.module("misPelisSeriesApp").controller("PeliculasCarteleraCtrl", ["$scope", "$location", "ApiService" ,function ($scope, $location, ApiService){

    ApiService
        .consultaApi("movie/now_playing")
        .then(
            function(resultado){
                $scope.peliculas = resultado.data.results;
            },
            function () {
                alert("Algo no ha ido bien.");
            }
        );

    //Routes to detail
    $scope.verDetalle = function (id) {
        $location.path("/peliculas/detalles").search({
            idPelicula: id
        });
    };

}]);