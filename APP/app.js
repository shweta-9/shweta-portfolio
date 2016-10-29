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

				.state('this-is-not-a-toy', {
					url: "/this-is-not-a-toy",
	  				templateUrl: "site/projects/this-is-not-a-toy.html", 				
				})

				.state('dcrypt-blog', {
					url: "/dcrypt-blog",
	  				templateUrl: "site/projects/dcrypt-blog.html", 				
				})

				.state('brassaii-catering-brochure', {
					url: "/brassaii-catering-brochure",
	  				templateUrl: "site/projects/brassaii-catering-brochure.html", 				
				})

				.state('jersey-milk-chocolate', {
					url: "/jersey-milk-chocolate",
	  				templateUrl: "site/projects/jersey-milk-chocolate.html", 				
				})				

				.state('drowned citizens', {
					url: "/drowned-citizens",
	  				templateUrl: "site/projects/drowned-citizens.html", 				
				})

				.state('printmaking', {
					url: "/printmaking",
	  				templateUrl: "site/projects/printmaking.html", 				
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




