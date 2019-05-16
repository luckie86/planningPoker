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

    function estimationController (storiesService, $scope) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.storiesToEstimate;

        //////////////////////////////
        
        function $onInit () {

            $ctrl.storiesToEstimate = storiesService.getStories();

        }

    }

})();
