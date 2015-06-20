app.factory('MovieListFactory', ['$http','API_URL', function ($http, API_URL) {
    function addMovie(id, themovie, cb) {
      $http
        .post(`${API_URL}/movies/${id}.json`, themovie)
        .success(cb);
    }
    function getMyMovies(id, cb) {
      $http
        .get(`${API_URL}/movies/${id}.json`)
        .success(cb)
        .error(function(data, error) { console.log(error); });
    }
  function getAll(cb) {
    $http
      .get(`${API_URL}themovie.json`)
      .success(cb);
  }
    return {addMovie:addMovie, getMyMovies:getMyMovies, getAll:getAll};
  }]);