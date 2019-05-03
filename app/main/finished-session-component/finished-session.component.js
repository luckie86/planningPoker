(function() {
    'use strict';

    var finishedSessionComponent = {
        bindings: {
        },
        templateUrl: 'app/main/finished-session-component/finished-session.html',
        controller: finishedSessionController
    };

    angular
        .module('MainModule')
        .component('finishedSessionComponent', finishedSessionComponent);

    function finishedSessionController () {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();