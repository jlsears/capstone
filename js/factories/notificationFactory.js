app.factory('NotifFact', ['$http', 'API_URL', function($http, API_URL){
  function addNotification(id, notification, cb){
    $http
      .post(`${API_URL}notificationinfo/${id}.json`, notification)
      .success(cb);
  }
  function getMyNotifs(id, cb){
    $http
      .get(`${API_URL}notificationinfo/${id}.json`)
      .success(cb);
  }

  return{addNotification:addNotification, getMyNotifs:getMyNotifs}
}])