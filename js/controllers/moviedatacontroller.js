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

    // var getList = function() {
    //   var id = $rootScope.auth.uid.replace(':', '%3A');
    //   MovieListing.getMyMovieData(id, function (moviedatas) {
    //     console.log(moviedatas);
    //     return $scope.moviedatas = moviedatas;
    //   });
    // };
    // getList();

    $scope.deleteMovieData = function(moviedata) {
      var id = $rootScope.auth.uid.replace(':', '%3A');
      MovieData.deleteMovieData(id, moviedata, function () {
        console.log(moviedata);
        console.log("Delete button clicked!");
        getList();
      })
    }

  }]);



