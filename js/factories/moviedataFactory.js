app.factory('MovieData', ['$http','API_URL', function ($http, API_URL) {
    function addMovieData(id, themovie, cb) {
      $http
        .post(`${API_URL}/moviedatas/${id}.json`, themovie)
        .success(cb);
    }
    function getMyMovieData(id, cb) {
      $http
        .get(`${API_URL}/moviedatas/${id}.json`)
        .success(cb)
        .error(function(data, error) { console.log(error); });
    }
  function getAll(cb) {
    $http
      .get(`${API_URL}themovie.json`)
      .success(cb);
  }
    function deleteMovieData(id, themovie, cb) {
      $http
        .delete(`${API_URL}/moviedatas/${id}.json`, themovie)
        .success(cb);
    }
    return {addMovieData:addMovieData, getMyMovieData:getMyMovieData, getAll:getAll, deleteMovieData:deleteMovieData};
  }]);