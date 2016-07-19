var app = angular.module("mainApp");

app.service("PhotoService", ["$http", function ($http) {

    this.getPhotos = function () {
        return $http.get("photos.json");
    };

}])
