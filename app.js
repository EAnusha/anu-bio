(function() {
	var app = angular.module('app',['ngRoute']);

	var routeConfig = function($routeProvider){
    	$routeProvider
    	.when("/main",{templateUrl:"main.html",controller:"MainController"})
    	.otherwise({redirectTo:"/main"});
  	}
	
	app.config(routeConfig);
  
}());