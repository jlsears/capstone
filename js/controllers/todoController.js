app.controller('TodoCtrl', ['$scope', 'Todo', function($scope, Todo){
  Todo.getAll(function (todos) {
    $scope.todos = todos;
  });


  $scope.addTodo = function () {
    Todo.create($scope.newTodo, function () {
      console.log('Todo Created!!!')
        Todo.getAll(function (todos) {
          $scope.todos = todos;
        });
    });
  };

}]);