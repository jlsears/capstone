app.controller('AuthCtrl', ['$scope', '$location', 'Auth', '$firebaseArray', '$firebaseAuth', function($scope, $location, Auth, $firebaseArray, $firebaseAuth){

    $scope.user={}

    var userRef = new Firebase('https://yourfilmagenda.firebaseio.com/userinfo');

    auth = $firebaseAuth(userRef);

    $scope.userListing = $firebaseArray(userRef);

    $scope.login = function() {
      console.log('jjjjjjjj');
      userRef.authWithPassword({
        email    : $scope.user.email,
        password : $scope.user.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    };

      //$scope.auth = firebaseSimpleLogin(userRef);
      //auth.$firebaseSimpleLogin().then(function(authData) {
        //$scope.authData = authData;
      // }).catch(function(error) {
      //   $scope.error = error;
      //   console.log('login action!');
      //Auth.login($scope.user.email, $scope.user.password, function() {
        //$location.path('/menu');
        //$scope.$apply();
      //});


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