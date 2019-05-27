(function() {
    'use strict';

    angular
        .module('MainModule')
        .config(mainRoute);

    function mainRoute ($locationProvider, $urlRouterProvider , $stateProvider) {
        
        var available = {
            name: "availableSessions",
            url: "/available",
            component: "availableSessionsComponent"
        }

        var create = {
            name: "createSession",
            url: "/create",
            component: "createSessionComponent"
        }

        var creatingANewSession = {
            name: "creatingANewSession",
            url: "/creating-new-session",
            component: "creatingANewSessionComponent"
        }

        var estimation = {
            name: "estimation",
            url: "/estimation/{sessionId}",
            component: "estimationComponent",
            resolve: {
                sessionId: function ($transition$) {
                    return $transition$.params().sessionId;
                }
            }
        }

        var finishedSession = {
            name: "finishedSession",
            url: "/finished-session/{sessionId}",
            component: "finishedSessionComponent",
            resolve: {
                sessionId: function ($transition$) {
                    return $transition$.params().sessionId;
                }
            }
        }

        var main = {
            name: "main",
            url: "/main",
            component: "mainComponent"
        }

        var mySessions = {
            name: "mySessions",
            url: "/mysessions",
            component: "mySessionsComponent"
        }

        var noSessions = {
            name: "noSessions",
            url: "/nosessions",
            component: "noSessionsComponent"
        }

        var ready = {
            name: "ready",
            url: "/ready/{sessionId}",
            component: "readyComponent",
            resolve: {
                sessionId: function ($transition$) {
                    return $transition$.params().sessionId;
                }
            }
        }

        var waiting = {
            name: "waiting",
            url: "/waiting",
            component: "waitingComponent"
        }
               
        $stateProvider.state(waiting);    
        $stateProvider.state(ready);
        $stateProvider.state(noSessions);
        $stateProvider.state(mySessions);     
        $stateProvider.state(main);
        $stateProvider.state(finishedSession);
        $stateProvider.state(estimation);
        $stateProvider.state(creatingANewSession);      
        $stateProvider.state(create);     
        $stateProvider.state(available);
        $urlRouterProvider.otherwise('/');
    }

})();
