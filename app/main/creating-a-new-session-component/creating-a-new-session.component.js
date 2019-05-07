(function() {
    'use strict';

    var creatingANewSessionComponent = {
        bindings: {
        },
        templateUrl: 'app/main/creating-a-new-session-component/creating-a-new-session.html',
        controller: creatingANewSessionController 
    };

    angular
        .module('MainModule')
        .component('creatingANewSessionComponent', creatingANewSessionComponent);

    function creatingANewSessionController () {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        $ctrl.sessionScale = [{
            id: 1,
            label: 'Fibonacci',
            subItem: { name: 'Fibonacci' }
        }, {
            id: 2,
            label: 'T-Shirt',
            subItem: { name: 'T-Shirt' }
        }, {
            id: 3,
            label: 'Gamer',
            subItem: { name: 'Gamer' }
        }];

        $ctrl.addUserStory = addUserStory;
        
        //////////////////////////////
        
        function $onInit () {
            
        }

        function addUserStory () {
            console.log($ctrl.sessionName, $ctrl.selected.label);
        }
    
    }

})();
