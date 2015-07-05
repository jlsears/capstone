  app.controller('PerformerCtrl', ['$rootScope', '$scope', '$location', '$firebaseArray', 'Artist', function ($rootScope, $scope, $location, $firebaseArray, Artist){

    var id = $rootScope.auth.uid.replace(':', '%3A');
    
    // var artistRef = new Firebase('https://yourfilmagenda.firebaseio.com/artistinfo' + id);

    // var artistListing = $firebaseArray(artistRef);

    $scope.artistlisting = [];
    Artist.getMyArtists(id, function(artists){
      $scope.artistlisting = artists;
      console.log($scope.artistlisting)
      $scope.keys = Object.keys($scope.artistlisting)
    })

    $scope.addArtistData = function() {
      var newArtist = {
        name: $scope.name,
        artist_type: $scope.artist_type
      };
      Artist.addArtist(id, newArtist, function(){
        $location.path('/menu');
        console.log('artist data added!!');        
      })
    };

    $scope.deleteAnArtist = function(artistId){
      console.log(artistId)
      Artist.deleteArtist(id, artistId, function(){
        console.log('artist deleted')
        $location.path('/menu')
      })
    }


    $scope.showListData = true;

    $scope.showListDataBtn = function() {
      $scope.showEditFields = false; 
      $scope.showListData = true;
    }

    $scope.showEditFieldsBtn = function(artist) {
      $scope.showEditFields = true; 
      $scope.showListData = false;
      $scope.artist = artist;
    }

    $scope.submitThis = function(artist) {
      artistListing.$save({
        name: $scope.name,
        artist_type: $scope.artist_type
      });
      $scope.showEditFields = false; 
      $scope.showListData = true;
      console.log('artist data edited!!');
    };

  $scope.getArtistInfo=function(artist){
    wu.getArtistInfo($scope.artist_name).then(function(response){
      console.log(response.data);
      $scope.project = response.data.title;
    })
  }

  }]);



