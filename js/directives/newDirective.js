app.directive('greet', [function(){
  var o ={};

  o.restrict = 'E';
  o.templateUrl = '/partials/greeting.html';
  o.scope = {name:'@', age:'@'};  

  return o;
}]);