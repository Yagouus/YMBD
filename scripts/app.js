//Definimos modulos
angular.module("misPelisSeriesApp", ["ngRoute", "route-segment", "view-segment"]);

//Definimos secciones
  angular.module("misPelisSeriesApp").config(["$routeSegmentProvider", function ($routeSegmentProvider) {
      $routeSegmentProvider.when("/peliculas", "peliculas");
      $routeSegmentProvider.when("/peliculas/proximamente", "peliculas.proximamente");
      $routeSegmentProvider.when("/peliculas/cartelera", "peliculas.cartelera");
      $routeSegmentProvider.when("/series", "series");
      
      //Peliculas
      $routeSegmentProvider.segment("peliculas", {
          controller:"PeliculasCtrl",
          templateUrl:"views/Peliculas.html"
      });

      $routeSegmentProvider.within("peliculas").segment("proximamente",{
          controller:"PeliculasProximamenteCtrl",
          templateUrl:"views/PeliculasProximamente.html"
      });

      $routeSegmentProvider.within("peliculas").segment("cartelera",{
          controller:"PeliculasCarteleraCtrl",
          templateUrl:"views/PeliculasCartelera.html"
      });

      //Series
      $routeSegmentProvider.segment("series", {
          controller:"PeliculasCtrl",
          templateUrl:"views/Series.html"
      });
  }]);
  
  
