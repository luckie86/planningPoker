(function() {
    'use strict';

    var readyComponent = {
        bindings: {
        },
        templateUrl: 'app/main/ready-component/ready.html',
        controller: readyController 
    };

    angular
        .module('MainModule')
        .component('readyComponent', readyComponent);

    function readyController (webSocketService, userService ,$scope) {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.listOfUsers = [];

        $ctrl.startSession = startSession;

        $ctrl.isAdmin = false;
        
        //////////////////////////////
        
        function $onInit () {
            
            webSocketService.getSocket().addEventListener('message', function (event) {
                var parsed = JSON.parse(event.data);
                if (parsed.command === "login" && userService.getUser() === parsed.payload.userName) {
                    if(parsed.payload.isAdmin) {
                        $ctrl.listOfUsers.push({userName: parsed.payload.userName, isAdmin: true});
                        $ctrl.isAdmin = true;
                    } else {
                        $ctrl.listOfUsers.push({userName: parsed.payload.userName, isAdmin: false});
                        $ctrl.isAdmin = false;
                    }
                    $scope.$apply();
                }
            })
        }

        function startSession () {

            

        }

    }

})();
