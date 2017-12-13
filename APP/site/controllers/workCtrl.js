(function() {
	angular
		.module("portfolio2App")
		.controller("workCtrl", workCtrl);

		function workCtrl(){
			this.title = "Work";
			console.log("my work")
		}
})();