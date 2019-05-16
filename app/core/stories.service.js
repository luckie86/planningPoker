(function() {
    'use strict';

    angular
        .module('CoreModule')
        .factory("storiesService", storiesService);
    
        function storiesService (webSocketService) {
            
            var arrayOfStories = [];

            function setStories () {
                webSocketService.getSocket().addEventListener('message', function (event) {
                    var parsed = JSON.parse(event.data);   
                    if(parsed.command === 'create_session') {
                        arrayOfStories = parsed.payload.stories;
                        return arrayOfStories;
                    }
                })
            }

            function getStories () {
                return arrayOfStories;
            }

            return {
                setStories: setStories,
                getStories: getStories
            }

        }
        

})();
