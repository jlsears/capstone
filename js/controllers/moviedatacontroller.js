  app.controller('MovieDataCtrl', ['$rootScope', '$scope', 'MovieData', function ($rootScope, $scope, MovieData){
    $scope.addMovieData = function() {
      var id = $rootScope.auth.uid.replace(':', '%3A');
      MovieData.addMovieData(id, $scope.newMovieData, function () {
        console.log('Movie entry created!!!')
        $scope.newMovieData = {};
          MovieData.getMyMovieDatas(id, function (moviedatas) {
            $scope.moviedatas = moviedatas;
          });
      });
    };
  }]);



