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

    function estimationController (storiesService, userService, sessionService, $scope) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.storiesToEstimate;

        $ctrl.isAdmin = false;

        $ctrl.arrayOfSessions = [];

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

    }

})();
