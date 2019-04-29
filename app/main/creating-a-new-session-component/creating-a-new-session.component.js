(function() {
    'use strict';

    var creatingANewSessionComponent = {
        bindings: {
        },
        templateUrl: 'app/main/creating-a-new-session-component/creating-a-new-session.html',
        controller: creatingANewSessionController 
    };

    angular
        .module('MainModule')
        .component('creatingANewSessionComponent', creatingANewSessionComponent);

    function creatingANewSessionController () {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();