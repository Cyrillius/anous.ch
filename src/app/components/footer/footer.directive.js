(function() {
  'use strict';

  angular
    .module('anous')
    .directive('myFooter', myFooter);

  /** @ngInject */
  function myFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController() {

    }
  }

})();
