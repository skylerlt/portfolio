var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html"
        })
        .when("/home", {
            templateUrl: "pages/home.html"
        })
        .when("/company", {
            templateUrl: "pages/company.html"
        })
        .when("/contact", {
            templateUrl: "pages/contact.html"
        })
        .when("/residential", {
            templateUrl: "pages/residential.html"
        })
        .when("/employ", {
            templateUrl: "pages/employment.html"
        })
        .when("/clients", {
            templateUrl: "pages/clients.html"
        })
        .when("/commercial", {
            templateUrl: "pages/commercial.html"
        })

});

app.controller("MainController", ["$scope", function ($scope) {

    $scope.thumb = "house";

}])

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
})
