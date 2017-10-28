var BioController = function($scope) {
	
	var shortBio = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is";
	var fullBio = "Hello! Thanks for visiting my webpage.I am Anusha. I am a learner. My passion is to excel in Front End web development. Currently focusing on learning Angular framework";
	$scope.displayBio = shortBio;
	$scope.displayBioButton = "Show More";

	$scope.bioToggle = function() {
		if($scope.displayBio==shortBio) {
			$scope.displayBio = fullBio;
			$scope.displayBioButton = "Show Less";
		}
		else if ($scope.displayBio==fullBio) {
			$scope.displayBio = shortBio;
			$scope.displayBioButton = "Show More";
		};

	}

};

app.controller("BioController",BioController);





//module.exports = MainController;
