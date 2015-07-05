app.factory('Artist', ['$http', 'API_URL', function($http, API_URL){
  function addArtist(id, artist, cb){
    $http
      .post(`${API_URL}artistinfo/${id}.json`, artist)
      .success(cb);
  }
  function getMyArtists(id, cb){
    $http
      .get(`${API_URL}artistinfo/${id}.json`)
      .success(cb);
  }
  function deleteArtist(id, artistId, cb){
    $http
      .delete(`${API_URL}artistinfo/${id}/${artistId}.json`)
      .success(cb);
  }

  function editAnArtist(id, artistId, artist, cb){
    console.log('hit the edit factory')
    $http
      .put(`${API_URL}artistinfo/${id}/${artistId}.json`, artist)
      .success(cb);
  }
  return{addArtist:addArtist, getMyArtists:getMyArtists, deleteArtist:deleteArtist, editAnArtist:editAnArtist}
}])