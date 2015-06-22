  app.controller('MovieDataCtrl', ['$rootScope', '$scope', 'MovieData', function ($rootScope, $scope, MovieData){
    $scope.addMovieData = function() {
      var id = $rootScope.auth.uid.replace(':', '%3A');
      MovieData.addMovieData(id, $scope.newMovieData, function () {
        console.log('Movie entry created!!!')
        $scope.newMovieData = {};
      });
    };

    var getList = function() {
      var id = $rootScope.auth.uid.replace(':', '%3A');
      MovieData.getMyMovieData(id, function (moviedatas) {
        return $scope.moviedatas = moviedatas;
      });
    };
    getList();

    $scope.deleteMovieData = function() {
      var id = $rootScope.auth.uid.replace(':', '%3A');
      MovieData.deleteMovieData(id, $scope.moviedata, function () {
        getList();
      })
    }

  }]);



