(function() {
  'use strict';

  angular
    .module('anous')
    .directive('myAnnouncePreview', myAnnouncePreview);

  /** @ngInject */
  function myAnnouncePreview() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/announcePreview/announcePreview.html',
      controller: announcePreviewController,
      controllerAs: 'anprCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function announcePreviewController() {

      var anprCtrl = this;
      anprCtrl.announces = [
        {
          category: {"0":"demandes","1":"location"},
          category_name:"Demandes Location",
          image:"assets/images/maison.jpg",
          title:"BlaBla",
          description:"Slim is a PHP micro framework that helps you quickly write simple yet powerful web applications and APIs. Slim is easy to use for both beginners and professionals. Slim favors cleanliness over terseness and common cases over edge cases. Its interface is simple, intuitive, and extensively documented — both online and in the code itself. Thank you for choosing the Slim Framework for your next project. I think you're going to love it."
        },
        {
          category: {"0":"offres","1":"location"},
          category_name:"Offres Location",
          image:"assets/images/maison.jpg",
          title:"BlaBla",
          description:"Slim is a PHP micro framework that helps you quickly write simple yet powerful web applications and APIs. Slim is easy to use for both beginners and professionals. Slim favors cleanliness over terseness and common cases over edge cases. Its interface is simple, intuitive, and extensively documented — both online and in the code itself. Thank you for choosing the Slim Framework for your next project. I think you're going to love it."
        },
        {
          category: {"0":"offres","1":"location"},
          category_name:"Offres Location",
          image:"assets/images/maison.jpg",
          title:"BlaBla",
          description:"Slim is a PHP micro framework that helps you quickly write simple yet powerful web applications and APIs. Slim is easy to use for both beginners and professionals. Slim favors cleanliness over terseness and common cases over edge cases. Its interface is simple, intuitive, and extensively documented — both online and in the code itself. Thank you for choosing the Slim Framework for your next project. I think you're going to love it."
        },
        {
          category: {"0":"demandes","1":"location"},
          category_name:"Demandes Location",
          image:"assets/images/maison.jpg",
          title:"BlaBla",
          description:"Slim is a PHP micro framework that helps you quickly write simple yet powerful web applications and APIs. Slim is easy to use for both beginners and professionals. Slim favors cleanliness over terseness and common cases over edge cases. Its interface is simple, intuitive, and extensively documented — both online and in the code itself. Thank you for choosing the Slim Framework for your next project. I think you're going to love it."
        },
        {
          category: {"0":"conseils","1":"location"},
          category_name:"Conseils Location",
          image:"assets/images/maison.jpg",
          title:"BlaBla",
          description:"Slim is a PHP micro framework that helps you quickly write simple yet powerful web applications and APIs. Slim is easy to use for both beginners and professionals. Slim favors cleanliness over terseness and common cases over edge cases. Its interface is simple, intuitive, and extensively documented — both online and in the code itself. Thank you for choosing the Slim Framework for your next project. I think you're going to love it."
        }
      ];
    }

  }

})();
