(function() {
  'use strict';

  angular
    .module('anous')
    .directive('myPub', myPub);

  /** @ngInject */
  function myPub() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/pub/pub.html',
      controller: PubController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function PubController() {

    }
  }

})();
