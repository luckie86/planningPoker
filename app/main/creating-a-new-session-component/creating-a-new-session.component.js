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
        }, {
            id: 2,
            label: 'T-Shirt',
        }, {
            id: 3,
            label: 'Gamer',
        }];

        $ctrl.addUserStory = addUserStory;

        $ctrl.arrayOfSessions = [];

        $ctrl.deleteUserStory = deleteUserStory;

        $ctrl.startSession = startSession;
        
        //////////////////////////////
        
        function $onInit () {
            webSocketService.getSocket().addEventListener('message', function (event) {
                
            })
        }

        function addUserStory () {
                        
            webSocketService.send(
                { command: "creating_session", 
                payload: {
                    userName: $ctrl.userName, 
                    sessionName: $ctrl.sessionName, 
                    selected: $ctrl.selected.label,
                    status : "Draft"
                }
            });

            $ctrl.arrayOfSessions.push({
                userName: $ctrl.userName, 
                sessionName: $ctrl.sessionName, 
                selected: $ctrl.selected.label,
                status : "Draft" 
            });
        }

        function deleteUserStory (id) {
            $ctrl.arrayOfSessions.splice(id,1);
        }
    
        function startSession () {

            webSocketService.send(
                { command: "create_session", 
                payload: {
                    userName: $ctrl.userName, 
                    sessionName: $ctrl.sessionName, 
                    selected: $ctrl.selected.label,
                    status : "Draft",
                    stories: $ctrl.arrayOfSessions
                }
            });
            $state.go("mySessions");
        }

     }

})();
