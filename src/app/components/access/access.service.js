(function() {
  'use strict';

  angular
    .module('anous')
    .factory('access', access);

  /** @ngInject */
  function access($q, $log, userProfile) {




    var Access = {
      status : {
        OK: 200,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403   
      },

      hasRole : function (role) {
        $log.debug("#access - control if has role: "+role);
        var deferred = $q.defer();
        if (userProfile.hasRole(role)) {
          deferred.resolve(status.OK);
        } else if (userProfile.isAnonymous()) {
          deferred.reject(status.UNAUTHORIZED);
        } else {
          deferred.reject(status.FORBIDDEN);
        }
        return deferred.promise;
      },

      hasAnyRole : function (roles) {
        var deferred = $q.defer();
        if (userProfile.hasAnyRole(roles)) {
          $log.debug("#access - control if has roles - "+Access.status.OK);
          deferred.resolve(access.status.OK);
        } else if (userProfile.isAnonymous()) {
          $log.debug("#access - control if has roles - "+Access.status.UNAUTHORIZED);
          deferred.reject(Access.status.UNAUTHORIZED);
        } else {
          $log.debug("#access - control if has roles - "+Access.status.FORBIDDEN);
          deferred.reject(Access.status.FORBIDDEN);
        }
        return deferred.promise;
      },

      isAnonymous : function () {
        var deferred = $q.defer();
        var success = function(){
          $log.debug("#access - control if is anonymous - success ");
          deferred.resolve(Access.status.OK);
        };
        var fail = function(){
          $log.debug("#access - control if is anonymous - fail");
          deferred.reject(Access.status.FORBIDDEN);
        };
        userProfile.isAnonymous(success,fail);
        return deferred.promise;
      },

      isAuthenticated : function () {
        var deferred = $q.defer();
        var success = function(){
          $log.debug("#access - control if authenticated - success");
          deferred.resolve(Access.status.OK);
        };
        var fail = function(){
          $log.debug("#access - control if is authenticated - fail");
          deferred.reject(Access.status.UNAUTHORIZED);
        };
        userProfile.isAuthenticated(success,fail)
        return deferred.promise;
      }
    };
    return Access;

  }
})();



