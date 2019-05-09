(function() {
    'use strict';

    var mySessionsComponent = {
        bindings: {
        },
        templateUrl: 'app/main/my-sessions-component/my-sessions.html',
        controller: mySessionsController
    };

    angular
        .module('MainModule')
        .component('mySessionsComponent', mySessionsComponent);

    function mySessionsController() {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();
