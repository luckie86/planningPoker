(function() {
    'use strict';

    var createSessionComponent = {
        bindings: {
        },
        templateUrl: 'app/main/create-session-component/create-session.html',
        controller: createSessionController 
    };

    angular
        .module('MainModule')
        .component('createSessionComponent', createSessionComponent);

    function createSessionController () {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();