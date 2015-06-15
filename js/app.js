var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "MainCtrl"})
    .when("/register", {templateUrl: "partials/register.html", controller: "AuthCtrl"})
    .when("/login", {templateUrl: "partials/login.html", controller: "AuthCtrl"})
    .when("/todo", {templateUrl: "partials/todo.html", controller: "TodoCtrl"})
    .otherwise("/", {templateUrl: "partials/home.html", controller: "MainCtrl"});
}]);


app.constant('API_URL', 'https://angulartodofire.firebaseio.com');
