(function() {
  'use strict';

  angular
    .module('anous')
    .directive('myMaintenance', myMaintenance);

  /** @ngInject */
  function myMaintenance() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/maintenance/maintenance.html'
    };

    return directive;

  }

})();
