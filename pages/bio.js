var BioController = function($scope) {
	
	$scope.shortBio = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is";
	$scope.fullBio = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is to excel in Front End web development. Currently focusing on learning Angular framework";
	$scope.displayBio = shortBio;
	$scope.displayBioButton = "Show More";

	/*$scope.more = function(){
		$scope.desc = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is to excel in Front End web development. Currently focusing on learning Angular framework";
	
	$scope.less = function(){
		$scope.desc = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is";
	};
	};*/

	$scope.bioToggle = function() {
		if($scope.displayBio==$scope.shortBio) {
			$scope.displayBio = $scope.fullBio;
			$scope.displayBioButton = "Show Less";
		}
		else if ($scope.displayBio==$scope.fullBio) {
			$scope.displayBio = $scope.shortBio;
			$scope.displayBioButton = "Show More";
		};

	}
	/*
	$scope.bioClickMore = function(){
      $scope.desc = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is to excel in Front End web development. Currently focusing on learning Angular framework";
      $scope.less = "less";
	};

	$scope.bioClickLess = function(){
      $scope.desc = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is";
	};*/
};

app.controller("BioController",BioController);





//module.exports = MainController;
//to excel in Front End web development. Currently focusing on learning Angular framework.."