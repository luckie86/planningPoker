(function() {
    'use strict';

    angular
        .module('CoreModule')
        .factory("votingService", votingService);
    
        function votingService (webSocketService) {
            
            var arrayOfVotes = [];

                webSocketService.getSocket().addEventListener('message', function (event) {
                    var parsed = JSON.parse(event.data);   
                    if(parsed.command === 'storie_voted') {
                        arrayOfVotes = parsed.payload.votes;
                        return arrayOfVotes;
                    }
                })

            function getVotes () {
                return arrayOfVotes;
            }

            return {
                getVotes: getVotes
            }

        }
        

})();
