(function() {
    'use strict';

    var loginComponent = {
        bindings: {
        },
        templateUrl: 'app/login/login.html',
        controller: loginController
    };

    angular
        .module('LoginModule')
        .component('loginComponent', loginComponent);

    function loginController() {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.login = login;
        
        //////////////////////////////
        
        function $onInit () {

        }

        function login () {
            
        }

    }

})();