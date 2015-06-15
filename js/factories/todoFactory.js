app.factory('Todo', ['$http','API_URL', function ($http, API_URL) {
  function getAll(cb) {
    $http
      .get(`${API_URL}/todo.json`)
      .success(cb);
  }

  function create(data, cb) {
    $http
      .post(`${API_URL}/todo.json`, data)
      .success(cb);
  }

  function update(id, data, cb) {
    $http
      .put(`${API_URL}/todo/${id}.json`, data)
      .success(cb);
  }

  function destroy(id, cb) {
    $http
      .delete(`${API_URL}/todo/${id}.json`)
      .success(cb);
  }
    return {getAll:getAll, create:create, update:update, destroy:destroy};
  }]);