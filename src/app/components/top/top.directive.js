(function() {
  'use strict';

  angular
    .module('anous')
    .directive('myTop', myTop);

  /** @ngInject */
  function myTop() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/top/top.html',
      controller: TopController,
      controllerAs: 'topCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TopController($log, $state, userProfile) {

      var topCtrl = this;

      topCtrl.user = {
        username:null,
        password:null
      }

      topCtrl.userinfo= userProfile.info;

      topCtrl.authenticated = function(){
        $log.debug("#TopController - check if authenticated");
        $log.debug(userProfile);
        if (userProfile.info.token !== null){
          return true;
        } 
        else{
          return false;
        } 
      }; 

      topCtrl.disconnect = function(){
        $log.debug("#TopController - disconnect user");
        userProfile.removeLocal();
        $state.go('visitor');

      }; 

      topCtrl.login = function (){
          $log.debug("#TopController - login request username: "+topCtrl.user.username+" password: "+topCtrl.user.password);
          userProfile.login(topCtrl.user.username,topCtrl.user.password,function(){$state.go('user');}); 
      };

    }
  }

})();
