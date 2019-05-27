(function() {
    'use strict';

    var finishedSessionComponent = {
        bindings: {
        },
        templateUrl: 'app/main/finished-session-component/finished-session.html',
        controller: finishedSessionController
    };

    angular
        .module('MainModule')
        .component('finishedSessionComponent', finishedSessionComponent);

    function finishedSessionController (userService, storiesService, votingService) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.isAdmin = false;

        $ctrl.votes = [];
        
        //////////////////////////////
        
        function $onInit () {
            $ctrl.isAdmin = userService.isAdmin(userService.getUser()); 
            $ctrl.estimatedStories = storiesService.getStories();

            $ctrl.votes = votingService.getVotes();

        }



    }

})();
