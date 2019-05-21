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

    function estimationController (storiesService, userService, $scope) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.storiesToEstimate;

        $ctrl.isAdmin = false;

        //////////////////////////////
        
        function $onInit () {

            $ctrl.storiesToEstimate = storiesService.getStories();

            if(userService.isAdmin(userService.getUser())) {
                $ctrl.isAdmin = true;
            } else {
                $ctrl.isAdmin = false;
            }

        }

    }

})();
