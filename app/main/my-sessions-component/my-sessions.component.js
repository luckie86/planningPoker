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

    function mySessionsController(webSocketService, $scope) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.arrayOfSessions = [];

        $ctrl.joinSession = joinSession;

        //////////////////////////////
        
        function $onInit () {

            webSocketService.getSocket().addEventListener('message', function (event) {
                var parsed = JSON.parse(event.data);   
                if(parsed.command === 'create_session') {
                    $ctrl.arrayOfSessions.push(parsed.payload);
                }
                $scope.$apply();
            })
        }

        function joinSession() {
            
            webSocketService.send({ command: "join_session", payload: {arrayOfSessions: $ctrl.arrayOfSessions}});
        }

    }

})();
