'use strict';

app.controller('NavCtrl', function($scope, $location, $rootScope){

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
	// triggerElement: '#triggerScrolling'
        // duration: 100,  // the scene should last for a scroll distance of 100px
        offset: $(window).height()     // start this scene after scrolling for 50px
    })
    .setPin("#stickyNav") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

});
