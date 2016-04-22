angular.module("misPelisSeriesApp").directive("genre", ["$compile", function ($compile) {
    return {
        restrict: "AE",
        scope:{
            collection:"="
        },
        link: function(scope, elemento){
            var view="<blockquote>";
            for(var f = 0, F = scope.collection.length; f < F; f++){
                view += "<p>" + scope.collection[f].name + "</p>";
            }
            view+="</blockquote>";
            var element = angular.element(view);
            var compiled = $compile(element)(scope);
            elemento.replaceWith(compiled);
        }
    }
}]);
