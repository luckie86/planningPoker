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

            webSocketService.getSocket().addEventListener("message", function (event) {
                var parsed = JSON.parse(event.data);   
                if(parsed.command === 'login') {
                    $state.go("main");
                }
            })       
        }

        function login () {
            switch ($ctrl.userName) {
                case "Janez":
                case "Mojca":
                    webSocketService.send({ command: "login", payload: { username : $ctrl.userName}});
                    userService.setUser($ctrl.userName);
                    $state.go("main");                       
                    break;
                default:
                    $state.go("login");
                    break;
            }
        }

    }

})();
