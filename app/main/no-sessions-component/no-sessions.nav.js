(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(nosessionsRoute);

    function nosessionsRoute  ($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var noSessions = {
            name: "noSessions",
            url: "/nosessions",
            component: "noSessionsComponent"
        }
               
        $stateProvider.state(noSessions);
        $urlRouterProvider.otherwise('/');
    }

})();