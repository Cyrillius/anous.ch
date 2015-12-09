(function() {
  'use strict';

  angular
    .module('anous')
    .factory('userProfile', userProfile);

  /** @ngInject */
  function userProfile($q, $log, localStorageService,anousAPI) {

    var User = {
      info : { 
        "username": null,
        "firstname": null,
        "lastname": null,
        "email": null,
        "roles": null,
        "token": null
      },
      fetchLocal: function(){
        User.info = localStorageService.get("user.info");
      },
      removeLocal: function(){
        localStorageService.remove("user.info");
        User.info["username"] = null;
        User.info["firstname"] = null;
        User.info["lastname"] =  null;
        User.info["email"] =  null;
        User.info["roles"] = null;
        User.info["token"] =  null;

      },
      login:function(username,password,success,fail){
        anousAPI.login(username,password).then(
          function(response){
            User.info = response;
            localStorageService.set("user.info",User.info);
            $log.debug("#userProfile - login - saved user info in local storage");
            $log.debug(localStorageService.get("user.info"));
            if(angular.isDefined(success))
              success(response);
          },
          function(error){
            if(angular.isDefined(fail))
              fail(error);
          }
        );
      },
      getFirstname: function(){
        //  Create a deferred operation.
        var deferred = $q.defer();
        if(self.name !== null) {
          //from the cache
          deferred.resolve(User.firstname);
        }
        else {
          if (localStorageService.get("user.firstname") !== null) {
            deferred.resolve(localStorageService.get("user.firstname"));
          }
          else {
            anousAPI.getUserInfo().then(
              function(response){deferred.resolve(response.firstname)},
              function(error){deferred.reject(error)}
            );
          }
        }
        return deferred.promise;
      },
      getLastname: function(){
        //  Create a deferred operation.
        var deferred = $q.defer();
        if(self.name !== null) {
          //from the cache
          deferred.resolve(User.lastname);
        }
        else {
          if (localStorageService.get("user.lastname") !== null) {
            deferred.resolve(localStorageService.get("user.lastname"));
          }
          else {
            anousAPI.getUserInfo().then(
              function(response){deferred.resolve(response.lastname)},
              function(error){deferred.reject(error)}
            );
          }
        }
        return deferred.promise;
      },
      getEmail: function(){
        //  Create a deferred operation.
        var deferred = $q.defer();
        if(self.name !== null) {
          //from the cache
          deferred.resolve(User.email);
        }
        else {
          if (localStorageService.get("user.email") !== null) {
            deferred.resolve(localStorageService.get("user.email"));
          }
          else {
            anousAPI.getUserInfo().then(
              function(response){deferred.resolve(response.email)},
              function(error){deferred.reject(error)}
            );
          }
        }
        return deferred.promise;
      },
      getRoles: function(){
        //  Create a deferred operation.
        var deferred = $q.defer();
        if(self.name !== null) {
          //from the cache
          deferred.resolve(User.roles);
        }
        else {
          if (localStorageService.get("user.roles") !== null) {
            deferred.resolve(localStorageService.get("user.roles"));
          }
          else {
            anousAPI.getUserInfo().then(
              function(response){deferred.resolve(response.roles)},
              function(error){deferred.reject(error)}
            );
          }
        }
        return deferred.promise;
      },
      getToken: function(){
        //  Create a deferred operation.
        var deferred = $q.defer();
        if(self.name !== null) {
          //from the cache
          deferred.resolve(User.token);
        }
        else {
          if (localStorageService.get("user.token") !== null) {
            deferred.resolve(localStorageService.get("user.token"));
          }
          else {
            deferred.reject();
          }
        }
        return deferred.promise;
      },

      checkToken: function(){
        $log.debug("#userProfile - checktoken");
        //  Create a deferred operation.
        var deferred = $q.defer();
        if(User.info['token'] !== null && User.info['username'] !== null) {
          $log.debug("#userProfile - checktoken - cache tocken username: "+User.info['username']+" token: "+User.info['token']);
          //------------ API send request -------------------------------------
          anousAPI.checkToken(User.info['username'], User.info['token']).then(
            //#success
            function(response){ 
              if(response.validity == true){
                deferred.resolve();
              }
              else{
                User.removeLocal();
                deferred.reject();
              }
            },
            //#fail
            function(){
              deferred.reject();
            }
          );
          //------------------------------------------------------------------------
        }
        else {
          var local = localStorageService.get("user.info");
          if (local !== null) {
            $log.debug("#userProfile - checktoken - localstorage token");
            //------------ API send request -------------------------------------
            anousAPI.checkToken(local.username,local.token).then(
              //#success
              function(response){
                if(response.validity ==true){
                  User.fetchLocal(); 
                  deferred.resolve();
                }
                else{
                  User.removeLocal(); 
                  deferred.reject();
                }
              },
              //#fail
              function(){
                deferred.reject();
              }
            );
            //------------------------------------------------------------------------
          }
          else {
            $log.debug("#userProfile - checktoken - no token");
            deferred.reject();
          }
        }
        return deferred.promise;
      },

      hasRole: function(role) {
        User.getRoles().then(
          function(roles){return roles.indexOf(role) >= 0;},
          function(){return false;}
        );
      },
      hasAnyRole: function(droles) {
        User.getRoles().then(
          function(roles){return !!droles.filter(function(role) {
            return roles.indexOf(role) >= 0;
          }).length},
          function(){return false}
        );
      },
      isAnonymous: function(success,fail) {
        User.checkToken().then(fail,success);

      },
      isAuthenticated: function(success,fail) {
        User.checkToken().then(success,fail);     
      }
    }

    return User;
  }
  

})();



