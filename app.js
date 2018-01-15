var app = angular.module('app',['ngRoute']);

(function() {
    /*JQUERY NOCONFLICT*/
    var $j = $.noConflict();

    /*ROUTES*/
	var routeConfig = function($routeProvider){
    	$routeProvider
        .when("/home",{templateUrl:"/pages/home.html"})
    	.when("/profile",{templateUrl:"/pages/profile.html"})
    	.when("/apps",{templateUrl:"/pages/apps.html"})
    	.when("/helpfullinks",{templateUrl:"/pages/helpfullinks.html"})
    	.when("/blog",{templateUrl:"/pages/blog.html"})
        .when("/apps/weather",{templateUrl:"/pages/weather.html"})
    	.otherwise({redirectTo:"/home"});
  	}
	
	app.config(routeConfig);


    /*NAV TOGGLE CONTROLLER*/
    var NavController = function($scope) {
        $scope.toggleNav = function() {
            $j("#myNavbarItems").slideToggle();
        };

         $scope.toggleNavUp = function() {
            $j("#myNavbarItems").slideUp();
        };
    };

    app.controller("NavController",NavController);

}());









/*COMMENTED*/
/*
    $j(document).ready(function(){
        var toggleNav = function() {
        $j("#myNavbarItems").slideToggle();
        };

        /*
        $j("#myNavbarItems").find("a").click(function(){
            $j("#myNavbarItems").slideToggle();
        });
        $j("#myNavbarHome").click(function(){
            $j("#myNavbarItems").slideToggle();
        });*/
   /* });*/

/*
    var toggleNav = function() {
        $j("#myNavbarItems").slideToggle();
    }*/