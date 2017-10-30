var app = angular.module('app',['ngRoute']);

(function() {

	var routeConfig = function($routeProvider){
    	$routeProvider
    	.when("/main",{templateUrl:"index.html"})
    	.when("/bio",{templateUrl:"/pages/bio.html"})
    	.when("/apps",{templateUrl:"/pages/apps.html"})
    	.when("/helpfullinks",{templateUrl:"/pages/helpfullinks.html"})
    	.when("/blog",{templateUrl:"/pages/blog.html"})
    	.otherwise({redirectTo:"/bio"});
  	}
	
	app.config(routeConfig);

//41
}());