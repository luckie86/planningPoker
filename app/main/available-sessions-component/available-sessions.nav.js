(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(availableSessionsRoute);

    function availableSessionsRoute ($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var available = {
            name: "availableSessions",
            url: "/available",
            component: "availableSessionsComponent"
        }
               
        $stateProvider.state(available);
        $urlRouterProvider.otherwise('/');
    }

})();