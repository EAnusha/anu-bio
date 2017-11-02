var ProfileController = function($scope) {
	
    $scope.aboutMe = "I am Anusha, an aspiring Web/Front-End developer. My passion is to excel in creating and building "+
    "web applications with focus on code architecture, modularity and plugability and derive easy maintenance and best "+
    "user experience."   

};

app.controller("ProfileController",ProfileController);

















 /*$scope.hideProfileContent = true;
	$scope.myProfile = function(){
		    $scope.hideProfileContent = false;
	};*/


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