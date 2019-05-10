(function() {
    'use strict';

    var mainComponent = {
        bindings: {
        },
        templateUrl: 'app/main/main-componenet/main.html',
        controller: mainController
    };

    angular
        .module('MainModule')
        .component('mainComponent', mainComponent);

    function mainController(webSocketService) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.isAdmin;
        
        //////////////////////////////
        
        function $onInit () {
            webSocketService.getSocket().addEventListener("message", function (event) {
                var parsed = JSON.parse(event.data);   
                if(parsed.payload.userName === 'Mojca' || parsed.payload.userName === "Janez") {
                    $ctrl.isAdmin = true;
                } else {
                    $ctrl.isAdmin = false;
                }
            })       
        }

    }

})();
