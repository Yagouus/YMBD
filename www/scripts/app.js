//Definimos modulos
angular.module("misPelisSeriesApp", ["ngRoute", "route-segment", "view-segment", "angular-loading-bar"]);

//Definimos secciones
  angular.module("misPelisSeriesApp").config(["$routeSegmentProvider", "$routeProvider", function ($routeSegmentProvider, $routeProvider) {
      $routeSegmentProvider.when("/peliculas", "peliculas.proximamente");
      $routeSegmentProvider.when("/peliculas/proximamente", "peliculas.proximamente");
      $routeSegmentProvider.when("/peliculas/cartelera", "peliculas.cartelera");
      $routeSegmentProvider.when("/peliculas/detalles", "peliculas.detalles");
      $routeSegmentProvider.when("/series", "series");
      $routeSegmentProvider.when("/series/hoy", "series.hoy");
      $routeSegmentProvider.when("/series/emision", "series.emision");
      $routeProvider.otherwise("/peliculas/cartelera");
      
      //Peliculas
      $routeSegmentProvider.segment("peliculas", {
          controller:"PeliculasCtrl",
          templateUrl:"views/Peliculas.html"
      });

      $routeSegmentProvider.within("peliculas").segment("proximamente",{
          controller:"PeliculasProximamenteCtrl",
          templateUrl:"views/PeliculasProximamente.html",
          resolve: {
              Peliculas: ["ApiService", function (ApiService) {
                  return ApiService.consultaApi("movie/upcoming");
              }]
          }
      });

      $routeSegmentProvider.within("peliculas").segment("cartelera",{
          controller:"PeliculasCarteleraCtrl",
          templateUrl:"views/PeliculasCartelera.html"
      });

      $routeSegmentProvider.within("peliculas").segment("detalles", {
          controller:"PeliculasDetallesCtrl",
          templateUrl:"views/PeliculasDetalles.html",
          resolve: {
              Pelicula: ["ApiService", "$routeParams", function (ApiService, $routeParams) {
                  return ApiService.consultaApi("movie/" + $routeParams.idPelicula);
              }]
          }
      });

      //Series
      $routeSegmentProvider.segment("series", {
          controller:"SeriesCtrl",
          templateUrl:"views/Series.html"
      });

      $routeSegmentProvider.within("series").segment("hoy", {
          controller:"SeriesHoyCtrl",
          templateUrl:"views/SeriesHoy.html"
      });

      $routeSegmentProvider.within("series").segment("hoy", {
          controller:"SeriesEmisionCtrl",
          templateUrl:"views/SeriesEmision.html"
      });


  }]);
  
  
