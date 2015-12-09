(function() {
  'use strict';

  angular
    .module('anous')
    .directive('myAnnounceFilter', myAnnounceFilter);

  /** @ngInject */
  function myAnnounceFilter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/announceFilter/announceFilter.html',
      controller: announceFilterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function announceFilterController() {

    }
  }

})();
