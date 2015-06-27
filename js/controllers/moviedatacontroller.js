  app.controller('MovieDataCtrl', ['$rootScope', '$scope', 'MovieData', '$firebaseArray', function ($rootScope, $scope, MovieData, $firebaseArray){

    var movieRef = new Firebase('https://yourfilmagenda.firebaseio.com/movieinfo');

    var movieListing = $firebaseArray(movieRef);

    //movieRef.$bindTo($scope, "movieinfo");


    $scope.addMovieData = function() {
      //var id = $rootScope.auth.uid.replace(':', '%3A');
      movieListing.$add({
        title: $scope.title,
        director: $scope.director,
        theater: $scope.theater,
        moviegoers: $scope.moviegoers,
        tosee: $scope.tosee,
        haveseen: $scope.haveseen
      });
      console.log('movie data added!!');

      //   .then(function(ref) {
      //   var id = ref.key();
      //   console.log("added record with id " + id);
      //   list.$indexFor(id); // returns location in the array
      // });
    };

    $scope.deleteMovieData = function(moviedata) {
      var id = $rootScope.auth.uid.replace(':', '%3A');
      MovieData.deleteMovieData(id, moviedata, function () {
        console.log(moviedata);
        console.log("Delete button clicked!");
        getList();
      })
    }

  }]);



