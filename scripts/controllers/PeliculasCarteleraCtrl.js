angular.module("misPelisSeriesApp").controller("PeliculasCarteleraCtrl", ["$scope", "$http", function ($scope, $http){
    $http
        .get("https://api.themoviedb.org/3/movie/now_playing?api_key=f04738bec9fcb61acc58413946b9403c&language=es")
        .then(
            function(resultado){
                $scope.peliculas = resultado.data.results;
            },
            function () {
                alert("Algo no ha ido bien.");
            }
        );
}]);