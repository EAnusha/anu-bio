var app = angular.module('app',['ngRoute']);

(function() {

	var routeConfig = function($routeProvider){
    	$routeProvider
    	.when("/bio",{templateUrl:"/pages/bio.html"})
    	.otherwise({redirectTo:"/bio"});
  	}
	
	app.config(routeConfig);
	app.controller("BioController",BioController);

	//33
  
}());