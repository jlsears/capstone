app.controller('AuthCtrl', ['$scope', 'Person', function($scope, Person){

    $scope.register = function () {
      Person.create($scope.user, function () {
        console.log('user Registered!!!')
      });
    };
}]);