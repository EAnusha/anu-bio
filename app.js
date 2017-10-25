(function() {
	var app = angular.module('app',['ngRoute']);

	var routeConfig = function($routeProvider){
    	$routeProvider
    	.when("/",{templateUrl:"main.html",controller:"MainController"})
    	.otherwise({redirectTo:"/"});
  	}
	
	app.config(routeConfig);
  
}());