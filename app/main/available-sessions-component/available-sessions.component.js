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

    function availableSessionsController (sessionService, $scope) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.arrayOfSessions = [];
        
        //////////////////////////////
        
        function $onInit () {
            
            $ctrl.arrayOfSessions = sessionService.getSessions();
        }

    }

})();
