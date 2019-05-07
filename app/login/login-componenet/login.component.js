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

    function loginController(loginService, webSocketService) {
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
                    window.location.href = "/#!/main";
                }
            })       
        }

        function login () {
            switch ($ctrl.userName) {
                case "Janez":
                webSocketService.send({ command: "login", payload: { username : "Janez"}});
                    // zamenjaj z routerjem                    
                    break;
                case "Mojca":
                webSocketService.send({ command: "login", payload: { username : "Mojca"}});                
                    break;
                default:
                    break;
            }
        }

    }

})();
