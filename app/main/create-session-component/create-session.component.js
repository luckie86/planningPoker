(function() {
    'use strict';

    var createSessionComponent = {
        bindings: {
        },
        templateUrl: 'app/main/create-session-component/create-session.html',
        controller: createSessionController 
    };

    angular
        .module('MainModule')
        .component('createSessionComponent', createSessionComponent);

    function createSessionController (webSocketService, userService, $state) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.createSession = createSession;

        $ctrl.userName = userService.getUser();

        //////////////////////////////
        
        function $onInit () {
            
            webSocketService.getSocket().addEventListener("message", function (event) {
                var parsed = JSON.parse(event.data);   
                if(parsed.command === "create session") {
                    $state.go("creatingANewSession");
                }
            })       
        }

        function createSession () {
                
            webSocketService.send({ command: "create session", payload: { username : $ctrl.userName}});
        }

    }

})();
