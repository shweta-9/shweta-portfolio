(function() {
	
	angular 
		.module("portfolio2App", ['ui.router']);

	angular
		.module('portfolio2App')
		.config(function($stateProvider,$urlRouterProvider) {
		
        
			$stateProvider
				.state("work", {
					url: "/",
					views : {
						"" : { templateUrl: "site/partials/work.html" },
						"projects@landing" : { templateUrl: "site/partials/work.html" },
					}
				})

				.state('about', {
					url: "/about",
	  				templateUrl: "site/partials/about.html",  				
				})			

				.state('contact', {
					url: "/contact",
	  				templateUrl: "site/partials/contact.html",  				
				})

				.state('this-is-not-a-toy', {
					url: "/this-is-not-a-toy",
	  				templateUrl: "site/projects/this-is-not-a-toy.html", 				
				})

				.state('decode-blog', {
					url: "/decode-blog",
	  				templateUrl: "site/projects/decode-blog.html", 				
				})

				.state('brassaii-catering-brochure', {
					url: "/brassaii-catering-brochure",
	  				templateUrl: "site/projects/brassaii-catering-brochure.html", 				
				})

				.state('jersey-milk-chocolate', {
					url: "/jersey-milk-chocolate",
	  				templateUrl: "site/projects/jersey-milk-chocolate.html", 				
				})				

				.state('drowned-citizens', {
					url: "/drowned-citizens",
	  				templateUrl: "site/projects/drowned-citizens.html", 				
				})

				.state('deji-cards', {
					url: "/deji-cards",
	  				templateUrl: "site/projects/deji-cards.html", 				
				})

				.state('eyeris-tools', {
					url: "/eyeris-tools",
	  				templateUrl: "site/projects/eyeris-tools.html", 				
				})

				.state('emotional-drugs', {
					url: "/emotional-drugs",
	  				templateUrl: "site/projects/emotional-drugs.html", 				
				})

				.state('shway-branding', {
					url: "/shway-branding",
	  				templateUrl: "site/projects/shway-branding.html", 				
				})

				.state('thesis-magazine', {
					url: "/thesis-magazine",
	  				templateUrl: "site/projects/thesis-magazine.html", 				
				})

				.state('stories', {
					url: "/stories",
	  				templateUrl: "site/projects/stories.html", 				
				});

				$urlRouterProvider.otherwise("/");
		})

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




