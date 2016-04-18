angular.module("misPelisSeriesApp").service("ApiService", ["$http" , "settings",function ($http, settings) {

    this.consultaApi = function (servicio) {
        return $http.get("https://api.themoviedb.org/"
            + settings.apiVersion + "/"
            + servicio
            + "?api_key=" + settings.apiKey
            + "&language=" + settings.language)
    };

    this.obtenerRutaImagen = function (tamano, ruta) {
        return "http://image.tmdb.org/t/p/w" + tamano + ruta;
    }

}]);