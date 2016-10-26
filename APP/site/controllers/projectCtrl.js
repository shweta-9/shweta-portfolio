(function() {
	angular
		.module("portfolioApp")
		.controller('projectCtrl', projectCtrl);

		function projectCtrl(){
			this.title = "Projects";
			console.log("this project")
		}
})();