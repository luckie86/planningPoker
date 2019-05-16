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

    function creatingANewSessionController (webSocketService, userService, sessionService, storiesService, $state) {
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

        $ctrl.arrayOfStories = [];
        
        $ctrl.dynamicStories = [];

        $ctrl.arrayOfSessions = [];

        $ctrl.deleteUserStory = deleteUserStory;

        $ctrl.startSession = startSession;

        $ctrl.addUserStoryContent = addUserStoryContent;
        
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
                status : "Draft",
            });

        }

        function deleteUserStory (id) {
            $ctrl.arrayOfSessions.splice(id,1);
        }
    
        function startSession () {
            var randomNumber = Math.floor(Math.random()*100);
            webSocketService.send(
                { command: "create_session", 
                payload: {
                    sessionId: randomNumber,
                    userName: $ctrl.userName, 
                    sessionName: $ctrl.sessionName, 
                    selected: $ctrl.selected.label,
                    status : "Draft",
                    stories: $ctrl.arrayOfStories
                }
            });
            $state.go("mySessions");
            sessionService.setSessions();
            storiesService.setStories();
        }


        function addUserStoryContent (index) {
            
            $ctrl.arrayOfStories.push({
                userName: $ctrl.userName, 
                sessionName: $ctrl.sessionName, 
                selected: $ctrl.selected.label,
                status : "Draft",
                storyContent: $ctrl.dynamicStories
            });
        }


     }

})();
