(function() {
    'use strict';

    var estimationComponent = {
        bindings: {
        },
        templateUrl: 'app/main/estimation-component/estimation.html',
        controller: estimationController
    };

    angular
        .module('MainModule')
        .component('estimationComponent', estimationComponent);

    function estimationController (storiesService, userService, sessionService, webSocketService, $scope) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.storiesToEstimate;

        $ctrl.isAdmin = false;

        $ctrl.arrayOfSessions = [];

        $ctrl.selectedValue = selectedValue;

        $ctrl.userInput = [];

        //////////////////////////////
        
        function $onInit () {

            $ctrl.storiesToEstimate = storiesService.getStories();
            console.log($ctrl.storiesToEstimate);

            if(userService.isAdmin(userService.getUser())) {
                $ctrl.isAdmin = true;
            } else {
                $ctrl.isAdmin = false;
            }

            $ctrl.arrayOfSessions = sessionService.getSessions();

        }

        function selectedValue(value) {
            
            $ctrl.userInput.push({ user: userService.getUser(), votes: value});
            console.log($ctrl.userInput);
            webSocketService.send({ command: "storie_voted", payload: { userName : userService.getUser(), isAdmin: userService.isAdmin(userService.getUser()), votes: $ctrl.userInput }});
        }

    }

})();
