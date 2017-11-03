var ProfileController = function($scope) {
	
	$scope.aboutMeHeader = "ABOUT ME"
    $scope.aboutMe = "I am Anusha, an aspiring Web/Front-End developer. My passion is to excel in creating and building "+
    "web applications with focus on code architecture, modularity and plugability and derive easy maintenance and best "+
    "user experience."  

    $scope.eduHeader = "EDUCATION"
    $scope.edu = [{
    	degree : "Master of Science in Information Systems (MSIS)",
    	college : "La Roche College, Pittsburgh",
    	thesis : "Automated Social Engineering"
    },
    {
    	degree : "Post Graduate Specialization in Software Development",
    	college : "International Institute of Information Technology (IIIT), Bangalore, India",
    	thesis : ""
    },
    {
    	degree : "Bachelor of Technology in Electronics and Instrumentation",
    	college : "Jawaharlal Nehru Technological University (JNTU), Hyderabad, India",
    	thesis : ""
    }]



    $scope.skillsHeader = "SKILLS"
    $scope.skills = [{
    	section : "Web Development",
    	info : "HTML5, CSS3, JavaScript, AJAX, AngularJS 1.6, JQuery",
    },
    {
    	section : "Programming",
    	info : "JAVA, SQL",
    },
    {
    	section : "IDEs",
    	info : "Eclipse 3.5/3.6, Sublime text 3, Brackets, Oracle SQL Developer",
    },
    {
    	section : "Version Control",
    	info : "Git, Perforce",
    },{
    	section : "Other Tools",
    	info : "HP Server Automation Client, HP Service Management (ALM), Microsoft Visio 2010/2016, Microsoft Project 2016, MS-Office 2010/2016",
    }] 
   
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