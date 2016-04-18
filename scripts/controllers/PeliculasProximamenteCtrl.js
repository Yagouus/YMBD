angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl", ["$scope", "Peliculas" ,"$filter" ,function ($scope, Peliculas, $filter){

    $scope.peliculas = $filter("orderBy")(Peliculas.data.results, "release_date");

}]);