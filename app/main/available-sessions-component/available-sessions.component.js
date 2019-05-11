(function() {
    'use strict';

    var availableSessionsComponent = {
        bindings: {
        },
        templateUrl: 'app/main/available-sessions-component/available-sessions.html',
        controller: availableSessionsController 
    };

    angular
        .module('MainModule')
        .component('availableSessionsComponent', availableSessionsComponent);

    function availableSessionsController (webSocketService, $scope) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.arrayOfSessions = [];
        
        //////////////////////////////
        
        function $onInit () {
            
            webSocketService.getSocket().addEventListener('message', function (event) {
                var parsed = JSON.parse(event.data);   
                if(parsed.command === 'create_session') {
                    parsed.payload.stories.forEach(story => {
                        $ctrl.arrayOfSessions.push(story);
                    });
                    $scope.$apply();
                }
            })

        }

    }

})();
