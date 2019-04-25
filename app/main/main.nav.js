(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(mainRoute);

    function mainRoute($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var main = {
            name: "main",
            url: "/main",
            component: "mainComponent"
        }
               
        $stateProvider.state(main);
        $urlRouterProvider.otherwise('/');
    }

})();