app.factory('wu',['$http', function($http){

function getUrl(){
return 'https://api.themoviedb.org/3/search/person?query=tilda?swinton&api_key=e4c0718991da519b470bbfa0660756fc'.json?callback=JSON_CALLBACK'
}

function getArtistInfo(artist){
  var url = getUrl(artist);
  return $http.jsonp(url);
}


return{artistInfo:artistInfo}

}]);