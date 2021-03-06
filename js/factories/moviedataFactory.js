app.factory('Movie', ['$http', 'API_URL', function($http, API_URL){
  function addMovie(id, movie, cb){
    $http
      .post(`${API_URL}movieinfo/${id}.json`, movie)
      .success(cb);
  }
  function getMyMovies(id, cb){
    $http
      .get(`${API_URL}movieinfo/${id}.json`)
      .success(cb);
  }
  function deleteMovie(id, movieId, cb){
    $http
      .delete(`${API_URL}movieinfo/${id}/${movieId}.json`)
      .success(cb);
  }

  function editAMovie(id, movieId, movie, cb){
    console.log('hit the edit factory')
    console.log(id, movieId, movie)
    $http
      .put(`${API_URL}movieinfo/${id}/${movieId}.json`, movie)
      .success(cb);
  }
  return{addMovie:addMovie, getMyMovies:getMyMovies, deleteMovie:deleteMovie, editAMovie:editAMovie}
}])