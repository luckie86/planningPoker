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

    function estimationController () {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();