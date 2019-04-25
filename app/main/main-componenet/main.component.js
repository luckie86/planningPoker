(function() {
    'use strict';

    var mainComponent = {
        bindings: {
        },
        templateUrl: 'app/main/main-componenet/main.html',
        controller: mainController
    };

    angular
        .module('MainModule')
        .component('mainComponent', mainComponent);

    function mainController() {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();