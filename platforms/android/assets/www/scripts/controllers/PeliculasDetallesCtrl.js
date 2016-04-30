angular.module("misPelisSeriesApp").controller("PeliculasDetallesCtrl", ["$scope","Pelicula" ,"ApiService",function ($scope, Pelicula, ApiService){
    $scope.Pelicula = Pelicula.data;
    
    $scope.rutaImagen = function (imagen) {
        return ApiService.obtenerRutaImagen(150, imagen)
    };
}]);