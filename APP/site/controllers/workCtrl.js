(function() {
	angular
		.module("portfolioApp")
		.controller("workCtrl", workCtrl);

		function workCtrl(){
			this.title = "Selected Work";
			console.log("my work")
		}
})();