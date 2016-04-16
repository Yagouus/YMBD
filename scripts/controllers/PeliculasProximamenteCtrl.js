angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl", ["$scope", "ApiService" ,"$filter" ,function ($scope, ApiService, $filter){

    ApiService
        .consultaApi("movie/upcoming")
        .then(
            function(resultado){
                $scope.peliculas = $filter("orderBy")(resultado.data.results, "release_date");
            },
            function () {
                alert("Algo no ha ido bien.");
            }
        );
}]);