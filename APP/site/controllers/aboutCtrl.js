(function() {
	angular
		.module("portfolioApp")
		.controller('aboutCtrl', aboutCtrl);

		function aboutCtrl(){
			this.title = "About Me";
			console.log("my biography")
		}
})();