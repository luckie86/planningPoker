(function() {
    'use strict';

    angular
        .module('CoreModule')
        .factory("sessionService", sessionService);
    
        function sessionService (webSocketService) {
            var arrayOfSessions = [];
            
            webSocketService.getSocket().addEventListener('message', function (event) {
                var parsed = JSON.parse(event.data);   
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
