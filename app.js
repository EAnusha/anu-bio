var app = angular.module('app',['ngRoute']);

(function() {

	var routeConfig = function($routeProvider){
    	$routeProvider
    	.when("/main",{templateUrl:"/pages/main.html"})
    	.otherwise({redirectTo:"/main"});
  	}
	
	app.config(routeConfig);
	//8
  
}());