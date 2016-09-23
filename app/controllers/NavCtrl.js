'use strict';

app.controller('NavCtrl', function($scope, $location, $rootScope){

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
     offset: $(window).height()     // start this scene after scrolling for 100vh
    })
    .setPin("#stickyNav") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

});
