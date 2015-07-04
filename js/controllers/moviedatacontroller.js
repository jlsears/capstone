  app.controller('MovieDataCtrl', ['$rootScope', '$scope', '$location', '$firebaseArray', 'Movie', function ($rootScope, $scope, $location, $firebaseArray, Movie){

    var id = $rootScope.auth.uid.replace(':', '%3A');
    
    //var movieRef = new Firebase('https://yourfilmagenda.firebaseio.com/movieinfo');

    //var movieListing = $firebaseArray(movieRef);

    //movieRef.$bindTo($scope, "movieinfo");

    $scope.movielisting = [];
    Movie.getMyMovies(id, function(movies){
      $scope.movielisting =movies;
      console.log($scope.movielisting)
      $scope.keys = Object.keys($scope.movielisting)
    })
    

    $scope.addMovieData = function() {
      var newMovie = {
        title: $scope.title,
        director: $scope.director,
        theater: $scope.theater,
        moviegoers: $scope.moviegoers,
        date: $scope.date,
        response: $scope.response,
        seenstatus: $scope.seenstatus
      };
      Movie.addMovie(id, newMovie, function(){
        $location.path('/menu');
        console.log('movie data added!!');
      })
    };

    $scope.deleteAMovie = function(movieId){
      console.log(movieId)
      Movie.deleteMovie(id, movieId, function(){
        console.log('movie deleted')
        $location.path('/menu')
      })
    }

    $scope.editAMovie = function(movieId){
      console.log('title', $scope.title)
      console.log('movie title', $scope.movie.title)
      var changedMovie = {
        title: $scope.title,
        director: $scope.director,
        theater: $scope.theater,
        moviegoers: $scope.moviegoers,
        date: $scope.date,
        response: $scope.response,
        seenstatus: $scope.seenstatus
      };
      Movie.editAMovie(id, movieId, changedMovie, function(){
        $scope.showEditFields = false; 
        $scope.showListData = true;
        console.log('movie edited');
      })
    }

      // movieListing.$watch(function(event) {
      //   console.log(event);
      // });

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
        date: $scope.date,
        response: $scope.response,
        seenstatus: $scope.seenstatus
      });
      $scope.showEditFields = false; 
      $scope.showListData = true;
      console.log('movie data edited!!');
    };

 
  }]);



