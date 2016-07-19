var app = angular.module("mainApp", ["ngRoute"])

app.config(function ($routeProvider) {

    $routeProvider
        .when("/about", {
            templateUrl: "about.html"
        })
        .when("/home", {
            templateUrl: "index.html"
        })
        .when("/gallery", {
            templateUrl: "gallery.html",
            controller: "PhotoController"
        })

})


app.controller("PhotoController", ["$scope", "PhotoService", function ($scope, PhotoService) {

    $scope.photoService = PhotoService;

    $scope.photoService.getPhotos().then(function (response) {
        $scope.allPhotos = response.data;
    });

    $scope.select = function (selected) {
        $scope.selected = selected;
    };

}])
