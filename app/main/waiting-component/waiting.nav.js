(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(waitingRoute);

    function waitingRoute ($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var waiting = {
            name: "waiting",
            url: "/waiting",
            component: "waitingComponent"
        }
               
        $stateProvider.state(waiting);
        $urlRouterProvider.otherwise('/');
    }

})();