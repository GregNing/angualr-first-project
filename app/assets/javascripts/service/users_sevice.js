//http://jsfiddle.net/3duj5sqy/7/
app.service('getuserdataService',['$http','$q','$timeout' ,function($http,$q, $timeout){
    //取得使用者人數
    this.getusercount = function(){
        let responsedata = $q.defer();
        let httpdata = {
            method: 'GET',
            url: '/users/count.json',
           };        
           $http(httpdata).then(function successCallback(response) {
                responsedata.resolve(response.data);                               
            },function errorCallback(response) {
                  console.log(response);
             });
        return responsedata.promise;
    };
    //取得建立使用者 view
    this.get_new_user = function(){
        let responsedata = $q.defer();
        let httpdata = {
            method: 'GET',
            url: '/users/new',
           };        
           $http(httpdata).then(function successCallback(response) {
                responsedata.resolve(response.data);                
            },function errorCallback(response) {
                  console.log(response);
             });            
        return responsedata.promise;
    };
    //取得使用者資料用於編輯畫面
    this.get_user_data = function(user_id) {             
        let responsedata = $q.defer();   
        let httpdata = {
            method: 'GET',
            url: `/users/${user_id}/edit`,
           };        
           $http(httpdata).then(function successCallback(response) {
                responsedata.resolve(response.data);                  
            },function errorCallback(response) {
                  console.log(response);
             });
        return responsedata.promise;     
    };
    // this.getDogInfo = function () {
    //     var d = $q.defer();
    //     $timeout(function () {
    //         d.resolve(dog);
    //     }, 300);
    //     return d.promise;
    // }
    
    // this.updateDogName = function (newName) {
    //     var d = $q.defer();     
    //     // 模擬 http call, 用 $timeout 等兩秒後回傳
    //     $timeout(function () {
    //         dog.name = newName;
    //         d.resolve(dog);
    //     }, 2000);
    //     return d.promise;
    // }
}]);

// (function(angular) {
//     'use strict';
//     angular.module('application', [])    
//     .controller('users_index',function( $scope, $http) {
//         // $http({
//         //     traditional: true,
//         //     url: 'http://localhost:3000/users/count',
//         //     method: 'GET',
//         //     dataType: 'json'
//         // }).success(function(data) {
//         //     console.log(data);
//         //     console.log($scope);
//         // }).error(function(data) {
//         //     console.log(data+'Warrning');
//         // })
//         console.log($scope);
//         $http.get('http://localhost:3000/users/count')
//             .success(function(data) {
//                 console.log(data);
//             }).error(function(data,status,headers,config) {
//                 console.log(data);
//             })
//     })
//     // .controller('users_index', ['$scope', '$http', '$templateCache',
//     //   function($scope, $http, $templateCache) {
//     //     $scope.method = 'GET';
//     //     $scope.url = 'http-hello.html';
  
//     //     $scope.fetch = function() {
//     //       $scope.code = null;
//     //       $scope.response = null;
  
//     //       $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
//     //         then(function(response) {
//     //           $scope.status = response.status;
//     //           $scope.data = response.data;
//     //         }, function(response) {
//     //           $scope.data = response.data || 'Request failed';
//     //           $scope.status = response.status;
//     //       });
//     //     };
  
//     //     $scope.updateModel = function(method, url) {
//     //       $scope.method = method;
//     //       $scope.url = url;
//     //     };
//     //   }]);
// })(window.angular);