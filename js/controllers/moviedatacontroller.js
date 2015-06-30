  app.controller('MovieDataCtrl', ['$rootScope', '$scope', '$location', 'MovieData', '$firebaseArray', function ($rootScope, $scope, $location, MovieData, $firebaseArray){

    var id = $rootScope.auth.uid.replace(':', '%3A');
    
    var movieRef = new Firebase('https://yourfilmagenda.firebaseio.com/movieinfo' + id);

    var movieListing = $firebaseArray(movieRef);

    //movieRef.$bindTo($scope, "movieinfo");

    $scope.movielisting = movieListing;

    $scope.addMovieData = function() {
      movieListing.$add({
        title: $scope.title,
        director: $scope.director,
        theater: $scope.theater,
        moviegoers: $scope.moviegoers,
        seenstatus: $scope.seenstatus
      });
      $location.path('/menu');
      console.log('movie data added!!');
    };

      movieListing.$watch(function(event) {
        console.log(event);
      });

    $scope.showListData = true;

    $scope.showListDataBtn = function() {
      $scope.showEditFields = false; 
      $scope.showListData = true;
    }

    $scope.showEditFieldsBtn = function(movie) {
      $scope.showEditFields = true; 
      $scope.showListData = false;
      $scope.movie = movie;
    }

    $scope.submitThis = function(movie) {
      movieListing.$save({
        title: $scope.title,
        director: $scope.director,
        theater: $scope.theater,
        moviegoers: $scope.moviegoers,
        seenstatus: $scope.seenstatus
      });
      $scope.showEditFields = false; 
      $scope.showListData = true;
      console.log('movie data edited!!');
    };

  }]);



