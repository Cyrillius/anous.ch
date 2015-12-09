(function() {
  'use strict';

  angular
    .module('anous')
    .factory('anousAPI', anousAPI);

  /** @ngInject */
  function anousAPI($log, $http, $location, $q, toastr) {
    
    var AnousAPI = {
      //apiHost : 'http://127.0.0.1/dev-sites/vero/src/api',
      apiHost : 'http://api.anous.ch/',

      login: function(username,password) {
        var deferred = $q.defer();
        $log.debug("#anousAPI login request - send");
        var result = post(this.apiHost + '/user/login', {username : username, password : password}, success, fail);

        function success (response) {
          $log.debug("#anousAPI login request - success : "+response.data);
          toastr.success("You are now connected!");
          deferred.resolve(response.data);
          
        }

        function fail(error) {
          $log.debug("#anousAPI login request - request error: "+error);
          toastr.error("Connection failed! \n \n"+error.data);
          deferred.reject(error);
        }
        return deferred.promise;
      },

      userInfo : function (token) {
        var deferred = $q.defer();
        $log.debug("#anousAPI login request - send");
        var result = post(this.apiHost + '/user/info', {token : token}, success, fail);

        function success (response) {
          $log.debug("#anousAPI login request - success : "+response);
          toastr.success("You are now connected!");
          deferred.resolve(response);
          
        }

        function fail(error) {
          $log.debug("#anousAPI login request - request error: "+error);
          toastr.error("Connection failed! \n \n"+error.data);
          deferred.reject(error);
        }
        return deferred.promise;
      },
      checkToken : function (username, token) {
        var deferred = $q.defer();
        $log.debug("#anousAPI checkToken request - send - username: "+username+" token : "+token);
        var result = post(this.apiHost + '/user/checktoken', {username:username, token : token}, success, fail);

        function success (response) {
          $log.debug("#anousAPI checkToken request - success : "+response.data.validity);
          deferred.resolve(response.data);
          
        }

        function fail(error) {
          $log.debug("#anousAPI checkToken request - request error: "+error);
          deferred.reject(error);
        }
        return deferred.promise;
      }

    };
    return AnousAPI;

    /******************
    * LOW LEVEL
    ******************/
    function post (url,data,success,fail){
      return $http({
        url: url,
        method: "POST",
        data: data,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        }
      })
      .then(success)
      .catch(fail);
    }

  }
})();
