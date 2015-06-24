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
    function deleteMovieData(id, moviedata, cb) {
      console.log(id);
      console.log(moviedata);
      $http
        .delete(`${API_URL}/moviedatas/${id}/moviedata.json`)
        .success(function(){alert('it worked!!');});
    }
    return {addMovieData:addMovieData, getMyMovieData:getMyMovieData, getAll:getAll, deleteMovieData:deleteMovieData};
  }]);