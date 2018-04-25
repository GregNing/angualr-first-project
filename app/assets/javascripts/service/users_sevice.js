app.controller('Userindex',['$scope','$http'],function( $scope, $http) {      
    $http.get('http://localhost:3000/users/count').
        success(function(data) {
            console.log(data);
        }).error(function(data,status,headers,config) {
            console.log(data);
        });
})
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