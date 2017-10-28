var BioController = function($scope) {
	
	$scope.desc = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is ...";
	currentBioState= "less";

	$scope.bioClickMore = function(){
      $scope.desc = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is to excel in Front End web development. Currently focusing on learning Angular framework";
      currentBioState= "more"
	};

	$scope.bioClickLess = function(){
      $scope.desc = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is ...";
      currentBioState= "less"
	};

	$scope.isHide = function(clickAction){
		if(currentBioState!=clickAction) {
			return false;
		}
		return true;
	}
};

<<<<<<< HEAD
=======

app.controller("BioController",BioController);



>>>>>>> dc59288462d5f5ec30787e24aad43a7f4580468b


//module.exports = MainController;
//to excel in Front End web development. Currently focusing on learning Angular framework.."