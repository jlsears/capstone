  app.controller('MovieDataCtrl', ['$rootScope', '$scope', 'MovieData', '$firebaseArray', function ($rootScope, $scope, MovieData, $firebaseArray){

    var movieRef = new Firebase('https://yourfilmagenda.firebaseio.com/movieinfo');

    var movieListing = $firebaseArray(movieRef);

    //movieRef.$bindTo($scope, "movieinfo");

    $scope.addMovieData = function() {

      movieListing.$add({
        title: $scope.title,
        director: $scope.director,
        theater: $scope.theater,
        moviegoers: $scope.moviegoers,
        seenstatus: $scope.seenstatus
      });
      console.log('movie data added!!');
    };

    $scope.movielisting = movieListing;

    $scope.showListDataBtn = function() {
      $scope.showEditFields = false; 
      $scope.showListData = true;}

    $scope.showEditFieldsBtn = function() {
      $scope.showEditFields = true; 
      $scope.showListData = false;}

  }]);



