app.factory('Todo', ['$http','API_URL', function ($http, API_URL) {
    function addTodo(id, todo, cb) {
      $http
        .post(`${API_URL}/todos/${id}.json`, todo)
        .success(cb);
    }
    function getMyTodos(id, cb) {
      $http
        .get(`${API_URL}/todos/${id}.json`)
        .success(cb)
        .error(function(data, error) { console.log(error); });
    }
  function getAll(cb) {
    $http
      .get(`${API_URL}/todo.json`)
      .success(cb);
  }
    return {addTodo:addTodo, getMyTodos:getMyTodos, getAll:getAll};
  }]);