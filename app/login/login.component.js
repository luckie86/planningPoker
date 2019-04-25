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

    function loginController(loginService) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.login = login;
        
        //////////////////////////////
        
        function $onInit () {
            
        }

        function login () {
            switch ($ctrl.userName) {
                case "Janez":
                    loginService.login($ctrl.userName);
                    // zamenjaj z routerjem                    
                    break;
                case "Mojca":
                    loginService.login($ctrl.userName);                    
                    break;
                default:
                    break;
            }
        }

    }

})();