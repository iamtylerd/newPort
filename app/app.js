'use strict';

const app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMdIcons'])


app.config(function($routeProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        }).
        otherwise('/');
});
