var BioController = function($scope) {
	
	$scope.intro = "I'm Anusha.";
	$scope.introTag = "An aspriring web developer.";
    $scope.shortBio = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is to excel in Front End web development. Currently focusing on learning Angular framework";
    $scope.showProfileContent = false;
	$scope.myProfile = function(){
		    $scope.showProfileContent = true;
	};

};

app.controller("BioController",BioController);

/*

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

app.controller("BioController",BioController);
*/
//module.exports = MainController;
//to excel in Front End web development. Currently focusing on learning Angular framework.."