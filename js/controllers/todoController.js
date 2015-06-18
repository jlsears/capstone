app.controller('TodoCtrl', ['$rootScope', '$scope', 'Todo', function($rootScope, $scope, Todo){
  $scope.addTodo = function () {
    var id = $rootScope.auth.uid.replace(':', '%3A');
    Todo.addTodo(id, $scope.newTodo, function () {
      console.log('Todo Created!!!')
      $scope.newTodo = {};
        Todo.getMyTodos(id, function (todos) {
          $scope.todos = todos;
        });
    });
  };


}]);