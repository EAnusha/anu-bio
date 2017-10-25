(function() {
	var app = angular.module('app',['ngRoute','ngController']);

	var routeConfig = function($routeProvider){
    	$routeProvider
    	.when("/main",{templateUrl:"/pages/main.html",controller:"MainController"})
    	.otherwise({redirectTo:"/main"});
  	}
	
	app.config(routeConfig);
  
}());