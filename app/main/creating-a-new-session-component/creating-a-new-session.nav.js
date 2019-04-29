(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(creatingANewSessionRoute);

    function creatingANewSessionRoute ($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var creatingANewSession = {
            name: "creatingANewSession",
            url: "/creating-new-session",
            component: "creatingANewSessionComponent"
        }
               
        $stateProvider.state(creatingANewSession);
        $urlRouterProvider.otherwise('/');
    }

})();