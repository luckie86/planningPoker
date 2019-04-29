(function() {
    'use strict';

    var noSessionsComponent = {
        bindings: {
        },
        templateUrl: 'app/main/no-sessions-component/no-sessions.html',
        controller: noSessionsController 
    };

    angular
        .module('MainModule')
        .component('noSessionsComponent', noSessionsComponent);

    function noSessionsController () {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();