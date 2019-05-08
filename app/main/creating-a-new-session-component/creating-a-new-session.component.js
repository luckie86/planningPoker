(function() {
    'use strict';

    var creatingANewSessionComponent = {
        bindings: {
        },
        templateUrl: 'app/main/creating-a-new-session-component/creating-a-new-session.html',
        controller: creatingANewSessionController 
    };

    angular
        .module('MainModule')
        .component('creatingANewSessionComponent', creatingANewSessionComponent);

    function creatingANewSessionController (webSocketService, userService, $state) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.userName = userService.getUser();

        $ctrl.sessionScale = [{
            id: 1,
            label: 'Fibonacci',
            subItem: { name: 'Fibonacci' }
        }, {
            id: 2,
            label: 'T-Shirt',
            subItem: { name: 'T-Shirt' }
        }, {
            id: 3,
            label: 'Gamer',
            subItem: { name: 'Gamer' }
        }];

        $ctrl.addUserStory = addUserStory;
        
        //////////////////////////////
        
        function $onInit () {
            
            webSocketService.getSocket().addEventListener("message", function (event) {
                var parsed = JSON.parse(event.data);   
                if(parsed.command === "create session") {
                    $state.go("mySessions");
                }
            })    
        }

        function addUserStory () {

            webSocketService.send({ command: "create session", payload: {userName: $ctrl.userName, sessionName: $ctrl.sessionName, selected: $ctrl.selected.label}});
        }
    
    }

})();
