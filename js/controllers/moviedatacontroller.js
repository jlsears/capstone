  app.controller('MovieDataCtrl', ['$rootScope', '$scope', 'MovieData', '$firebaseArray', function ($rootScope, $scope, MovieData, $firebaseArray){

    var movieRef = new Firebase('https://yourfilmagenda.firebaseio.com/movieinfo');

    $scope.movieListing = $firebaseArray(movieRef);

    movieRef.$bindTo($scope, "movieinfo");


    $scope.addMovieData = function() {
      $scope.movieListing.$add({
      // var id = $rootScope.auth.uid.replace(':', '%3A');
      // MovieData.addMovieData(id, $scope.newMovieData, function () {
      //   console.log('Movie entry created!!!')
      //   $scope.newMovieData = {};
      });
    };

    var getList = function() {
      var id = $rootScope.auth.uid.replace(':', '%3A');
      MovieData.getMyMovieData(id, function (moviedatas) {
        console.log(moviedatas);
        return $scope.moviedatas = moviedatas;
      });
    };
    getList();

    $scope.deleteMovieData = function(moviedata) {
      var id = $rootScope.auth.uid.replace(':', '%3A');
      MovieData.deleteMovieData(id, moviedata, function () {
        console.log(moviedata);
        console.log("Delete button clicked!");
        getList();
      })
    }

  }]);



