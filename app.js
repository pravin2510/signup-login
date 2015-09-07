(function () {
  'use strict';

  angular
    .module('Sphata', [
      'ui.validate', 
      'ui.bootstrap',
      'ngMessages',                    
      'Sphata.constants',
      'Sphata.run',
      'Sphata.routes',
      'Sphata.config',
      'Sphata.filters',
      'Sphata.directives',
      'Sphata.services',
      'Sphata.controllers',
      
    ]);

  angular
    .module('Sphata.routes', ['ui.router']);
  
  angular
  	.module('Sphata.config', []);
  
  angular
  	.module('Sphata.run', []);
  
  angular
  	.module('Sphata.constants', []);
  
  angular
  	.module('Sphata.filters', []);
  
  angular
  	.module('Sphata.directives', []);
  
  angular
  	.module('Sphata.services', []);
  
  angular
  	.module('Sphata.controllers', []);
  
})();
