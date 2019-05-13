(function() {
    'use strict';

    var loginComponent = {
        bindings: {
        },
        templateUrl: 'app/login/login-componenet/login.html',
        controller: loginController
    };

    angular
        .module('LoginModule')
        .component('loginComponent', loginComponent);

    function loginController(userService, webSocketService, $state) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.login = login;
        
        //////////////////////////////
        
        function $onInit () {

            webSocketService.getSocket().addEventListener('open', function (event) {
                console.log("Opened", event);
            })    
        }

        function login () {
            switch ($ctrl.userName) {
                case "Janez":
                case "Mojca":
                    webSocketService.send({ command: "login", payload: { userName : $ctrl.userName, isAdmin: true }});
                    userService.setUser($ctrl.userName);
                    $state.go("main");                       
                    break;
                default:
                    webSocketService.send({ command: "login", payload: { userName : $ctrl.userName, isAdmin: false }});
                    userService.setUser($ctrl.userName);
                    $state.go("main");
                    break;
            }
        }

    }

})();
