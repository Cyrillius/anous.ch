(function() {
  'use strict';

  angular
    .module('anous')
    .config(config)
    .config(ls)
    .config(markdown)
    .config(fileUploadProvider);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

  function ls (localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }

  function markdown (markedProvider) {
    markedProvider.setOptions({gfm: true});
  }

  function fileUploadProvider ($httpProvider, fileUploadProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    fileUploadProvider.defaults.redirect = window.location.href.replace(
        /\/[^\/]*$/,
        '/cors/result.html?%s'
    );

    angular.extend(fileUploadProvider.defaults, {
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator.userAgent),
        maxFileSize: 999000,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
    });
  }

})();
