(function() {
  'use strict';

  angular
    .module('anous')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {
    /*
    $routeProvider

      .when("/forbidden", {
        
      })

      .when("/entry", {
        templateUrl: 'app/entry/entry.html',
        resolve: {
          access: ["access", function(access) { return access.isAnonymous(); }]
        }
      })

      .when("/home", {
        templateUrl: 'app/main/main.html',
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })

      .when("/admin", {
    
        resolve: {
          access: ["access", function(access) { return access.hasRole("ADMIN"); }]
        }
      })

      .otherwise({
        redirectTo: '/home'
      });
*/
  
    $urlRouterProvider.otherwise("/home");

    $stateProvider

      /***********************************
      *  VISITOR
      ************************************/
      .state('visitor', {
        url: "/signin",
        views: {
          "page": { templateUrl: "app/entry/entry.html"},
          "container1@visitor": { template: "<my-maintenance/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAnonymous(); }]
        }
      })

      /***********************************
      *  USER
      ************************************/
      .state('user', {
        url: "/home",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@user": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('offresLocation', {
        url: "/offres/location",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@offresLocation": { template: '<div class="h2 text-center color2">Offres de locations</div>'},
          "container2@offresLocation": { template: "<my-announce-filter/>"},
          "container3@offresLocation": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('offresVente', {
        url: "/offres/vente",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@offresVente": { template: '<div class="h2 text-center color2">Offres de ventes</div>'},
          "container2@offresVente": { template: "<my-announce-filter/>"},
          "container3@offresVente": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('offresVacances', {
        url: "/offres/vacances",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@offresVacances": { template: '<div class="h2 text-center color2">Offres de vacances</div>'},
          "container2@offresVacances": { template: "<my-announce-filter/>"},
          "container3@offresVacances": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('offresEchange', {
        url: "/offres/echange",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@offresEchange": { template: '<div class="h2 text-center color2">Offres d\'échange</div>'},
          "container2@offresEchange": { template: "<my-announce-filter/>"},
          "container3@offresEchange": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('offresConstruction', {
        url: "/offres/construction",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@offresConstruction": { template: '<div class="h2 text-center color2">Offres de construction</div>'},
          "container2@offresConstruction": { template: "<my-announce-filter/>"},
          "container3@offresConstruction": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('offresEntretien', {
        url: "/offres/entretien",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@offresEntretien": { template: '<div class="h2 text-center color2">Offres d\'entretien</div>'},
          "container2@offresEntretien": { template: "<my-announce-filter/>"},
          "container3@offresEntretien": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })

      .state('offresDecoration', {
        url: "/offres/decoration",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@offresDecoration": { template: '<div class="h2 text-center color2">Offres de décorations</div>'},
          "container2@offresDecoration": { template: "<my-announce-filter/>"},
          "container3@offresDecoration": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })

      .state('offresService', {
        url: "/offres/service",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@offresService": { template: '<div class="h2 text-center color2">Offres de services</div>'},
          "container2@offresService": { template: "<my-announce-filter/>"},
          "container3@offresService": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })

      .state('demandesLocation', {
        url: "/demandes/location",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@demandesLocation": { template: '<div class="h2 text-center color3">Demandes de locations</div>'},
          "container2@demandesLocation": { template: "<my-announce-filter/>"},
          "container3@demandesLocation": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })

      .state('demandesVente', {
        url: "/demandes/vente",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@demandesVente": { template: '<div class="h2 text-center color3">Demandes de ventes</div>'},
          "container2@demandesVente": { template: "<my-announce-filter/>"},
          "container3@demandesVente": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })

      .state('demandesVacance', {
        url: "/demandes/vacance",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@demandesVacance": { template: '<div class="h2 text-center color3">Demandes de vacance</div>'},
          "container2@demandesVacance": { template: "<my-announce-filter/>"},
          "container3@demandesVacance": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })

      .state('demandesEchange', {
        url: "/demandes/echange",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@demandesEchange": { template: '<div class="h2 text-center color3">Demandes d\'échange</div>'},
          "container2@demandesEchange": { template: "<my-announce-filter/>"},
          "container3@demandesEchange": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })

      .state('demandesConstruction', {
        url: "/demandes/construction",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@demandesConstruction": { template: '<div class="h2 text-center color3">Demandes de construction</div>'},
          "container2@demandesConstruction": { template: "<my-announce-filter/>"},
          "container3@demandesConstruction": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('demandesEntretien', {
        url: "/demandes/entretien",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@demandesEntretien": { template: '<div class="h2 text-center color3">Demandes d\'entretien</div>'},
          "container2@demandesEntretien": { template: "<my-announce-filter/>"},
          "container3@demandesEntretien": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('demandesDecoration', {
        url: "/demandes/decoration",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@demandesDecoration": { template: '<div class="h2 text-center color3">Demandes de décoration</div>'},
          "container2@demandesDecoration": { template: "<my-announce-filter/>"},
          "container3@demandesDecoration": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('demandesService', {
        url: "/demandes/service",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@demandesService": { template: '<div class="h2 text-center color3">Demandes de services</div>'},
          "container2@demandesService": { template: "<my-announce-filter/>"},
          "container3@demandesService": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('conseilsLocation', {
        url: "/conseils/location",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@conseilsLocation": { template: '<div class="h2 text-center color4">Conseils de location</div>'},
          "container2@conseilsLocation": { template: "<my-announce-filter/>"},
          "container3@conseilsLocation": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      .state('conseilsVente', {
        url: "/conseils/vente",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@conseilsVente": { template: '<div class="h2 text-center color4">Conseils de vente</div>'},
          "container2@conseilsVente": { template: "<my-announce-filter/>"},
          "container3@conseilsVente": { template: "<my-announce-preview/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })
      /***********************************
      *  TOOL
      ************************************/   
      .state('announceCreation', {
        url: "/annonce/creation",
        views: {
          "page": { templateUrl: "app/main/main.html"},
          "container1@announceCreation": { template: '<div class="h2 text-center color1">Créer une nouvelle annonce</div>'},
          "container2@announceCreation": { template: "<my-announce-creator/>"}
        },
        resolve: {
          access: ["access", function(access) { return access.isAuthenticated(); }]
        }
      })

      /***********************************
      *  ADMIN
      ************************************/         
      .state('admin', {
        url: "/admin",
        resolve: {
          access: ["access", function(access) { return access.hasRole("ADMIN"); }]
        }
      })



      /***********************************
      *  BAD GUYS
      ************************************/        
      .state('forbidden', {
        url: "/forbidden"
      });

  }
})();
