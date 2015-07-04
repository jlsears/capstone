  app.controller('FriendNotifCtrl', ['$rootScope', '$scope', '$location', '$firebaseArray', 'NotifFact', function ($rootScope, $scope, $location, $firebaseArray, NotifFact){
    $scope.message = "Friend notification place!"

    var id = $rootScope.auth.uid.replace(':', '%3A');
    
    // var notifRef = new Firebase('https://yourfilmagenda.firebaseio.com/notifications' + id);

    // var notifEntries = $firebaseArray(notifRef);

    //movieRef.$bindTo($scope, "movieinfo");

    $scope.notifentries = [];
    NotifFact.getMyNotifs(id, function(notifications){
      console.log('notifications', notifications)
      $scope.notifentries =notifications;
      console.log($scope.notifentries)
      $scope.keys = Object.keys($scope.notifentries)
    })


    $scope.sendNotif = function() {
      var newNotif = {
        phoneNumber: $scope.phoneNumber,
        messageContent: $scope.messageContent
      };
      NotifFact.addNotification(id, newNotif, function(){
        $location.path('/menu');
        console.log('notification data added!!');
      })
    };
  }]);

