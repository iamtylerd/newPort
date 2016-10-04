'use strict';

app.controller('HomeCtrl', function($scope, $location, $rootScope, $anchorScroll){

	$scope.projectFeatures = 'Click on an image to learn more about the project'

$scope.projects = [{
		"name": "Blogular",
		"img": "app/assets/capstone.jpg",
		"description": "Full CMS with an admin, CRUD using Firebase, storage bucket, and customizable CSS",
		"keyFeatures": "Firebase, Angular, Google Auth, Sass, JavaScript",
		"github": "https://github.com/iamtylerd/capstone-blog",
		"deployed": "http://www.jttravels.co",
	},
	{
		"name": "Dungeons and Deadlifts",
		"img": "app/assets/dungeons.png",
		"description": "A fitness / gaming blog I built using Wordpress that I customized",
		"keyFeatures": "Wordpress, jQuery, JavaScript",
		"deployed": "http://www.dungeonsanddeadlifts.com",
	},
	{
		"name": "Slack Clone",
		"img": "app/assets/group-slack-clone.png",
		"description": "A slack clone that holds a JSON file of data.  The messages can be customized and add/deletd",
		"keyFeatures": "JSON, IIFE",
		"github": "https://github.com/iamtylerd/spa-group-chatty-git-clone-slack",
	},
	{
		"name": "Gauntlet",
		"img": "app/assets/group-gauntlet.png",
		"description": "A game that focues on prototypal inheritance.  Every class is dependent on the race and weapons are dependent on class.",
		"keyFeatures": "Browserify, lodash",
		"github": "https://github.com/iamtylerd/gauntlet-team-decapitation",
	},
	{
		"name": "Terminal calendar built with Node",
		"img": "app/assets/node-cal.png",
		"description": "A calendar that mimics the node cal.  This was built with the testing first idea",
		"keyFeatures": "Node, Chai, Mocha, Istanbul",
		"github": "https://github.com/iamtylerd/node-cal-zeller-can-kiss-my-ass",
	},
	{
		"name": "Twitch Bot",
		"img": "app/assets/twitch-bot.png",
		"description": "A bot for a friend that takes commands to return a chat in twitch.",
		"keyFeatures": "Node, tmi.js",
		"github": "https://github.com/iamtylerd/Twitch",
		"deployed": "https://www.twitch.tv/edonk",
	}]

	$scope.deployedTrue = () => {
		if ($scope.projects['deployed']) {
			return true
		} else {
			return false
		}
	}

	$scope.githubTrue = () => {
		if ($scope.projects['github']) {
			return true
		} else {
			return false
		}
	}

	$scope.displayInfo = (project) => {
		$scope.projectDeployedLink = null;
		$scope.projectGithubLink = null;
		$scope.deployed = null;
		$scope.github = null;
		console.log(project)
		$scope.projectName = project.name
		$scope.projectDescription = project.description
		$scope.projectFeatures = `Key Features: ${project.keyFeatures}`
		if (project.deployed) {
			$scope.projectDeployedLink = project.deployed
			$scope.deployed = 'View Live'
		}
		if (project.github) {
			$scope.projectGithubLink = project.github
			$scope.github = 'View Code on Github'
		}
	}

	 $rootScope.scrollTo = function(id) {
    var old = $location.hash();
    $location.hash(id);
    $anchorScroll();
    //reset to old to keep any additional routing logic from kicking in
    $location.hash(old);
   }


});
