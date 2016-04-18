angular.module("misPelisSeriesApp").service("ApiService", ["$http" , "settings",function ($http, settings) {

    this.consultaApi = function (servicio) {
        return $http.get(settings.rutaApi
            + settings.apiVersion + "/"
            + servicio
            + "?api_key=" + settings.apiKey
            + "&language=" + settings.language)
    };

    this.obtenerRutaImagen = function (tamano, ruta) {
        return settings.rutaImagenApi  + tamano + ruta;
    }

}]);