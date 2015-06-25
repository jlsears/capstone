app.controller('AuthCtrl', ['$scope', '$location', 'Auth', '$firebaseArray', function($scope, $location, Auth, $firebaseArray){

    $scope.user={}
    var userRef = new Firebase('https://yourfilmagenda.firebaseio.com/userinfo');

    $scope.userListing = $firebaseArray(userRef);

    $scope.login = function() {
      Auth.login($scope.user.email, $scope.user.password, function() {
        $location.path('/menu');
        $scope.$apply();
      });
    };

    $scope.register = function() {
      $scope.userListing.$add($scope.user)
      //Auth.register($scope.user.email, $scope.user.password, function() {
        //Auth.login($scope.user.email, $scope.user.password, function() {
         // $location.path('/login');
          //$scope.$apply();
      //   });
      // });
    };

    $scope.logout=function(){
      Auth.logout(function() {
        $location.path('/');
        $scope.$apply();
      });
    };
  }]);