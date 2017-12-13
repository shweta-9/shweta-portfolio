(function() {
	angular
		.module("portfolio2App")
		.controller('projectCtrl', projectCtrl);

		function projectCtrl(){
			this.title = "Projects";
			console.log("this project")
		}
})();