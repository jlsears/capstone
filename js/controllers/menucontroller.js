  app.controller('MenuCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
    $scope.message = "Where the menu lives!";

    $scope.displayNav = false;

    $scope.logout=function(){
      Auth.logout(function() {
        $location.path('/login');
        $scope.$apply();
    });
  };
}]);