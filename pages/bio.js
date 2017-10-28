var BioController = function($scope) {
	
	$scope.desc = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is";
	$scope.more = function(){
		$scope.desc = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is to excel in Front End web development. Currently focusing on learning Angular framework";
	};
};

app.controller("BioController",BioController);
//module.exports = MainController;

//to excel in Front End web development. Currently focusing on learning Angular framework.."