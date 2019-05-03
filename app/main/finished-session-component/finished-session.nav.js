(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(finishedSessionRoute);

    function finishedSessionRoute ($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var finishedSession = {
            name: "finishedSession",
            url: "/finished-session",
            component: "finishedSessionComponent"
        }
               
        $stateProvider.state(finishedSession);
        $urlRouterProvider.otherwise('/');
    }

})();