angular.module("misPelisSeriesApp").directiva("voting", ["$compile", function ($compile) {
    return{
        restrict: "AE",
        replace: true,
        scope:{
            rate:"@"
        },
        link: function (scope) {
            var number = parseFloat(scope.rate);
            var round = Math.round(number);
            var view = "<div>";

            //Full stars
            for (var f = 0; f < round; f++){
                view += "<i class=\"fa fa-star\" aria-hidden=\"true\"></i>";
            }

            //Empty stars
            for (var f = 0, F = 10 - round; f < F; f++){
                view += "<i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>";
            }

            //Close div
            view += "</div>";

            //Create DOM element
            var element = angular.element(view);
            var compiled = $compile(element)(scope)

        }
    }
}]);