angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl", ["$scope", "ApiService" ,function ($scope, ApiService){

    ApiService
        .consultaApi("movie/upcoming")
        .then(
            function(resultado){
                $scope.peliculas = resultado.data.results;
            },
            function () {
                alert("Algo no ha ido bien.");
            }
        );
}]);