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
app
//index 頁面顯示畫面
.controller('index_user_data', function ($scope, $location ,getuserdataService) {  
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
    console.log($scope);
  // Call Service  json
    getuserdataService.get_user_data(user_id).then(function(data) {             
      $scope.age = data.age;
      $scope.firstname = data.firstname;
      $scope.lastname = data.lastname;
      $scope.gender = data.gender;    
  });
  }
})
//form controller
.controller('validateCtrl', function($scope,getuserdataService) {     
  //取得user[資訊]
  let userfield = function (field) {
    let fieldname = `user[${field}]`;    
    let result = $scope.form[fieldname];
    return result;
  }
  
  //form 驗證錯誤是否有輸入
  $scope.hasError = function(field){    
  return (userfield(field).$dirty && userfield(field).$error['required']) || ($scope.submitted && userfield(field).$error['required']);
  };
  //驗證是否輸入數字
   $scope.onlyNumber = function(field){
    //驗證是否為數字 
    let re = /^[0-9]+$/;
    //取值
    let value = userfield(field).$modelValue;
    //判斷是否為空
     if (value === undefined || value === '' || value === "") {
       return;
     } else {
      if (!re.test(userfield(field).$modelValue)){             
        //顯示錯誤訊息
        userfield(field).$invalid = true;
        //submit button disabled
        $scope.form.$invalid = true;
        return userfield(field).$invalid && $scope.form.$invalid;
       }
       return (userfield(field).$dirty && userfield(field).$error['required']) || ($scope.submitted && userfield(field).$error['required']); 
     }
  };
  //驗證是否為 Male Female Others
  $scope.gendervalidagtes = function(field){
    //取值
    let value = userfield(field).$modelValue;    
    //在此判斷有選擇而且是選擇正確
    if ((value === "Male" || value === "Female" || value === "Others") && value !== undefined && value !== 'undefined'){
      return;
     }
     else{      
      //顯示錯誤訊息
      userfield(field).$invalid = true;
      //submit button disabled
      $scope.form.$invalid = true;
      return userfield(field).$invalid && $scope.form.$invalid;
     }
  };
  $scope.validatesformsubmit = function(){
    return $scope.form.$invalid || $scope.form.$pristine;
  };
  
})
.directive('newUser', function() {   
  return {
    //restrict 用來指定 directive的形式，支持 'A','E','AE' 三種。
    //A就是attribute，E是element。默認為Ａ
    //<span money-wrap></span>。
    //E 用法：<money-wrap></money-wrap>。 'EA'兩種都可以使用
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
})
.constant('FIREBASE_URL', 'something');