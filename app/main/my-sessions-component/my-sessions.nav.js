(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(mySessionsRoute);

    function mySessionsRoute ($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var mySessions = {
            name: "mySessions",
            url: "/mysessions",
            component: "mySessionsComponent"
        }
               
        $stateProvider.state(mySessions);
        $urlRouterProvider.otherwise('/');
    }

})();