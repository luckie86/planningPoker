(function() {
    'use strict';

    angular
        .module('CoreModule')
        .factory("webSocketService", webSocketService);
    
        function webSocketService () {
            
            var URL = "ws://dlabs.si:1234";
            var webSocket = new WebSocket(URL);
        
            webSocket.onopen = function (event) {
                console.log("OPEN ", event)
                webSocket.onmessage = function (event) {
                    console.log("on message",event);
                }
            }

            function send (data) {
                    var json = JSON.stringify(data);
                    console.log("Event Data:", data);
                    switch (data.command) {
                        case "login":
                            webSocket.send(json);
                            break;
                        case "logout":
                            webSocket.close()
                            break;
                    }
            }

            return {
                send: send
            }

        }

        

})();