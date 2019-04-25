(function() {
    'use strict';

    angular
        .module('LoginModule')
        .factory("loginService", loginService);
    
        function loginService(webSocketService) {
            console.log(webSocketService);
            
            function login(username) {
                webSocketService.send({
                    command: "login",
                    payload:{
                        username: username
                    }
                }) 
            }
            return {
                login:login
            }
        }

        
})();
