var MainController = function($scope) {
	$scope.currentState = "This is MainController";
};


var Description = function($scope){
 $scope.desc = "This is about me ....<span><a href="">more</a></span>"
};

app.controller("MainController",MainController);
//module.exports = MainController;

