(function() {
	
	angular 
		.module("portfolioApp", ['ui.router']);

	angular
		.module('portfolioApp')
		.config(function($stateProvider,$urlRouterProvider) {
		
        
			$stateProvider
				.state("landing", {
					url: "/",
					views : {
						"" : { templateUrl: "site/partials/landing.html" },
						"projects@landing" : { templateUrl: "site/partials/work.html" },
					}
				})

				.state('about', {
					url: "/about",
	  				templateUrl: "site/partials/about.html",  				
				})			

				.state('projects', {
					url: "/projects",
	  				views : {
	  					"" : { 
	  						abstract:true, 
	  						templateUrl: "site/partials/work.html" 
	  					},	
	  				}
	  			})

				.state('one', {
					url: "/one",
	  				templateUrl: "site/projects/one.html", 				
				})

				.state('two', {
					url: "/two",
	  				templateUrl: "site/projects/two.html", 				
				});	

				$urlRouterProvider.otherwise("/");
		})
		
		// .run(function($rootScope, $state, $stateParams){
		// 	$rootScope.$on('$stateChangeSuccess', function() {
		// 	   document.body.scrollTop = document.documentElement.scrollTop = 0;
		// 	});
		// })

		.run(function($rootScope, $state, $stateParams){
		  $rootScope.$state = $state;
		  $rootScope.$stateParams = $stateParams;
		  $rootScope.$on('$stateChangeSuccess', function() {
		    document.body.scrollTop = document.documentElement.scrollTop = 0;
		  }); 
		}) 
})();













// (function() {
	
// 	angular 
// 		.module("portfolioApp", ['ui.router']);

// 	angular
// 		.module('portfolioApp')
// 		.config(function($stateProvider,$urlRouterProvider) {
		
        
// 			$stateProvider
// 				.state("landing", {
// 					url: "/",
// 					views : {
// 						"" : { templateUrl: "site/partials/landing.html" },
// 						"projects@landing" : { templateUrl: "site/partials/work.html" },
// 					}
// 				})

// 				.state('about', {
// 					url: "/about",
// 	  				templateUrl: "site/partials/about.html",  				
// 				})			

// 				.state('projects', {
// 					url: "/projects",
// 					templateUrl: "site/partials/work.html",
// 				})

// 				.state('projects.one', {
// 					url: "/one",
// 	  				templateUrl: "site/projects/one.html", 				
// 				})		



// 				$urlRouterProvider.otherwise("/");
// 		})

// })();




