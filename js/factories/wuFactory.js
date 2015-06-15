app.factory('wu', ['$http', function($http){

  function getUrl(service, zip){
    return 'http://api.wunderground.com/api/536b90dc843299c1/' + service + '/q/' + zip + '.json?callback=JSON_CALLBACK'
  }

  function getConditions(zip){
      var url = getUrl('conditions', zip);
      return $http.jsonp(url);
  }

  function getWebcams(zip){
    var url = getUrl('webcams', zip);
    return $http.jsonp(url);
  }

  function getTenday(zip){
    var url = getUrl('forecast10day', zip);
    return $http.jsonp(url);
  }

  return {getConditions:getConditions, getWebcams:getWebcams, getTenday:getTenday};
}]);