(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(createSessionRoute);

    function createSessionRoute ($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var create = {
            name: "createSession",
            url: "/create",
            component: "createSessionComponent"
        }
               
        $stateProvider.state(create);
        $urlRouterProvider.otherwise('/');
    }

})();