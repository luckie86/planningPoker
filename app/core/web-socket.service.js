(function() {
    'use strict';

    angular
        .module('CoreModule')
        .factory("webSocketService", webSocketService);
    
        function webSocketService () {
            
            var URL = "ws://dlabs.si:1234";
            var webSocket = new WebSocket(URL);
        
            
            function getSocket () {
                return webSocket;
            }
                
            function send (data) {
                var json = JSON.stringify(data);
                console.log("Event Data:", data);
                switch (data.command) {
                    case "login":
                    case "create_session":
                    case "create_a_session":
                    case "creating_session":
                    case "join_session":
                    case "emitt_stories":
                    case "storie_voted":
                        webSocket.send(json);
                        break;
                    case "logout":
                        webSocket.close()
                        break;
                }
            }
            return {
                send: send,
                getSocket: getSocket
            }

        }
        

})();
