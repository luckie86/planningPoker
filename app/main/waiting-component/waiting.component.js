(function() {
    'use strict';

    var waitingComponent = {
        bindings: {
        },
        templateUrl: 'app/main/waiting-component/waiting.html',
        controller: waitinigController 
    };

    angular
        .module('MainModule')
        .component('waitingComponent', waitingComponent);

    function waitinigController () {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();