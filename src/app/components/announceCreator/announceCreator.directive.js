(function() {
  'use strict';

  angular
    .module('anous')
    .directive('myAnnounceCreator', myAnnounceCreator);
  /** @ngInject */
  function myAnnounceCreator() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/announceCreator/announceCreator.html',
      controller: announceCreatorController,
      controllerAs: 'ancreaCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function announceCreatorController(marked,$http) {
      var ancreaCtrl = this;

      ancreaCtrl.initDescription = function(){
        ancreaCtrl.description_long = "# Titre 1 \n\n";                           
        ancreaCtrl.description_long += "## Titre 2 \n\n";                                                                             
        ancreaCtrl.description_long += "### Titre 3 \n\n";                                      
        ancreaCtrl.description_long += "#### Titre 4 \n\n";            
        ancreaCtrl.description_long += "##### Titre 5 \n\n";            
        ancreaCtrl.description_long += "###### Titre 6 \n\n";           
        ancreaCtrl.description_long += "[Lien](www.anous.ch)\n\n";     
        ancreaCtrl.description_long += "**Gras** \n\n";                   
        ancreaCtrl.description_long += "*Italique*  \n\n";                   
        ancreaCtrl.description_long += "* liste 1 \n\n";                 
        ancreaCtrl.description_long += "- liste 2 \n\n";                 
        ancreaCtrl.description_long += "1. liste numérotée \n\n";        
        ancreaCtrl.description_long += "> citation \n\n";                
        ancreaCtrl.description_long += "-------- ligne horizontale \n\n";          

        ancreaCtrl.previewDescription();
      };


      ancreaCtrl.previewDescription = function(){
        ancreaCtrl.markdown = marked(ancreaCtrl.description_long);
      };

      // UPLOAD Handler
      var uploadScriptUrl = 'http://files.anous.ch/index.php';
      ancreaCtrl.options = {
          url: uploadScriptUrl
      };
      ancreaCtrl.loadingFiles = true;
      $http.get(uploadScriptUrl)
      .then(
          function (response) {
              ancreaCtrl.loadingFiles = false;
              ancreaCtrl.queue = response.data.files || [];
          },
          function () {
              ancreaCtrl.loadingFiles = false;
          }
      );

      ancreaCtrl.fileState = function (file){
          if(file.url){
            return file.state;
          }
      }

      ancreaCtrl.fileDestroy = function (file){
          if(file.url){
            file.state = 'pending';
            return $http({
                url: file.deleteUrl,
                method: file.deleteType
            }).then(
                function () {
                    state = 'resolved';
                    ancreaCtrl.clear(file);
                },
                function () {
                    state = 'rejected';
                }
            );
          }
      }
      ancreaCtrl.fileCancel = function (file) {
              ancreaCtrl.clear(file);
          };

    }
  }

})();
