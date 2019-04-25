(function() {
    'use strict';

    var navbarComponent = {
        bindings: {
        },
        templateUrl: 'app/shared/navbar-component/navbar.html',
        controller: navbarController
    };

    angular
        .module('SharedModule')
        .component('navbarComponent', navbarComponent);

    function navbarController() {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();