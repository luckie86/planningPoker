(function() {
    'use strict';

    var mySessionsComponent = {
        bindings: {
        },
        templateUrl: 'app/main/my-sessions-component/my-sessions.html',
        controller: mySessionsController
    };

    angular
        .module('MainModule')
        .component('mySessionsComponent', mySessionsComponent);

    function mySessionsController(webSocketService, sessionService, $scope) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.arrayOfSessions = [];

        $ctrl.joinSession = joinSession;

        //////////////////////////////
        
        function $onInit () {
            
            $ctrl.arrayOfSessions = sessionService.getSessions();
            console.log($ctrl.arrayOfSessions);
        }

        function joinSession() {
            
            webSocketService.send({ command: "join_session", payload: {arrayOfSessions: $ctrl.arrayOfSessions}});
        }

    }

})();
