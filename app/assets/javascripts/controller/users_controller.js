// app.config(['$routeProvider', '$locationProvider',
// function($routeProvider, $locationProvider) {
//   $routeProvider   
//     .when('/users/new', {
//       templateUrl: '/users/new',
//       // controller: 'NewUser',
//     });
//   //$location in HTML5 mode requires a <base> 處理方式可以使用 requireBase 關掉
//   //https://stackoverflow.com/questions/37034140/location-in-html5-mode-requires-a-base
//   $locationProvider.html5Mode({
//     enabled: true,
//     requireBase: false
//   });
// }])
app.controller('index_user_data', function ($scope, $location ,getuserdataService) {  
  //使用此方式方便在view 呼叫當然也可以使用 $scope直接授與
  // 使用 'Controller as' syntax
  var settings = this;  
  // 取得使用者人數資料
  getuserdataService.getusercount().then(function(data){
    //可以在前端呼叫user count
    $scope.usercount = data;    
  });  
  //取得建立使用者畫面  
  settings.new_user = function() {
    // $location.path('/users/new');
    // $scope.template = 'true';
    // getuserdataService.get_new_user().then(function(data) {
    //   $scope.template = '/users/new';
    //   // document.getElementById('editview').innerHTML = data;
    // });
  };
  //取得使用者畫面資料(修改)
  $scope.get_user_data = function(user_id){      
    $scope.template = `/users/${user_id}/edit`;
  // Call Service  
  //   getuserdataService.get_user_data(user_id).then(function(data) {         
  //     return data;      
  // });
  }
  $scope.showtemplatefornewuser = function(){
    $scope.template = ''
  }
});
app.directive('newUser', function() {   
  return {
    restrict: 'A',
    //call controller 裡面的function 如果需要回傳值的話
    //參考 https://stackoverflow.com/questions/16546771/how-do-i-pass-multiple-attributes-into-an-angular-js-attribute-directive
    //https://stackoverflow.com/questions/24171893/angularjs-nginclude-vs-directive
    scope: {
      callback: '&showtemplatefornewuser',      
    },   
    templateUrl: function(ele,attr){
      return '/users/new';
    }
  };
});