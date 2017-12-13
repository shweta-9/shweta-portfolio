(function() {
	angular
		.module("portfolio2App")
		.controller('aboutCtrl', aboutCtrl);

		function aboutCtrl(){
			this.title = "About";
			console.log("my biography")
		}
})();