(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(estimationRoute);

    function estimationRoute ($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var estimation = {
            name: "estimation",
            url: "/estimation",
            component: "estimationComponent"
        }
               
        $stateProvider.state(estimation);
        $urlRouterProvider.otherwise('/');
    }

})();