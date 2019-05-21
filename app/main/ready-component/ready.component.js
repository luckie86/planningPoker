(function() {
    'use strict';

    var readyComponent = {
        bindings: {
        },
        templateUrl: 'app/main/ready-component/ready.html',
        controller: readyController 
    };

    angular
        .module('MainModule')
        .component('readyComponent', readyComponent);

    function readyController (webSocketService, sessionService, $scope, $state) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.listOfUsers = [];

        $ctrl.listOfSessions = [];

        $ctrl.startSession = startSession;

        $ctrl.isAdmin = false;
        
        //////////////////////////////
        
        function $onInit () {
            
            webSocketService.getSocket().addEventListener('message', function (event) {
                var parsed = JSON.parse(event.data);
                if (parsed.command === "login") {
                    if(parsed.payload.isAdmin) {
                        $ctrl.listOfUsers.push({userName: parsed.payload.userName, isAdmin: true});
                        $ctrl.isAdmin = true;
                    } else {
                        $ctrl.listOfUsers.push({userName: parsed.payload.userName, isAdmin: false});
                        $ctrl.isAdmin = false;
                    }
                    $scope.$apply();
                }
            })
        }

        function startSession () {
            webSocketService.send($ctrl.listOfSessions);
            $ctrl.listOfSessions = sessionService.getSessions();
            console.log($ctrl.listOfSessions);
            $state.go("estimation", {"sessionId": $ctrl.listOfSessions[0].sessionId});
        }

    }

})();
