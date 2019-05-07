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
        
        // returnaj websoket tako da ga lahko druga komponenta klice ( return weBsocket) po kreaciji in open

})();
