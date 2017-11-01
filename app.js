var app = angular.module('app',['ngRoute']);

(function() {

	var routeConfig = function($routeProvider){
    	$routeProvider
        .when("/home",{templateUrl:"/pages/home.html"})
    	.when("/profile",{templateUrl:"/pages/profile.html"})
    	.when("/apps",{templateUrl:"/pages/apps.html"})
    	.when("/helpfullinks",{templateUrl:"/pages/helpfullinks.html"})
    	.when("/blog",{templateUrl:"/pages/blog.html"})
    	.otherwise({redirectTo:"/home"});
  	}
	
	app.config(routeConfig);

    $(document).ready(function(){
        /*Handle Navbar Toggle*/
        $("#myNavbarItems").find("a").click(function(){
            $("#myNavbarItems").slideToggle();
        });
    });


//41
}());