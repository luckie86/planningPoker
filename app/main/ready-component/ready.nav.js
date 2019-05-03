(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(readyRoute);

    function readyRoute ($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var ready = {
            name: "ready",
            url: "/ready",
            component: "readyComponent"
        }
               
        $stateProvider.state(ready);
        $urlRouterProvider.otherwise('/');
    }

})();