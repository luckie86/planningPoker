(function() {
    'use strict';

    angular
        .module('CoreModule')
        .factory("sessionService", sessionService);
    
        function sessionService (webSocketService) {
            
            var arrayOfSessions = [];
            console.log("session service");
            webSocketService.getSocket().addEventListener('message', function (event) {
                var parsed = JSON.parse(event.data);
                console.log("znotraj servica");   
                if(parsed.command === 'create_session') {
                    arrayOfSessions.push(parsed.payload);
                    return arrayOfSessions;
                }
            })

            function getSessions () {
               return arrayOfSessions;
            }

            return {
                getSessions: getSessions,
            }

        }
        

})();
