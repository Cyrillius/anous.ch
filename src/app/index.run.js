(function() {
  'use strict';

  angular
    .module('anous')
    .run(runBlock)
    .run(verifyAccess);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

  function verifyAccess($rootScope, access, $state, $log) {

    var verifyEvent = $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
        event.preventDefault();
        $log.debug('route change error: '+error);
        if (error == access.status.UNAUTHORIZED) {
            $state.go('visitor');
        } else if (error == access.status.FORBIDDEN) {
            $state.go('forbidden');
        }
        $rootScope.$on('$destroy', verifyEvent);
    });
  }

})();
