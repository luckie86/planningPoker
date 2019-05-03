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

    function readyController () {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();