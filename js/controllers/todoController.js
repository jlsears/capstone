app.controller('TodoCtrl', ['$rootScope', '$scope', 'Todo', function($rootScope, $scope, Todo){
  Todo.getAll(function (todos) {
    $scope.todos = todos;
  });


  $scope.addTodo = function () {
    var id = $rootScope.auth.uid;
    $scope.newTodo.uid = id;
    Todo.create($scope.newTodo, function () {
      console.log('Todo Created!!!')
        Todo.getAll(function (todos) {
          $scope.todos = todos;
        });
    });
  };

}]);