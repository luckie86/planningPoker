(function() {
    'use strict';

    var availableSessionsComponent = {
        bindings: {
        },
        templateUrl: 'app/main/available-sessions-component/available-sessions.html',
        controller: availableSessionsController 
    };

    angular
        .module('MainModule')
        .component('availableSessionsComponent', availableSessionsComponent);

    function availableSessionsController () {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();